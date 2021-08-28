const ConocimientosExtra = require('../../db/db.modelo.conocimientosExtra')

module.exports.registrarConocimiento = async(datos)=>{
    try {
        let array = [datos.nombre, datos.nivel, datos.estudianteId]
        let resultado = await ConocimientosExtra.create({nombre: array[0], nivel: array[1],estudianteId: array[2]})
        return resultado
    } catch (error) {
        throw new Error(error);
    }
} 

