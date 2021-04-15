const sqlite3 = require('sqlite3').verbose()
const dbSource = './database/db.sqlite'
const users = require('./users.json')
const users_statistic = require('./users_statistic.json')

const db = new sqlite3.Database(dbSource, err => {
  if (err) {
    console.log('Cannot open database!')
    console.log('Error:', err.message)
    throw err
  } else {
    console.log('Connected to SQlite3 database!')

    const sql_users = `CREATE TABLE users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      gender TEXT,
      ip_address TEXT
    )`

    const sql_users_statistic = `CREATE TABLE users_statistic(
      user_id INTEGER,
      date TEXT,
      page_views INTEGER,
      clicks INTEGER,
      FOREIGN KEY (user_id) REFERENCES users (id)
    )`

    db.run(sql_users, err => {
      if (err) {
        console.log('Table "users" already created.')
      } else {
        console.log('Table "users" just created, inserting rows.')        
        const sql_users_insert = 'INSERT INTO users (id, first_name, last_name, email, gender, ip_address) VALUES (?, ?, ?, ?, ?, ?)'

        users.forEach(user => {
          db.run(sql_users_insert, Object.values(user))
        })
      }
    })

    db.run(sql_users_statistic, err => {
      if (err) {
        console.log('Table "users_statistic" already created.')
      } else {
        console.log('Table "users_statistic" just created, inserting rows.')        
        const sql_users_statistic_insert = 'INSERT INTO users_statistic (user_id, date, page_views, clicks) VALUES (?, ?, ?, ?)'

        users_statistic.forEach(user => {
          db.run(sql_users_statistic_insert, Object.values(user))
        })
      }
    })
  }


})

module.exports = db