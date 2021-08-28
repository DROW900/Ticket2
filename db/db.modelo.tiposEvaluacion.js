const {DataTypes, Model} = require('sequelize');
const sequelize = require('./db.conexion')

class TiposEvaluacion extends Model{}

TiposEvaluacion.init({
    titulo:{type: DataTypes.STRING(30), allowNull:false}
},
{
    sequelize,
    modelName: 'tiposEvaluaciones',
    timestaps: true
});

module.exports = TiposEvaluacion;