const express = require('express')
const db = require('../config')
const { success, error } = require('consola')
const router = express.Router()

// Variables
const title = 'Solange Pokea'
const project = 'Don Bosco Ngangi'
const numero = '+243976353543'


router.get('/', async (req, res)=>{
    await res.render('welcome', {title, project, numero})
})

router.post('/request', async (req, res) => {
    let { email, message } = req.body
    let errors = []
    if(!email || !message){
        errors.push({msg: 'Vos champs son vides'})
    }
    if(email.length <= 3){
        errors.push({msg: "ton Address est imcomplet"})
    }
    if(errors.length > 0){
        res.render('welcome', { errors, email, message, project, title, numero })
    }else{
        let SQL = `INSERT INTO request(email, message) VALUES("${email}", "${message}")`
        db.query(SQL, (err, result) =>{
            if(err) error({message: `Error: ${err}`})
            errors.push({msg: "Votre requete a etait envoie avec success"})
            email = ''
            message = ''
            res.render('welcome', { errors, project, title, numero })
        })
    }
})

router.get('/accueil', async (req, res)=>{
    let SQL = `SELECT * FROM personnelle ORDER BY id DESC LIMIT 5`
    await db.query(SQL, (err, results)=>{
        if(err) error({msg: `Error: ${err}`})
        res.render('index', {title, project, numero, results})
    })
})

router.get('/login', async (req, res)=>{
    await res.render('login', {title, project})
})

router.post('/login', async (req, res)=>{
    await res.redirect('/accueil')
})

router.get('/register', async (req, res)=>{
    await res.render('register', {title, project})
})
router.post('/register', async (req, res)=>{
    const { name, age, gender, niveau, dob, name_giving, parente, profession, nameF, Fprofession, Fage, nameM, Mprofession, Mage, phone, Fphone, Mphone, provinance } = req.body
    let errors = []
    if(!name || !age){
        errors.push({msg: 'Replice tout le champs sur vous plait!!!'})
        res.render('register', {title, project, errors})
    }else{
        await res.send('Pass')
    }
})
router.get('/personnelle', (req, res)=>{
    let SQL = `SELECT * FROM personnelle`
    db.query(SQL, (err, results) => {
        if(err) error({message: `Error: ${err}`})
        res.render('personnelle', {title, project, results})
    })
})

router.get('/edit/:id', async (req, res) => {
    let id = req.params.id
    let SQL1 = `SELECT * FROM personnelle`
    let SQL = `SELECT * FROM personnelle WHERE id = '${id}'`
    await db.query(SQL1, (err, results) => {
        db.query(SQL, (err, result) =>{
            if(err) error({message: `Error: ${err}`})
            res.render('edit', {title, project, result, results })
        })
        
    })
})

router.post('/personnelle', async (req, res )=>{
    let { username, fullname, email, address, sexe, status, post } = req.body
    let errors = []
    if(!username || !fullname)
        errors.push({msg: 'Vos champs ne sont complet'})
    if(email.length <= 3)
        errors.push({msg: 'Votre address mail est imcomplete'})
    if(fullname <= 2)
        errors.push({msg: 'Votre nom dois avoir au moins 8 characteres'})
    if(errors.length > 0){
        let SQL = `SELECT * FROM personnelle`
        await db.query(SQL, (err, results)=>{
            if(err) error({msg: `Error: ${err}`})
            res.render('personnelle', {
                results,
                errors,
                title,
                project, 
                username, 
                fullname,
                email,
                address,
                sexe,
                status,
                post,
            })
        })  
    }else{
        let mot_de_post = '12345'
        let SQL = `INSERT INTO personnelle(username, fullname, email, address, sexe, status, post, mot_de_passe) VALUES('${username}','${fullname}','${email}','${address}','${sexe}','${status}','${post}', '${mot_de_post}')`;
        
        await db.query(SQL, (err, result) => {
            let SELECT = `SELECT * FROM personnelle`
            db.query(SELECT, (err, results) =>{
                if(err) error({message: `Error: ${err}`})
                errors.push({msg: 'Enregistrement reussie'})
                res.render('personnelle', {title, project, results})
            })
        }) 
    }
})

router.post('/update', async (req, res) => {
    
    let {username, fullname, email, address, sexe, status, post} = req.body
    let id = req.body.id
    let errors = []
    
    if(!username || !fullname || !email || !address || !sexe || !status || !post){
        errors.push({msg: 'Complete tout vos champs sur vous plait'})
        let SQL = `SELECT * FROM personnelle ORDER BY id DESC`
        let SQL1 = `SELECT * FROM personnelle WHERE id = '${id}'`
        await db.query(SQL, (err, results) => {
            if(err) error({message: `Error: ${err}`})
            db.query(SQL1, (err, result) => {
                if(err) error({message: `Error: ${err}`})
                res.render('edit', {
                    errors,
                    title, 
                    project, 
                    errors, 
                    result, 
                    results, 
                    username, 
                    fullname, 
                    email, 
                    address, 
                    sexe, 
                    status, 
                    post, 
                    id
                })
            })
        })
    }else{
        let UPDATE = `UPDATE personnelle SET username='${username}',fullname='${fullname}',email='${email}',address='${address}',sexe='${sexe}',status='${status}',post='${post}' WHERE id='${id}'`
        await db.query(UPDATE, (err, result) => {
            if(err) error({msg: `Error: ${err}`})
            res.redirect('/personnelle')
        })
    }
})

router.get('/delete/:id', async (req, res) => {
    let errors = []
    let id = req.params.id
    let SQL = `DELETE FROM personnelle WHERE id = '${id}'`
    await db.query(SQL, (err) => {
        errors.push({msg: 'Suppression reussi'})
        if(err) error({message: `Error: ${err}`, badge: true})
        let sql = `SELECT * FROM personnelle ORDER BY id DESC`
        db.query(sql, (err, results) => {
            res.render('personnelle', {title, project, results})
        })
    })
})

router.get('/security', async (req, res)=>{
    await res.render('security', {title, project})
})


module.exports = router