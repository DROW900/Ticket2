const {DataTypes, Model} = require('sequelize');
const sequelize = require('./db.conexion');
const TiposEvaluacion = require('./db.modelo.tiposEvaluacion');

class Rubros extends Model{}

Rubros.init({
    nombre:{type: DataTypes.STRING(30), allowNull:false}
},
{
    sequelize,
    modelName: 'rubros',
    timestaps: true
});
Rubros.TiposEvaluacion = Rubros.belongsTo(TiposEvaluacion)
TiposEvaluacion.hasMany(Rubros)
module.exports = Rubros;