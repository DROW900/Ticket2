const modeloUsuarios = require('../modelos/modelo.usuarios')
const modeloEstudiante = require('../modelos/modelo.estudiantes')

module.exports.obtenerInformacionEstudiante = async(idUsuario)=>{
    try {
        const resultado = await modeloUsuarios.obtenerInformacionEstudiante(idUsuario)
        return resultado
    } catch (error) {
        throw error;
    }
}

module.exports.actualizarInformacion = async(datos)=>{
    try {
        const resultado = await modeloEstudiante.actualizarInformacion(datos)
        return resultado
    } catch (error) {
        throw error;
    }
}
