const RubrosEstudiante = require('../../db/db.modelo.rubrosEstudiante')
const TiposEvaluacion = require('../../db/db.modelo.tiposEvaluacion')
const Rubros = require('../../db/db.modelo.rubros')
const ConocimientosExtra = require('../../db/db.modelo.conocimientosExtra')
const Idiomas = require('../../db/db.modelo.idiomas')

module.exports.obtenerEvaluacionesAlumno = async(idAlumno)=>{
    try {
        let informacion;
        let conocimientos = await TiposEvaluacion.findAll({include:{model: Rubros,include:{model: RubrosEstudiante, where: {estudianteId: idAlumno}}}})
        let idiomas = await Idiomas.findAll({where:{estudianteId: idAlumno}})
        let conocimientosExtra = await ConocimientosExtra.findAll({where:{estudianteId:idAlumno}})
        informacion ={
            conocimientos,
            idiomas,
            conocimientosExtra
        }
        return informacion
    } catch (error) {
        throw new Error('Ocurrió un error al realizar la consulta de los datos'+ error)
    }
}

module.exports.registrarEvaluaciones = async(idEstudiante, datos)=>{
    try {
        for(let i = 0; i < datos.length; i++){
            let resultado = await RubrosEstudiante.create({evaluacion: datos[i].evaluacion ,rubroId: datos[i].idRubro, estudianteId: idEstudiante})
        }
        return 1;
    } catch (error) {
        throw new Error(error)
    }
}

