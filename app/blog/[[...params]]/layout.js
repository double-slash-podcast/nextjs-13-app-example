import BestArticles from './components/BestArticles'

export default function LayoutBlog({ children }) {
  return (
    <div className="grid grid-cols-12">
      <section className="col-span-8 px-4">{children}</section>
      <div className="col-span-4 p-3 py-8 ">
        <BestArticles />
      </div>
    </div>
  )
}
