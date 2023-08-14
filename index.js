const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
// const Sequelize = require('sequelize')
const express = require('express')
const {mongoose,Schema} = require('mongoose')
// const baseD = require('./basededonnées/base')
require('./basededonnées/mongoBase')(mongoose)
const model = require('./basededonnées/MongoDB/mongoose')
const cors = require('cors')

// const Model =  new model({
//     Nom : "Nomena Walker"
// })
// const resultat = Model.save()
// console.log(resultat)
const server = express()
const port = 3000
server.use(cors())
server.use((req,res,next)=>{
    console.log(req.url)
    next()
})
server.use(bodyParser.json())
require('./routes/create')({server,model})
require('./routes/autthentificate')({server,model})
require('./routes/delete')({server,model})
// baseD(Sequelize)
// require('./authentification/authentification')(server)
server.listen(port,()=>console.log(`http://localhost:${port}`))