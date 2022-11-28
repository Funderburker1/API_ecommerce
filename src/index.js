const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const rotas = require('./routes')

const app = express()

mongoose.connect(process.env.MONGO_URI, {
   useUnifiedTopology: true,
   useNewUrlParser: true
}, console.log('database conectado'))

app.use(cors())
app.use(express.json())
app.use(rotas)

app.listen(3333, () => console.log('server rodando'))