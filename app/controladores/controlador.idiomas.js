const modeloIdiomas = require('../modelos/modelo.idiomas')

module.exports.registrarIdioma = async(datos)=>{
    try {
        const resultado = await modeloIdiomas.registrarIdioma(datos);
        return resultado        
    } catch (error) {
        throw error
    }
}

module.exports.eliminarIdioma = async(idIdioma)=>{
    try {
        const resultado = await modeloIdiomas.eliminarIdioma(idIdioma);
        return resultado        
    } catch (error) {
        throw error
    }
}

module.exports.actualizarIdioma = async(datos)=>{
    try {
        const resultado = await modeloIdiomas.actualizarIdioma(datos);
        return resultado        
    } catch (error) {
        throw error
    }
}