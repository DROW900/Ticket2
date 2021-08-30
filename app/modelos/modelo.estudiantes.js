const Estudiantes = require('../../db/db.modelo.estudiantes')

module.exports.actualizarInformacion = async(datos)=>{
    try {
        let array = [datos.idEstudiante, datos.nombre, datos.edad, datos.linkedin, datos.github]
        console.log(array)
        const resultado = await Estudiantes.update({nombre:array[1], edad:array[2], linkedin:array[3], github: array[4]},{where:{id: array[0]}})
        return resultado
    } catch (error) {
        throw new Error(error)
    }
}

module.exports.registrarEstudiante = async(idUsuario, datosEstudiante)=>{
    try {
        let array = [datosEstudiante.nombre,datosEstudiante.edad,datosEstudiante.pais,datosEstudiante.ciudad];
        const estudiante = await Estudiantes.create({nombre: array[0], edad: array[1], pais: array[2], ciudad: array[3], usuarioId: idUsuario})
        return estudiante;
    } catch (error) {
        throw new Error(error)
    }
}