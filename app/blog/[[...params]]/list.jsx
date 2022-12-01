import ListArticles from './ListArticles'
import Pagination from './Pagination'

export default function List({ params }) {
  const [page] = params.params || []
  return (
    <>
      <h1 className="my-8 text-3xl font-bold ">Blog List</h1>
      <div>
        <ListArticles currentPage={page || 1} />
        <Pagination currentPage={page || 1} />
      </div>
    </>
  )
}
