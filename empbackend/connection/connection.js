const mysql = require('mysql2')
require('dotenv').config();

var connection = mysql.createConnection({
    port : process.env.db_port,
    host : process.env.db_host,
    user : process.env.db_username,
    password : process.env.db_password,
    database : process.env.db_name
})

connection.connect((err)=>{
    if(!err){
        console.log("Database connect successful");
    }
    else{
        console.log(err);
    }
})

module.exports = connection;