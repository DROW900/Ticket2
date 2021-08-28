const Idiomas = require('../../db/db.modelo.idiomas')

module.exports.registrarIdioma = async(datos)=>{
    try {
        let array = [datos.nombre, datos.nivel, datos.estudianteId]    
        const resultado = await Idiomas.create({nombre: array[0], nivel: array[1],estudianteId: array[2]})  
        return resultado;  
    } catch (error) {
        throw new Error(error);
    }
}