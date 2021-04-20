import { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import Dropdown from '../components/Dropdown'
import Spinner from '../components/Spinner'
import LineChart from '../components/LineChart'

const ChartsContainer = ({ user, fromFilter, toFilter }) => {
  let fromFormated, toFormated = ''

  if (fromFilter !== '')
    fromFormated = moment(fromFilter, 'MMMM Do, YYYY').format('YYYY-MM-DD')

  if (toFilter !== '')
    toFormated = moment(toFilter, 'MMMM Do, YYYY').format('YYYY-MM-DD')

  return (
    <div className="charts-container">
      <h3 className="section-subtitle">Clicks</h3>  
      <div className="chart-wrapper">
        <LineChart 
          name="Clicks"
          labels={ user.map(item => item.date) }
          data={ user.map(item => item.clicks) }
          fromFilter={ fromFormated }
          toFilter={ toFormated } />
        </div>
      <br />
      <h3 className="section-subtitle">Views</h3>
      <div className="chart-wrapper">
        <LineChart 
          name="Clicks"
          labels={ user.map(item => item.date) }
          data={ user.map(item => item.page_views) }
          fromFilter={ fromFormated }
          toFilter={ toFormated } />
      </div>
    </div>
  )
}

const UserPage = (props) => {
  const [user, setUser] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [fromFilter, setFromFilter] = useState('')
  const [toFilter, setToFilter] = useState('')

  const breadcrumbLinks = [{
    title: 'Main page',
    url: '/'
  }, {
    title: 'User statistics',
    url: '/stats'
  }, {
    title: user.length !== 0 ? `${ user[0].first_name } ${ user[0].last_name }` : '',
    url: user.length !== 0 ? `/user/${ user[0].user_id }` : ''
  }]

  useEffect(() => {
    setLoading(true)
    axios.get(`/api/user/${ props.match.params.id }`)
      .then(res => {
        setUser(res.data)
      })
      .catch(err => {
        console.log(err)
      })
      .then(() => {
        setLoading(false)
      })
  }, [ props.match.params.id ])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <section className="section section-user">
          <Breadcrumb links={ breadcrumbLinks } />
          <div className="section-user-header">
            <h2 className="section-title">{ user.length !== 0 && `${ user[0].first_name } ${ user[0].last_name }` }</h2>
            <div className="dropdown-container">
              <Dropdown title="From" list={ user.map(item => moment(item.date).format('MMMM Do, YYYY')) } onChange={ item => setFromFilter(item) } />
              <Dropdown title="To" list={ user.map(item => moment(item.date).format('MMMM Do, YYYY')) } onChange={ item => setToFilter(item) } />
            </div>
          </div>
          { isLoading ? <Spinner /> : <ChartsContainer user={ user } fromFilter={ fromFilter } toFilter={ toFilter } /> }
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default UserPage