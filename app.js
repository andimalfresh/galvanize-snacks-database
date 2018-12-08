const express = require('express')
const queries = require('./queries')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5556

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    queries.listAll().then(snacks => res.send(snacks))
})

app.listen(port, console.log(`This shit getting rowdy on PORT ${port} !!`))
