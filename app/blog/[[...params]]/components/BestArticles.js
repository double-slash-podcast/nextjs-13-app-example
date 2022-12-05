import Link from 'next/link'

async function getPosts(page) {
  const res = await fetch(`http://localhost:3000/api/getRandomPosts`, {
    next: { revalidate: 60 },
  })
  return res.json()
}

export default async function BestArticles({ currentPage }) {
  const posts = await getPosts(currentPage)
  return (
    <div>
      <h2 className="text-2xl font-bold">Articles intéressants</h2>
      <ul className="py-6">
        {posts &&
          posts.map((p) => (
            <li key={p?.id}>
              <Link className="p-2 text-sm underline" href={`/blog/${p?.id}`}>
                {p.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}
