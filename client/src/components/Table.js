const users = [{
  id: '1',
  firstName: 'Samuel',
  lastName: 'Frost',
  email: 'sirious.sam@gmail.com',
  gender: 'male',
  ipAddress: '192.168.32.05',
  totalClicks: '290 883',
  totalPageViews: '290 883'
}, {
  id: '2',
  firstName: 'Samuel',
  lastName: 'Frost',
  email: 'sirious.sam@gmail.com',
  gender: 'male',
  ipAddress: '192.168.32.05',
  totalClicks: '290 883',
  totalPageViews: '290 883'
}, {
  id: '3',
  firstName: 'Samuel',
  lastName: 'Frost',
  email: 'sirious.sam@gmail.com',
  gender: 'male',
  ipAddress: '192.168.32.05',
  totalClicks: '290 883',
  totalPageViews: '290 883'
}, {
  id: '4',
  firstName: 'Samuel',
  lastName: 'Frost',
  email: 'sirious.sam@gmail.com',
  gender: 'male',
  ipAddress: '192.168.32.05',
  totalClicks: '290 883',
  totalPageViews: '290 883'
}, {
  id: '5',
  firstName: 'Samuel',
  lastName: 'Frost',
  email: 'sirious.sam@gmail.com',
  gender: 'male',
  ipAddress: '192.168.32.05',
  totalClicks: '290 883',
  totalPageViews: '290 883'
}, {
  id: '6',
  firstName: 'Samuel',
  lastName: 'Frost',
  email: 'sirious.sam@gmail.com',
  gender: 'male',
  ipAddress: '192.168.32.05',
  totalClicks: '290 883',
  totalPageViews: '290 883'
}, {
  id: '7',
  firstName: 'Samuel',
  lastName: 'Frost',
  email: 'sirious.sam@gmail.com',
  gender: 'male',
  ipAddress: '192.168.32.05',
  totalClicks: '290 883',
  totalPageViews: '290 883'
}, {
  id: '8',
  firstName: 'Samuel',
  lastName: 'Frost',
  email: 'sirious.sam@gmail.com',
  gender: 'male',
  ipAddress: '192.168.32.05',
  totalClicks: '290 883',
  totalPageViews: '290 883'
}, {
  id: '9',
  firstName: 'Samuel',
  lastName: 'Frost',
  email: 'sirious.sam@gmail.com',
  gender: 'male',
  ipAddress: '192.168.32.05',
  totalClicks: '290 883',
  totalPageViews: '290 883'
},]

const Table = () => (
  <div style={{ overflowX: 'auto' }}>
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>IP Address</th>
          <th>Total clicks</th>
          <th>Total page views</th>
        </tr>
      </thead>
      <tbody>
        { users.map(user => (
          <tr key={ user.id }>
            <td>{ user.id }</td>
            <td>{ user.firstName }</td>
            <td>{ user.lastName }</td>
            <td>{ user.email }</td>
            <td>{ user.gender }</td>
            <td>{ user.ipAddress }</td>
            <td>{ user.totalClicks }</td>
            <td>{ user.totalPageViews }</td>
          </tr>
        )) }
      </tbody>
    </table>
  </div>
)

export default Table