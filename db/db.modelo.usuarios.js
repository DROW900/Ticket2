const {DataTypes, Model} = require('sequelize');
const sequelize = require('./db.conexion')

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

module.exports = Usuarios