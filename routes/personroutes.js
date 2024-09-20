const express = require('express')
const router = express.Router()
const persons = require('../Schema/personSchema')

//post the persons
router.post('/', async (req, res) => {
    console.log(req.body);  // Log the request body
    
    const postPerson = new persons({
        Name: req.body.Name,
        Age: req.body.Age
    })

    try {
        // Save to DB
        const savePersons = await postPerson.save()
        res.json(savePersons)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//get all the persons

router.get('/',async(req,res)=>{
    try{
        const getAll = await persons.find()
        res.json(getAll)
    }
    catch(err){
        res.json({"error":err})
    }
})

//getpersons by Id
router.get('/:id',async (req,res)=>{
    try{
        const getById = await persons.findById(req.params.id)  
        res.json(getById) 
    }catch(err){
        res.json({err:'err'})
    }
})


module.exports = router