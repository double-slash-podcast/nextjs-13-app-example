import ListArticles from '../../components/ListArticles'
import Pagination from '../../components/Pagination'

export default function Blog({ searchParams }) {
  return (
    <>
      <h1 className="my-8 text-3xl font-bold ">Blog List</h1>
      <div>
        <ListArticles currentPage={searchParams.page || 1} />
        <Pagination currentPage={searchParams.page || 1} />
      </div>
    </>
  )
}
