import { getTotalPages } from '../../__API__'

export default async function handler(req, res) {
  const total = await getTotalPages()
  res.status(200).json(total)
}
