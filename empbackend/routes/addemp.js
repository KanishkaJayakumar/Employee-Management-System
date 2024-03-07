const express = require('express')
const router = express.Router()
require('dotenv').config()
const connection = require('../connection/connection')
var cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json())


router.post('/addnewcenter', (req, res) => {
    const { firstname,lastname,empid,department,email,dob,experience,salary,address} = req.body;

    console.log(req.body);
    if (!firstname || !lastname || !empid || !department || !email || !dob || !experience || !salary || !address) {
        return res.status(400).json({ message: "All the fields are required." })
    }
    // First name, Last name, Employee Id, Department, Email, Date Of Birth, Experience, Salary and Address of Employee
    connection.query('SELECT * from info where firstname=? AND empid=? AND department=?', [firstname, empid, department], (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            return res.status(409).json({ message: "Employee details already exists" });
        }

        connection.query('INSERT into info (firstname,lastname,empid,department,email,dob,experience,salary,address) VALUES(?,?,?,?,?,?,?,?,?)', [firstname,lastname,empid,department,email,dob,experience,salary,address], (err, results) => {
            if (err) {
                console.error('error inserting center', err);
                throw err;
            }
            res.status(201).json({ message: "New Employee details added Successfully" });
        });
    });
});

router.post('/savedata', (req, res) => {
    const { firstname,lastname,empid,department,email,dob,experience,salary,address,aadhaar,account,ifsc,bankname,branchname,pan} = req.body;

    console.log(req.body);
    // if (!firstname || !lastname || !empid || !department || !email || !dob || !experience || !salary || !address || !aadhaar || !account || !ifsc || !bankname || !branchname || !pan ) {
    //     return res.status(400).json({ message: "All the fields are required." })
    // }
    // First name, Last name, Employee Id, Department, Email, Date Of Birth, Experience, Salary and Address of Employee
    connection.query('SELECT * from info where firstname=? AND empid=? AND department=?', [firstname, empid, department], (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            return res.status(409).json({ message: "Employee details already exists" });
        }

        connection.query('INSERT into info (firstname,lastname,empid,department,email,dob,experience,salary,address,aadhaar,account,ifsc,bankname,branchname,pan) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [firstname,lastname,empid,department,email,dob,experience,salary,address,aadhaar,account,ifsc,bankname,branchname,pan], (err, results) => {
            if (err) {
                console.error('error inserting center', err);
                throw err;
            }
            res.status(201).json({ message: "New Employee details added Successfully" });
        });
    });
});


module.exports = router;