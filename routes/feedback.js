const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.send('Feedback page');
})

router.get('/:name/:feed', (req,res)=>{
    res.send('Feedback page Name: ' + req.params.name + 'Feed: ' + req.params.feed);
})

module.exports = router