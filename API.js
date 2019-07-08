const express = require('express')
const mysql      = require('mysql');



const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : 'student',
  database : 'blogs'
});

db.connect(function(err){
    if (err) throw err
    console.log("MySQL is connected, lookin shakin bacon!")
});

const api = express();

// creating database
api.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE blogs' 
    db.query(sql , (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Database was created ...')
    });
});

// creating a table
api.get('/createposttable', (req, res) => {
    let sql = 'CREATE TABLE posts (id int NOT NULL AUTO_INCREMENT, title varchar(255), body varchar(255), PRIMARY KEY (id))'
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Table was created ...')
    });
});


// api.get('/addpost', (req, res) => {
//     let sql = 'INSERT INTO posts (title, body) VALUES ("something", "random")'
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log(result);
//         res.send('first post added ...')
//     });
// });

api.get("/addpost", (req, res) => {
    let post = {title: "my first post", body: "hello today was a good day"}
    let sql = 'INSERT INTO posts SET ?'
    db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('first post added ...')
    })
})

api.get("/addpost2", (req, res) => {
    let post = {title: "my second post", body: "hello today day"}
    let sql = 'INSERT INTO posts SET ?'
    db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('first post added ...')
    })
})



api.listen(5000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 5000')
})

// select all post
api.get("/selectposts", (req, res) => {
    let post = {title: "my second post", body: "hello today day"}
    let sql = 'SELECT * from posts'
    db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
})

api.get("/getpost/:id", (req, res) => {
    let post = {title: "my second post", body: "hello today day"}
    let sql = 'SELECT * from posts WHERE id='+req.params.id 
    db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
})

// delete a post

api.get("/delpost/:id", (req, res) => {
    let post = {title: "my second post", body: "hello today day"}
    let sql = 'DELETE from posts WHERE id='+req.params.id 
    db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
})