require ('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const path = require('path')

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const {login, register, signout, buyerSession} = require('./controllers/authCtrl')
const{getCars, addCars, deleteCars,updateCars} = require('./controllers/carsCtrl')

const app = express()

app.use( express.static( `${__dirname}/../build` ) );
app.use(express.json())
app.use(session({
    secret:SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 1000*60*60*24*14
    }
}))

massive({
    connectionString:CONNECTION_STRING,
    ssl:{rejectUnauthorized:false}
}).then(db =>{
    app.set('db', db)
    console.log('db testing connected')
}).catch(err => console.log('error, can not connect',err))


//AUTH//
app.post('/auth/register', register)
app.post('/auth/login', login)
app.get('/auth/signout', signout)
app.get('/auth/buyer_session', buyerSession)

//Cars//
app.get('/api/Cars/', getCars)
app.post('/api/addCars', addCars)
app.put('/api/editCars/:id', updateCars)
app.delete('/api/deleteCars/:id', deleteCars)


app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(SERVER_PORT, ()=>{
    console.log(`Server testing on port ${SERVER_PORT}`)
})