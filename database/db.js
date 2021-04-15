const sqlite3 = require('sqlite3').verbose()
const dbSource = './database/db.sqlite'

const db = new sqlite3.Database(dbSource, err => {
  if (err) {
    console.log('Cannot open database!')
    console.log('Error:', err.message)
    throw err
  } else {
    console.log('Connected to SQlite3 database!')
    const sql = 'CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT UNIQUE)'

    db.run(sql, err => {
      if (err) {
        console.log('Creating table error!')
        console.log('Error:', err.message)
      } else {
        console.log('Table just created, creating some rows.')
        const insert = 'INSERT INTO users (name, email) VALUES (?, ?)'

        db.run(insert, ['admin', 'aliiev.akhtem@gmail.com'])
        db.run(insert, ['John', 'johndoe@gmail.com'])
      }
    })
  }
})

module.exports = db