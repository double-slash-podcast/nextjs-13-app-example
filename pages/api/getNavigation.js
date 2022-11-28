import { getNav } from '../../__API__'

export default async function handler(req, res) {
  const navigation = await getNav()
  res.status(200).json(navigation)
}
