const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const morgan = require('morgan')

//body-pasrser
app.use(express.json())

//middleware
app.use(morgan('dev'))



const myPersons = 
[
   {
    id:1,
    name:'gayu',
    age:24
   },
   {
    id:2,
    name:'aksra',
    age:25
   },
   {
    id:3,
    name:'diya',
    age:26
   },
]

//getAll persons
app.get('/',(req,res)=>{
    res.json(myPersons)
})

//getBy ID
app.get('/:id',async(req,res)=>{
    const id = Number(req.params.id) // Convert to number
    const getOne =await myPersons.filter(e=> e.id === id)
    res.json(getOne)
})

//post new persons
app.post('/',async(req,res)=>{
    
    myPersons.push(req.body)
    res.json(req.body)
    console.log(req.body)
})





app.listen(3000,()=>{
    console.log('server is running on the port')
})