const {DataTypes, Model} = require('sequelize');
const sequelize = require('./db.conexion');
const Estudiantes = require('./db.modelo.estudiantes');

class Idiomas extends Model{}

Idiomas.init({
    nombre:{type: DataTypes.STRING(30), allowNull:false},
    nivel:{type:DataTypes.STRING(20), allowNull:false}
},
{
    sequelize,
    modelName: 'idiomas',
    timestaps: true
});
Idiomas.Estudiantes = Idiomas.belongsTo(Estudiantes)
Estudiantes.hasMany(Idiomas)
module.exports = Idiomas;