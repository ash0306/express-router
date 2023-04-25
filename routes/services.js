const express = require('express')
const router = express.Router()

const services = [
    {
        "name" : "Web Devepolment"
    },
    {
        "name" : "App Devepolment"
    },
    {
        "name" : "Frontend Devepolment"
    },
    {
        "name" : "Backend Devepolment"
    },
    {
        "name" : "Full-Stack Devepolment"
    },
    {
        "name" : "Debugging Services"
    },
    {
        "name" : "Laptop Services"
    }
]

router.get('/', (req,res)=>{
    res.status(200).send(res.json({services}));
})

router.get('/:id',(req,res)=>{
    res.send("Get services with id: " + req.params.id);
    console.log(req.service.name)
})

router.param('id',(req,res,next,id) =>{
    console.log(req.params.id)
    req.service = services[id]
    next();
})


module.exports = router