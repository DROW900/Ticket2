const modeloIdiomas = require('../modelos/modelo.idiomas')

module.exports.registrarIdioma = async(datos)=>{
    try {
        const resultado = await modeloIdiomas.registrarIdioma(datos);
        return resultado        
    } catch (error) {
        throw new Error(error)
    }
}