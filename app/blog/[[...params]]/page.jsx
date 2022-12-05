import { Suspense } from 'react'
import { getAllPosts, getTotalPages } from '../../../__API__'
import List from './components/List'
import Post from './components/Post'

// export const revalidate = 500

export default function Blog({ params }) {
  const [param] = params?.params || []
  // detect if is blog post
  const isPost = param !== undefined && isNaN(+param)
  if (isPost) {
    return (
      <Suspense fallback="loading article">
        <Post params={params} />
      </Suspense>
    )
  }
  return (
    <Suspense fallback="loading articles list">
      <List params={params} />
    </Suspense>
  )
}

export async function generateStaticParams() {
  const total = await getTotalPages()
  const arr = Array.from({ length: total })
  // list route
  const paths = arr.map((p, i) => ({
    params: [`${i + 1}`],
  }))
  paths.push({ params: [] })
  // posts route
  const posts = await getAllPosts()
  const _posts = posts.splice(0, 20)
  _posts.forEach((p) =>
    paths.push({
      params: [`${p.id}`],
    }),
  )
  return paths
  //   return []
}
