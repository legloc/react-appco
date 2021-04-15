const express = require('express')
const db = require('./database/db.js')
const port = process.env.PORT || 5000
const app = express()

app.get('/api/users', (req, res) => {
  const sql = 'SELECT * FROM users'
  
  db.all(sql, [], (err, data) => {
    if (err) {
      res.status(400).json({ 'Error': err.message })
      return
    }
    
    res.json({ 'data': data })
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

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(port, () => {
  console.log(`Server running on port ${ port }`)
})