const Opiniones = require('../../db/db.modelo.opiniones');
const Usuarios = require('../../db/db.modelo.usuarios');
const Estudiantes = require('../../db/db.modelo.estudiantes');
const Administradores = require('../../db/db.modelo.administradores')

module.exports.registrarOpinion = async(datos)=>{
    try {
        const array = [datos.usuarioId,datos.estudianteId,datos.mensaje];
        const opinion = await Opiniones.create({usuarioId: array[0], estudianteId: array[1], mensaje: array[2]})
        return opinion
    } catch (error) {
        throw new Error(error);
    }
}

module.exports.listarOpiniones = async(idEstudiante)=>{
    try {
        const opinion = await Opiniones.findAll({where:{estudianteId: idEstudiante},include:{model:Usuarios, include:{model:Estudiantes, attributes:["nombre"]},attributes:['id']}})
        return opinion
    } catch (error) {
        throw new Error(error);
    }
}