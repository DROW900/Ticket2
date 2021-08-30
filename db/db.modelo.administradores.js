const {DataTypes, Model} = require('sequelize');
const sequelize = require('./db.conexion');
const Usuarios = require('./db.modelo.usuarios');

class Administradores extends Model{}

Administradores.init({
    nombre: {type: DataTypes.STRING(200), allowNull: false},
    pais: {type: DataTypes.STRING(20), allowNull: false},
    ciudad: {type: DataTypes.STRING(50), allowNull: false},
    linkedin: {type: DataTypes.STRING(200), allowNull:true},
},
{
    sequelize,
    modelName: 'administradores',
    timestamps: true
});
Administradores.Usuarios = Administradores.belongsTo(Usuarios)
Usuarios.hasOne(Administradores)
module.exports = Administradores