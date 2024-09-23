const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')


//body-parser
app.use(express.json())

//middleware
app.use(morgan('dev'))

const personrouter = require('./routes/personroutes')
app.use('/persons',personrouter)

//connected to  mongodb
const mongoURI = 'mongodb://localhost:27017/apidemo'
mongoose.connect(mongoURI)
.then(()=>console.log('mongodb connected'))
.catch(err=>console.log('mongodb connection err',err))



app.listen(4000,()=>{
    console.log('server is running on the port')
})