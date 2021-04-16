import ChevronLeftIcon from '../components/ChevronLeftIcon'
import ChevronRightIcon from '../components/ChevronRightIcon'

const Pagination = () => (
  <div className="pagination">
    <a className="pagination-arrow" href="/"><ChevronLeftIcon /></a>
    <a className="pagination-btn active" href="/">1</a>
    <a className="pagination-btn" href="/">2</a>
    <a className="pagination-btn" href="/">3</a>
    <a className="pagination-btn" href="/">4</a>
    <a className="pagination-btn" href="/">5</a>
    <a className="pagination-arrow active" href="/"><ChevronRightIcon /></a>
  </div>
)

export default Pagination