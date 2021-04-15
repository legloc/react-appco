const express = require('express')
const db = require('./database/db.js')
const port = process.env.PORT || 5000
const app = express()

app.get('/api/users', (req, res) => {
  const sql = 'SELECT * FROM users'
  
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(400).json({ 'Error': err.message })
      return
    }
    res.json({ 'users': rows })
  })
})

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(port, () => {
  console.log(`Server running on port ${ port }`)
})