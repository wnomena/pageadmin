const {Mongoose , Schema , model } = require('mongoose')
const Autre = model('utilisatuer', new Schema({
    Nom : {
        type : String,
        require : true
    },
    mail : {
        type : String,
        require : true,
        unique : {
            msg : `Ce mail là est déjà utiliser par un autre utilisateur`
        },
    },
    password : {
        type : String,
        require : true
    }
})) 

module.exports = Autre