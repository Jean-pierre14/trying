const express = require('express'),
    port = 7000,
    path = require('path'),
    ejs = require('ejs'),
    bodyParser = require('body-parser'),
    mysql = require('mysql'),
    app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node'
});

connection.connect( function(error) {
    if(error) console.log(error)
    else console.log('Database connected: to >> Node');
})

app.use('/assets/', express.static('public'));

app.set('view engine', 'ejs');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { extended: true } ))

// Routes
app.get('/', (req, res) =>{
    let sql = "SELECT * FROM users ORDER BY id DESC";
    let query = connection.query(sql, (err, rows) => {
        res.render("index", { title: 'Crud mysql', users: rows });
    });
});
// Search
app.post('/search', (req, res) => {
    let item = req.body.search;
    let sql = `SELECT * FROM users WHERE name ='%${item}%'`;
    let query = connection.query(sql, (err, result) => {
        if (err) throw err
        res.render("index", {title: 'Crud nodejs is awesome', users: result })
    })
})

app.get('/add', (req, res) => {
    let sql = "SELECT * FROM users";
    let query = connection.query(sql, (err, rows) =>{
        res.render('add', {users: rows})
    })
})

// edit page
app.get('/edit/:userId', (req, res) => {
    let userId = req.params.userId;
    let sql = `SELECT * FROM users WHERE id =  ${userId}`;
    let query = connection.query(sql, (err, result) =>{
        res.render('edit', {user: result[0]})
    })
})

// delete page
app.get('/delete/:userId', (req, res) => {
    let userId = req.params.userId;
    let sql = `DELETE FROM users WHERE id = '${userId}'`;
    let query = connection.query(sql, (err, result) => {
        if(err) throw err
        res.redirect('/')
    });
})
// Post record users

app.post('/save', (req, res) => {
    let data = {
        name: req.body.name,
        email: req.body.email,
        phone_no: req.body.phone
    };
    let sql = "INSERT INTO users SET ?";
    let query = connection.query(sql, data, (err, results) => {
        if(err) throw err
        res.redirect('/');
    });
})

// post update
app.post('/update', (req, res) =>{
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let userId = req.body.id;
    
    let sql = `UPDATE users SET name='${name}', email='${email}', phone_no='${phone}' WHERE id ='${userId}'`;
    let query = connection.query(sql, (err, result) => {
        if(err) throw err
        res.redirect('/')
    }) 
} )
// Routes End

// Server Settings
app.listen(port, ()=>{
    console.log('Server run on port: ' + port)
})