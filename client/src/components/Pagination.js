import ReactPaginate from 'react-paginate'
import ChevronLeftIcon from '../components/ChevronLeftIcon'
import ChevronRightIcon from '../components/ChevronRightIcon'

const Pagination = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      pageCount={ pageCount }
      pageRangeDisplayed={ 4 }
      marginPagesDisplayed={ 0 }
      containerClassName="pagination"
      pageLinkClassName="pagination-btn"
      activeLinkClassName="active"
      previousClassName="pagination-arrow"
      previousLabel={ <ChevronLeftIcon /> }
      nextClassName="pagination-arrow"
      nextLabel={ <ChevronRightIcon /> }
      disabledClassName="disabled"
      breakLabel=""
      onPageChange={ page => onPageChange(page.selected) } />
  )
}


export default Pagination