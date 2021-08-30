const modeloAnuncios = require('../modelos/modelo.anuncios')

module.exports.registrarAnuncio = async(datos) =>{
    try {
        const resultados = await modeloAnuncios.registrarAnuncio(datos)
        return resultados;          
    } catch (error) {
        throw error;
    }
}

module.exports.listarAnuncios = async()=>{
    try {
        const resultados = await modeloAnuncios.listarAnuncios()
        return resultados
    } catch (error) {
        throw error
    }
}