import { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import Spinner from '../components/Spinner'
import LineChart from '../components/LineChart'

const ChartsContainer = ({ user }) => (
  <div className="charts-container">
    <h3 className="section-subtitle">Clicks</h3>  
    <div className="chart-wrapper">
      <LineChart 
        name="Clicks"
        labels={ user.map(item => moment(item.date).format('MMMM Do')) }
        data={ user.map(item => item.clicks) } />
      </div>
    <br />
    <h3 className="section-subtitle">Views</h3>
    <div className="chart-wrapper">
      <LineChart 
        name="Clicks"
        labels={ user.map(item => moment(item.date).format('MMMM Do')) }
        data={ user.map(item => item.page_views) } />
    </div>
  </div>
)

const UserPage = (props) => {
  const [user, setUser] = useState([])
  const [isLoading, setLoading] = useState(false)

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
        <section className="section">
          <Breadcrumb links={ breadcrumbLinks } />
          <h2 className="section-title">{ user.length !== 0 && `${ user[0].first_name } ${ user[0].last_name }` }</h2>
          { isLoading ? <Spinner /> : <ChartsContainer user={ user } /> }
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default UserPage