const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.send('Details page ');
})

router.get('/:id([0-9]{2})', (req,res)=>{
    res.send('Details page ' + req.params.id);
})

module.exports = router