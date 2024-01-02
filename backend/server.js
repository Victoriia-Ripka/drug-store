const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.post('/api/login', function (req, res) {
    console.log(req.body)
    res.redirect('http://localhost:4200/account')
})

app.listen(port, () => {
    console.log('Server is listening at port ', port)
})