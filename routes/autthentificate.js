const bcrypt = require('bcrypt')
const privateKey = require('../authentification/costumKey')
const jwt = require('jsonwebtoken')
module.exports = ({server,model})=> {
    server.post('/auth/log-in',(req,res)=> {
        const mail = req.body.mail
        const password = req.body.password
        model.find({
            mail : mail
        }).then(auth=>{
                if(auth == ""){
                    auth = undefined
                    console.log(`Le maitre du jeux : ${auth}`)
                    const message = `Vérifier l'indentifiant que vous avez saisi ou veuillez en créer`
                    return res.status(400).json({message,auth})
                }
            bcrypt.compare(password,auth[0].password)
                .then(data=>{
                   if(data){
                    const token = jwt.sign({
                        UserId : auth[0]._id
                    },
                    privateKey
                    ,{
                        expiresIn : "24h"
                    }
                    )
                    const message = `Tentative de connexion reussi`
                   return res.json({message,data,token})
                   }
                   const message = `Une des informations que vous avez saisi est incorrect`
                   return res.status(400).json({message})
                   })
                .catch(err=>{
                    const message = `Veuillez réessayer plus tard`
                    return res.status(500).json({message,err})
                })
                })
                })}