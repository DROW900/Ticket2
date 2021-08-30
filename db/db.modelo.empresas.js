const {DataTypes, Model} = require('sequelize');
const sequelize = require('./db.conexion');
const Usuarios = require('./db.modelo.usuarios');

class Empresas extends Model{}

Empresas.init({
    nombre: {type: DataTypes.STRING(200), allowNull: false},
    descripcion: {type: DataTypes.STRING(1000), allowNull: false},
},
{
    sequelize,
    modelName: 'empresas',
    timestamps: true
});
Empresas.Usuarios = Empresas.belongsTo(Usuarios)
Usuarios.hasOne(Empresas);

module.exports = Empresas