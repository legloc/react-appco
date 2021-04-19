import { useState, useEffect } from 'react'
import axios from 'axios'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import Table from '../components/Table'
import Pagination from '../components/Pagination'
import Spinner from '../components/Spinner'

const StatsPage = (props) => {
  const [isLoading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const limit = 50
  const breadcrumbLinks = [{
    title: 'Main page',
    url: '/'
  }, {
    title: 'User statistics',
    url: '/stats'
  }]

  const apiRequest = (offset = 0) => {
    setLoading(true)
    axios.get(`/api/users/${ offset }`)
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => {
        console.log(err)
      })
      .then(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    apiRequest()
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <section className="section section-users-statistics">
          <Breadcrumb links={ breadcrumbLinks } />
          <h2 className="section-title">Users statistics</h2>
          { isLoading ? <Spinner /> : <Table users={ users } /> }
          <Pagination pageCount={ 1000 / limit } onPageChange={ page => apiRequest(page * limit) } />
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default StatsPage