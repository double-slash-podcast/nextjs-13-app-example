import Image from 'next/image'

async function getPage() {
  const res = await fetch('http://localhost:3000/api/getPage?page=')
  return res.json()
}

export default async function Home({}) {
  const page = await getPage()
  return (
    <>
      <h1 className="my-8 text-3xl font-bold">{page?.title}</h1>
      <p className="text-gray-600">{page?.body}</p>
    </>
  )
}
