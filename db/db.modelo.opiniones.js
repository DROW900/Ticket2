const {DataTypes, Model} = require('sequelize');
const sequelize = require('./db.conexion');
const Estudiantes = require('./db.modelo.estudiantes');
const Usuarios = require('./db.modelo.usuarios')

class Opiniones extends Model{}

Opiniones.init({
    mensaje:{type: DataTypes.STRING(500), allowNull:false}
},
{
    sequelize,
    modelName: 'opiniones',
    timestaps: true
});
Opiniones.Estudiantes = Opiniones.belongsTo(Estudiantes)
Opiniones.Usuarios = Opiniones.belongsTo(Usuarios)
Estudiantes.hasMany(Opiniones)
Usuarios.hasMany(Opiniones)

module.exports = Opiniones;