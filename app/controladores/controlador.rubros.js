const modeloRubros = require('../modelos/modelo.rubros')

module.exports.obtenerEvaluacionesAlumno= async(idAlumno) =>{
    try {
        const resultados = await modeloRubros.obtenerEvaluacionesAlumno(idAlumno)
        return resultados          
    } catch (error) {
        throw error;
    }
}