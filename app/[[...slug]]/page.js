import { notFound } from 'next/navigation'
import { getPages } from '../../__API__'
import Counter from '../components/Counter'

async function getPage(slug) {
  const res = await fetch(`http://localhost:3000/api/getPage?page=${slug}`)
  return res.json()
}

export default async function Page({ params }) {
  const arr = params.slug
  const [slug] = arr || []
  const page = await getPage(slug || '')
  if (!page) {
    notFound()
  }
  return (
    <>
      <Counter />
      <h1 className="my-8 text-3xl font-bold">{page?.title}</h1>
      <p className="text-gray-600">{page?.body}</p>
    </>
  )
}

export async function generateStaticParams() {
  const pages = await getPages()
  pages.shift()
  const paths = pages.map((page) => ({
    slug: [page.slug],
  }))
  paths.push({ slug: [] })
  return paths
}
