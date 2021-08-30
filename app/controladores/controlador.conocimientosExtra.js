const modeloConocimientosExtra = require('../modelos/modelo.conocimientosExtra')

module.exports.registrarConocimiento = async(datos) =>{
    try {
        const resultados = await modeloConocimientosExtra.registrarConocimiento(datos)
        return resultados          
    } catch (error) {
        throw error;
    }
}

module.exports.eliminarConocimiento = async(idConocimiento) =>{
    try {
        const resultados = await modeloConocimientosExtra.eliminarConocimiento(idConocimiento)
        return resultados          
    } catch (error) {
        throw error;
    }
}

module.exports.actualizarConocimiento = async(datos) =>{
    try {
        const resultados = await modeloConocimientosExtra.actualizarConocimiento(datos)
        return resultados          
    } catch (error) {
        throw error;
    }
}