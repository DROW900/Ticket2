const modeloTrayectorias = require('../modelos/modelo.trayectorias')

module.exports.registrarTrayectoria = async(idAlumno) =>{
    try {
        const resultados = await modeloRubros.obtenerEvaluacionesAlumno(idAlumno)
        return resultados          
    } catch (error) {
        throw error;
    }
}