const express = require('express')
const mysql      = require('mysql');



const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : 'student'
});

db.connect(function(err){
    if (err) throw err
    console.log("MySQL is connected, lookin shakin bacon!")
});

const api = express();

api.listen(5000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 5000')
})
