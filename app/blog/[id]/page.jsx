async function getPost(id) {
  const res = await fetch(`http://localhost:3000/api/getPost?id=${id}`)
  return res.json()
}

export default async function Page({ params }) {
  const post = await getPost(params.id)
  return (
    <>
      <h1 className="my-8 text-3xl font-bold">{post?.title}</h1>
      <p className="text-gray-600">{post?.body}</p>
    </>
  )
}
