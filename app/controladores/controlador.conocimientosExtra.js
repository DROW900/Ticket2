const modeloConocimientosExtra = require('../modelos/modelo.conocimientosExtra')

module.exports.registrarConocimiento = async(datos) =>{
    try {
        const resultados = await modeloConocimientosExtra.registrarConocimiento(datos)
        return resultados          
    } catch (error) {
        throw error;
    }
}