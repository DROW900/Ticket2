const Trayectorias = require('../../db/db.modelo.trayectorias')

module.exports.listarTrayectorias = async(idEstudiante) =>{
    try {
        const trayectorias = await Trayectorias.findAll({where:{estudianteId: idEstudiante}})
        return trayectorias;
    } catch (error) {
        throw error
    }
}

module.exports.registrarTrayectoria = async(datos)=>{
    try {
        let array = [datos.estudianteId,datos.nombreAcademia,datos.descripcion]    
        const resultado = await Trayectorias.create({nombreAcademia: array[1], descripcion: array[2], estudianteId: array[0]})  
        return resultado;  
    } catch (error) {
        throw new Error(error);
    }
}

module.exports.actualizarTrayectoria = async(datos)=>{
    try {  
        let array = [datos.descripcion, datos.academiaId]
        const resultado = await Trayectorias.update({descripcion: array[0]},{where:{id: array[1]}}) 
        return resultado;  
    } catch (error) {
        throw new Error(error);
    }
}

module.exports.eliminarTrayectoria = async(idTrayectoria)=>{
    try {  
        const resultado = await Trayectorias.destroy({where:{id: idTrayectoria}})  
        return resultado;  
    } catch (error) {
        throw new Error(error);
    }
}