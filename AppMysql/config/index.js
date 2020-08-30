const mysql = require('mysql')
const { success, error } = require('consola')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node'
})
db.connect((err) => {
    if(err) 
        error({ message: `Error: ${err}`, badge: true })
    success({ message: `Vous etez connecte a la base des donnees`, badge: true })
})

module.exports = db