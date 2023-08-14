const  jwt = require('jsonwebtoken')
const privateKey = require('./costumKey')
module.exports = (req,res,next) =>{
    const authorization = req.headers.authorization
    if(!authorization){
        const message = `Veuuillez mettre l'autorisation pour y accéder`
        console.log(privateKey)
        return res.status(401).json({message})
    }
    const token = authorization.split(' ')[1]
       const decodedToken =  jwt.verify(token,privateKey,(error,decodedToken)=>{
        if(error){
            const message = `L'utilisateur n'est pas autorisé à accèder à cette ressource.`
            return res.status(401).json({ message, data: error })
        }
        const userId = decodedToken.UserId
        console.log(`userId : ${userId}`)
        console.log(`Le private key : ${privateKey}`)
    if (req.body.userId && req.body.userId !== userId) {
      const message = `L'identifiant de l'utilisateur est invalide.`
      return res.status(401).json({ message })
    }
    next()
    })


}