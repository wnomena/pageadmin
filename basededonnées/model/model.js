module.exports = (base,DataTypes) => {
    return base.define('utlilisateur',{
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        Nom : {
            type : DataTypes.STRING,
            AllowNull : false
        },
        MDP : {
            type: DataTypes.STRING,
            AllowNull : false
        }
    },{
        createdAt : 'created',
        updatedAt : false
    });
}