const {DataTypes, Model} = require('sequelize');
const sequelize = require('./db.conexion')

class Roles extends Model{}

Roles.init({
    tipoRol:{type: DataTypes.STRING(20), allowNull:false}
},
{
    sequelize,
    modelName: 'roles',
    timestaps: true
});
module.exports = Roles;