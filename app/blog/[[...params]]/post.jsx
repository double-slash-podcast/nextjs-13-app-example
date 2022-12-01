import { getPosts } from '../../../__API__'

async function getPost(id) {
  const res = await fetch(`http://localhost:3000/api/getPost?id=${id}`)
  console.log('post fetch')
  return res.json()
}

export default async function Post({ params }) {
  const [id] = params.params || []
  const post = await getPost(id)
  if (!post) {
    notFound()
  }
  return (
    <>
      <h1 className="my-8 text-3xl font-bold">{post?.title}</h1>
      <p className="text-gray-600">{post?.body}</p>
    </>
  )
}
