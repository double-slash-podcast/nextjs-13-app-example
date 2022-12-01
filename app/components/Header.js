import Link from 'next/link'

async function getNavigation() {
  const res = await fetch('http://localhost:3000/api/getNavigation')
  return res.json()
}

const Header = async () => {
  const navigation = await getNavigation()
  return (
    <header className="flex w-full px-6 py-6 bg-gray-200 border-b border-gray-300">
      <div className="flex w-full max-w-5xl mx-auto">
        <h1 className="text-xl font-bold text-purple-700">
          Site exemple NextJS
        </h1>
        <nav className="ml-auto">
          <ul className="flex">
            {navigation &&
              navigation.map((n) => (
                <li key={n.label} className="mx-3">
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
