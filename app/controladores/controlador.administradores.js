const modeloEstudiante = require('../modelos/modelo.estudiantes')
const modeloUsuario = require('../modelos/modelo.usuarios')
const modeloRubros = require('../modelos/modelo.rubros')

module.exports.registrarEstudiante = async(datos)  =>{
    try {
        //Primero se crea el usuario del Estudiante, el cual le permitirá el acceso a la plataforma
        const usuario = await modeloUsuario.registrarUsuario(datos)
        //Una vez obtenido el Id del usuario generado se crea el perfil de estudiante
        const estudiante = await modeloEstudiante.registrarEstudiante(usuario.id,datos.datosEstudiante)
        //Ya registrado el usuario se registran las evaluaciones de este
        const rubros = await modeloRubros.registrarEvaluaciones(estudiante.id, datos.datosEstudiante.evaluaciones)
        return usuario;
    } catch (error) {
        throw error;
    }
    


}