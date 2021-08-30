const {DataTypes, Model} = require('sequelize');
const sequelize = require('./db.conexion');
const Estudiantes = require('./db.modelo.estudiantes');

class Trayectorias extends Model{}

Trayectorias.init({
    nombreAcademia:{type: DataTypes.STRING(50), allowNull:false},
    descripcion:{type:DataTypes.STRING(500), allowNull:false}
},
{
    sequelize,
    modelName: 'trayectorias',
    timestaps: true
});
Trayectorias.Estudiantes = Trayectorias.belongsTo(Estudiantes)
Estudiantes.hasMany(Trayectorias)
module.exports = Trayectorias;