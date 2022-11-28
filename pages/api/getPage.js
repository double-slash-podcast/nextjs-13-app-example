import { getPage } from '../../__API__'

export default async function handler(req, res) {
  const { page } = req.query
  const _page = await getPage(page)
  res.status(200).json(_page)
}
