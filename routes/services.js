const express = require('express')
const router = express.Router()

const services = [
    {
        "id" : 1,
        "name" : "Web Devepolment",
    },
    {
        "id" : 2,
        "name" : "App Devepolment",
    },
    {
        "id" : 3,
        "name" : "Frontend Devepolment",
    },
    {
        "id" : 4,
        "name" : "Backend Devepolment",
    },
    {
        "id" : 5,
        "name" : "Full-Stack Devepolment",
    },
    {
        "id" : 6,
        "name" : "Debugging Services"
    },
    {
        "id" : 7,
        "name" : "Laptop Services"
    }
]

router.get('/', (req,res)=>{
    res.status(200).send(res.json({services}));
})

router.get('/:id',(req,res)=>{
    const serviceId = Number(req.params.id);
    const result = services.find( serv => serv.id === serviceId)
    
    if(!result){
        res.status(500).send('Services not found');
    }
    else{
        res.json(result.name);
    }
})


module.exports = router