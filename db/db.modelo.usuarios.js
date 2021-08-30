const {DataTypes, Model} = require('sequelize');
const sequelize = require('./db.conexion');
const Roles = require('./db.modelo.roles');

class Usuarios extends Model{}

Usuarios.init({
    correo: {type: DataTypes.STRING(50), allowNull: false},
    contrasenia: {type: DataTypes.STRING(50), allowNull: false}
},
{
    sequelize,
    modelName: 'usuarios',
    timestamps: true
});
Usuarios.Roles = Usuarios.belongsTo(Roles)
Roles.hasOne(Usuarios)
module.exports = Usuarios