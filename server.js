const express = require('express')
const cors = require('cors')
const path = require('path')
const db = require('./database/db.js')
const port = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.static('public'))

app.get('/api/users', (req, res) => {
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
    INNER JOIN users_statistic
    ON users.id = users_statistic.user_id
    GROUP BY users.id
    LIMIT 50
  `
  
  db.all(sql, [], (err, data) => {
    if (err) {
      res.status(400).json({ 'Error': err.message })
      return
    }
    
    res.send(data)
  })
})

app.get('/api/users/:id', (req, res) => {
  const sql = 'SELECT * FROM users WHERE id = ?'
  const params = [ req.params.id ]

  db.all(sql, params, (err, data) => {
    if (err) {
      res.status(400).json({ 'Error': err.message })
      return
    }

    res.json({ 'data': data })
  })
})

app.get('/api/users_statistic', (req, res) => {
  const sql = 'SELECT * FROM users_statistic'
  
  db.all(sql, [], (err, data) => {
    if (err) {
      res.status(400).json({ 'Error': err.message })
      return
    }

    res.json({ 'data': data })
  })
})

app.get('/api/users_statistic/:id', (req, res) => {
  const sql = 'SELECT * FROM users_statistic WHERE user_id = ?'
  const params = [ req.params.id ]

  db.all(sql, params, (err, data) => {
    if (err) {
      res.status(400).json({ 'Error': err.message })
      return
    }

    res.json({ 'data': data })
  })
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port, () => {
  console.log(`Server running on port ${ port }`)
})