const Anuncios = require('../../db/db.modelo.anuncios')

module.exports.registrarAnuncio = async(datos)=>{
    try {
        let array = [datos.idAdmin,datos.asunto,datos.descripcion]
        const resultado = await Anuncios.create({asunto:array[1], descripcion:array[2], administradoreId: array[0]})
        return resultado
    } catch (error) {
        throw error
    }
}

module.exports.listarAnuncios = async() =>{
    try {
        const resultados = await Anuncios.findAll()
        return resultados
    } catch (error) {
        throw error
    }
}