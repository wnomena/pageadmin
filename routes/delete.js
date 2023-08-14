const jsonWebToken = require('../authentification/middleware')
module.exports = ({server,model}) =>{
    server.delete('/delted/:delete',jsonWebToken , (req,res)=>{
        const infoToDelete = req.params.delete
        model.find({
            mail : infoToDelete
        }).then(resu=>{
            if(resu == ""){
                const message = `On n'a pas trouver aucune information identique à  ce que vous avez demandé`
                return res.status(400).json({message,resu,infoToDelete})
            }
            console.log(resu)
            model.deleteOne({mail : infoToDelete})
                .then(valiny=>{
                    const message = `Voafafa tanteraka ireo`
                    return res.json({valiny,message})
                })
        })
        .catch(err=>{
            console.log(err)
            const message = `Le serveur ne répond pas, veuillez réessayer plus tard`
            res.status(500).json({message,err})
        })
    })
}