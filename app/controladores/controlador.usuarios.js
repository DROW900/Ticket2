const modeloUsuarios = require('../modelos/modelo.usuarios')
const jwt = require('jsonwebtoken')

module.exports.verificarUsuario = async(datos)=>{
    try {
        const resultado = await modeloUsuarios.verificarUsuario(datos)
        return resultado
    } catch (error) {
        throw error
    }
}

module.exports.generaToken = async(data) => {
    const resultado = jwt.sign({
            data
        }, process.env.SECRET_KEY) //Tiempo maximo 15 minutos de validez
    return resultado
}

module.exports.verificacionUsuario = async(token) => {
    const resultado = jwt.verify(token, process.env.SECRET_KEY)
    if (resultado) {
        return resultado
    } else {
        throw new Error('Token no valido!')
    }
}