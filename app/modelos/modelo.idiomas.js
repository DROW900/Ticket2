const Idiomas = require('../../db/db.modelo.idiomas')

module.exports.registrarIdioma = async(datos)=>{
    try {
        let array = [datos.nombre, datos.nivel, datos.estudianteId]    
        const resultado = await Idiomas.create({nombre: array[0], nivel: array[1], estudianteId: array[2]})  
        return resultado;  
    } catch (error) {
        throw new Error(error);
    }
}

module.exports.eliminarIdioma = async(idIdioma)=>{
    try {  
        const resultado = await Idiomas.destroy({where:{id: idIdioma}})  
        return resultado;  
    } catch (error) {
        throw new Error(error);
    }
}

module.exports.actualizarIdioma = async(datos)=>{
    try {  
        let array = [datos.idiomaId, datos.nivel]
        const resultado = await Idiomas.update({nivel: array[1]},{where:{id: array[0]}}) 
        return resultado;  
    } catch (error) {
        throw new Error(error);
    }
}
