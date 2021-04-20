const express = require('express')
const cors = require('cors')
const path = require('path')
const db = require('./database/db.js')
const port = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.static('public'))

app.get('/api/users/:offset', (req, res) => {
  const sql = `
    SELECT id, 
      first_name, 
      last_name, 
      email, 
      gender, 
      ip_address, 
      SUM(users_statistic.clicks) as total_clicks, 
      SUM(users_statistic.page_views) as total_page_views
    FROM users
    INNER JOIN users_statistic ON users.id = users_statistic.user_id
    GROUP BY users.id
    LIMIT 50
    OFFSET ${ req.params.offset }
  `

  db.all(sql, [], (err, data) => {
    if (err) {
      res.status(400).json({ 'Error': err.message })
      return
    }
    
    res.send(data)
  })
})

app.get('/api/user/:id/:from?/:to?', (req, res) => {
  const sql = `
    SELECT 
      user_id, 
      users.first_name,
      users.last_name,
      date,
      clicks,
      page_views
    FROM users_statistic
    INNER JOIN users ON users_statistic.user_id = users.id
    WHERE user_id = ${ req.params.id }
    ${ req.params.from !== undefined ? `AND date >= "${ req.params.from }"` : '' }
    ${ req.params.to !== undefined ? `AND date <= "${ req.params.to }"` : '' }
  `

  db.all(sql, [], (err, data) => {
    if (err) {
      res.status(400).json({ 'Error': err.message })
      return
    }
    res.send(data)
  })
})


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port, () => {
  console.log(`Server running on port ${ port }`)
})