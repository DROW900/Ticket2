const modeloTrayectorias = require('../modelos/modelo.trayectorias')

module.exports.registrarTrayectoria = async(datos) =>{
    try {
        const resultados = await modeloTrayectorias.registrarTrayectoria(datos)
        return resultados          
    } catch (error) {
        throw error;
    }
}

module.exports.actualizarTrayectoria= async(datos)=>{
    try {
        const resultado = await modeloTrayectorias.actualizarTrayectoria(datos);
        return resultado        
    } catch (error) {
        throw error
    }
}

module.exports.listarTrayectorias = async(idEstudiante)=>{
    try {
        const resultado = await modeloTrayectorias.listarTrayectorias(idEstudiante);
        return resultado        
    } catch (error) {
        throw error
    }
}

module.exports.eliminarTrayectoria = async(idTrayectoria)=>{
    try {
        const resultado = await modeloTrayectorias.eliminarTrayectoria(idTrayectoria);
        return resultado        
    } catch (error) {
        throw error
    }    
}

