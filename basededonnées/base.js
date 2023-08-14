// const { DataTypes, Sequelize } = require('sequelize')
// const bcrypt = require('bcrypt')
// module.exports = () =>{
//     const base = new Sequelize('utilisateur' , 'root' , '',{
//         host : 'localhost',
//         dialect : 'mariadb',
//         dialectOptions : {
//         timezone : 'Etc/GMT-2'
//         },
//         loggin : false
//     })   
//     const loggin = require('./model/model')(base,DataTypes)
//     bcrypt.hash('FIFALIANA2712@', 13)
//     .then(hash=>{
//         loggin.create({
//             Nom : 'Nomena Walker',
//             MDP : hash
//         })
//     })

//     base.authenticate()
//     .then(_=>console.log('Notre base de données fonctionne, dieu merci'))
//     .catch(err=>console.log(`Oups, ça a chraché : ${err}`))  
//     base.sync({force : true})
//     .then(_=>console.log('Hooourah , il maintenant la base de données synchronisée'))
//  }



