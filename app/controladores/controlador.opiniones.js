const modeloOpiniones = require('../modelos/modelo.opiniones')

module.exports.registrarOpinion = async(datos)=>{
    try {
        const resultado = await modeloOpiniones.registrarOpinion(datos)
        return resultado;
    } catch (error) {
        throw error
    }
}

module.exports.listarOpiniones = async(idEstudiante)=>{
    try {
        const resultado = await modeloOpiniones.listarOpiniones(idEstudiante)
        return resultado;
    } catch (error) {
        throw error
    }
}
