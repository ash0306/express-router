const express = require('express');
const app = express();


const aboutus = require('./routes/aboutUs');
const contactus = require('./routes/contactus');
const details = require('./routes/details');
const services = require('./routes/services');
const feedback = require('./routes/feedback');
const home = require('./routes/home');




app.use('/',home)
app.use('/aboutUs',aboutus)
app.use('/contactus',contactus)
app.use('/feedback',feedback)
app.use('/services',services)
app.use('/details',details)

app.listen(3500);