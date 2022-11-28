import Image from 'next/image'
import { getPages } from '../../__API__'

async function getPage(slug) {
  const res = await fetch(`http://localhost:3000/api/getPage?page=${slug}`)
  return res.json()
}

export default async function Page({ params }) {
  const page = await getPage(params.slug)
  return (
    <>
      <h1 className="my-8 text-3xl font-bold">{page?.title}</h1>
      <p className="text-gray-600">{page?.body}</p>
    </>
  )
}

export async function generateStaticParams() {
  const pages = await getPages()
  pages.shift()
  return pages.map((page) => ({
    slug: page.slug,
  }))
}
