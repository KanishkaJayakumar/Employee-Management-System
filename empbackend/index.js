const express = require('express')
const app = express();
const addempRoute = require('./routes/addemp')
var cors = require('cors');
app.use(express.json())

app.use(cors())


app.use('/addemp',addempRoute)
module.exports = app;