const {DataTypes, Model} = require('sequelize');
const sequelize = require('./db.conexion');
const Usuarios = require('./db.modelo.usuarios');

class Estudiantes extends Model{}

Estudiantes.init({
    nombre: {type: DataTypes.STRING(200), allowNull: false},
    edad: {type: DataTypes.INTEGER, allowNull: false},
    pais: {type: DataTypes.STRING(20), allowNull: false},
    ciudad: {type: DataTypes.STRING(50), allowNull: false},
    linkedin: {type: DataTypes.STRING(200), allowNull:true},
    github: {type: DataTypes.STRING(200), allowNull:true}
},
{
    sequelize,
    modelName: 'estudiantes',
    timestamps: true
});
Estudiantes.Usuarios = Estudiantes.belongsTo(Usuarios)
Usuarios.hasOne(Estudiantes)
module.exports = Estudiantes