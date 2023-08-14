const bcrypt = require('bcrypt')
const jsonWebToken = require('../authentification/middleware')
module.exports = ({server,model}) => {
    server.post('/sign-up', async (req,res) =>{
        const Nom = req.body.Nom
        const mail = req.body.mail
        if(!Nom || !mail || !req.body.password){
            const message = `Chacun de ces informations sont utiles, veuillez les remplir s'il vous plait`
            return res.status(400).json(message)
        }
        model.find({
            mail : mail
        }).then(resultat=>{
            console.log(`Le resultat : ${resultat}`)
            if(resultat != ""){
                const message = `Ce boite mail  est déjà utilisé pour un autre compte`
                return res.status(400).json(message)
            }
            else{
                bcrypt.hash(req.body.password,10)
                .then(hash=>{
                    console.log(hash)
                    const insert = model.create({
                        Nom : Nom,
                        mail : mail,
                        password : hash
                    })
                    console.log(insert)
                    const message = `Vos informatons ont été bien inséré dans la base de donées`
                   return res.json(message)
                })
            }
        })

    })}