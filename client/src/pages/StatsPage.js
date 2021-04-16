import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import Table from '../components/Table'
import Pagination from '../components/Pagination'

const breadcrumbLinks = [{
  title: 'Main page',
  url: '/'
}, {
  title: 'User statistics',
  url: '/stats'
}]

const StatsPage = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <section className="section section-users-statistics">
          <Breadcrumb links={ breadcrumbLinks } />
          <h2 className="section-title">Users statistics</h2>
          <Table />
          <Pagination />
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default StatsPage