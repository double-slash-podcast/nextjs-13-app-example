import Link from 'next/link'

async function getPosts(page) {
  const res = await fetch(`http://localhost:3000/api/getPosts?page=${page}`)
  return res.json()
}

export default async function ListArticles({ currentPage }) {
  const posts = await getPosts(currentPage)
  return (
    <ul>
      {posts &&
        posts.map((p) => (
          <li key={p?.id}>
            <Link className="p-2 text-lg underline" href={`/blog/${p?.id}`}>
              {p.title}
            </Link>
          </li>
        ))}
    </ul>
  )
}
