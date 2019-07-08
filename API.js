const express = require('express')

const app = express();


// listening
app.listen(5000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 5000')
})
