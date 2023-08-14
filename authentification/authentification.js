module.exports = (server) => {
server.post('/login',(req,res) =>{
    const name = req.body.Nom 
    const Password = req.body.password
    base.findOne({
        where : {
            name : name
        }
    })
    .then(InfoUsers=>{
        bcrypt.compare(InfoUsers.password,Password)
        .then(_=>{
            var message ;
            if(!Password){
                message : `Veuillez inserer votre mot de passe ou veuillez appuyer sur mot de passe oublié`
                return res.status(400).json({message})
            }
            if(Password != InfoUsers.password){
                message : `Le mot de passe que vous avez entrer ne corespond pas, veuillez le vérifier s'il vous plaît`
                return res.status(400).json({message})
            }
        })
    })
    .catch(InfoUsers=>{
        if(InfoUsers == null || InfoUsers == NaN || InfoUsers == undefined){
            const message = `Le nom que vous nous avez donné ne correspond à aucun  compte, veuillez le vérifier ou même en créer si nécessaire`
            return res.status(400).json({message,InfoUsers})
        }
            const message = `Nous rencontrons un problème lier à notre serveur`
            return res.status(400).json({message,error})
    })
})
}