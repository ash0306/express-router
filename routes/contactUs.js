const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.send('Contact Us from server')
})

module.exports = router