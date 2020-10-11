const bodyParse = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParse.urlencoded({extended: true}))
app.use(bodyParse.json())

app.get('/teste',(req,res)=>res.sen('Ok'))
app.listen(8080, () => console.log('Executando...'))