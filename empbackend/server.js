const express = require('express')
const mysql = require('mysql2')
const connection = require('./connection/connection')
const bodyParser = require('body-parser')
const http = require('http')
const app = express();
const index = require('./index')
const server = http.createServer(index)



var cors = require('cors');


// Enable CORS for all requests
app.use(cors());

const port_num= 8080;
app.use(express.json())

server.listen(8080, ()=> {
    console.log(`server is running on port ${port_num}`);
})