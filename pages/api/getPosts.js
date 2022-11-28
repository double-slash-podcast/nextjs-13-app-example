import { getPosts } from '../../__API__'

export default async function handler(req, res) {
  const { page } = req.query
  const posts = await getPosts(page)
  res.status(200).json(posts)
}
