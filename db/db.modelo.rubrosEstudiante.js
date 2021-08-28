const {DataTypes, Model} = require('sequelize');
const sequelize = require('./db.conexion');
const Estudiantes = require('./db.modelo.estudiantes');
const Rubros = require('./db.modelo.rubros');

class RubrosEstudiante extends Model{}

RubrosEstudiante.init({
    evaluacion:{type: DataTypes.FLOAT, allowNull:false}
},
{
    sequelize,
    modelName: 'rubrosEstudiante',
    timestaps: true
});
RubrosEstudiante.Rubros = RubrosEstudiante.belongsTo(Rubros)
RubrosEstudiante.Estudiantes = RubrosEstudiante.belongsTo(Estudiantes)
Rubros.hasMany(RubrosEstudiante);
Estudiantes.hasMany(RubrosEstudiante);
module.exports = RubrosEstudiante;