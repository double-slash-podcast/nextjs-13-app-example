import { getAllPosts } from '../../__API__'

export default async function handler(req, res) {
  const { page } = req.query
  const posts = await getAllPosts()
  res
    .status(200)
    .json(posts.sort(() => Math.random() - Math.random()).slice(0, 5))
}
