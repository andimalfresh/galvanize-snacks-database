const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5556
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => res.send("Hello world !!"))

app.listen(port, console.log(`This shit getting rowdy on PORT ${port} !!`))
