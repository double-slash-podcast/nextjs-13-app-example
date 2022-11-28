import { getPost } from '../../__API__'

export default async function handler(req, res) {
  const { id } = req.query
  const post = await getPost(id)
  res.status(200).json(post)
}
