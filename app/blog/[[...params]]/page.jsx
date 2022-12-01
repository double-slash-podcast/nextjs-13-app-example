import { getAllPosts, getPosts, getTotalPages } from '../../../__API__'
import List from './list'
import Post from './post'

export const revalidate = 500

export default function Blog({ params }) {
  const [param] = params?.params || []
  // detect if is blog post
  const isPost = param !== undefined && isNaN(+param)
  if (isPost) {
    return <Post params={params} />
  }
  return <List params={params} />
}

export async function generateStaticParams() {
  //   const total = await getTotalPages()
  //   const arr = Array.from({ length: total })
  //   // list route
  //   const paths = arr.map((p, i) => ({
  //     params: [`${i + 1}`],
  //   }))
  //   paths.push({ params: [] })
  //   // posts route
  //   const posts = await getAllPosts()
  //   const _posts = posts.splice(0, 20)
  //   _posts.forEach((p) =>
  //     paths.push({
  //       params: [`${p.id}`],
  //     }),
  //   )
  //   return paths
  return []
}
