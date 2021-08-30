const {DataTypes, Model} = require('sequelize');
const sequelize = require('./db.conexion');
const Administradores = require('./db.modelo.administradores');

class Anuncios extends Model{}

Anuncios.init({
    asunto: {type: DataTypes.STRING(200), allowNull:false},
    descripcion: {type:DataTypes.STRING(1000), allowNull:false}
},
{
    sequelize,
    modelName: 'anuncios',
    timestaps: true
});
Anuncios.Administradores = Anuncios.belongsTo(Administradores)
Administradores.hasMany(Anuncios)
module.exports = Anuncios;