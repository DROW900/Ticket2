const {DataTypes, Model} = require('sequelize');
const sequelize = require('./db.conexion');
const Estudiantes = require('./db.modelo.estudiantes');

class ConocimientosExtra extends Model{}

ConocimientosExtra.init({
    nombre:{type: DataTypes.STRING(30), allowNull:false},
    nivel:{type:DataTypes.STRING(20), allowNull:false}
},
{
    sequelize,
    modelName: 'conocimientosExtra',
    timestaps: true
});
ConocimientosExtra.Estudiantes = ConocimientosExtra.belongsTo(Estudiantes)
Estudiantes.hasMany(ConocimientosExtra)
module.exports = ConocimientosExtra;