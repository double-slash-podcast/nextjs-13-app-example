import Header from './components/Header'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-gray-50">
        <Header />
        <main className="max-w-5xl min-h-screen px-4 py-8 mx-auto">
          {children}
        </main>
        <footer className="flex justify-center w-full px-2 py-6 bg-gray-200 border-t border-gray-300">
          <p>
            Labore ea irure fugiat minim ullamco commodo. @
            {new Date().getFullYear()}
          </p>
        </footer>
      </body>
    </html>
  )
}
