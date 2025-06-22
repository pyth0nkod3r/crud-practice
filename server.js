const express = require('express');
const app = express()

app.listen(3000, (req, res) => {
    console.log("listening on port 3000")
})
app.use(express.urlencoded({extended:true}))
app.get("/", (req, res) => {
    // res.send('Hello World')
    // console.log(__dirname)
    res.sendFile(__dirname + '/index.html')
})
app.post('/quotes', (req, res) => {
    console.log(req.body)
})

// console.log('May Node be with you')