const controladorAdministradores = require('../controladores/controlador.administradores')
const midd = require('../../middlewares/midd.usuarios')

module.exports = async(app)=>{
    app.post('/registrarEstudiante/:tipoRol',midd.usuarioValido,midd.verificarPermisos,async(req,res)=>{
        try {
            const usuario = await controladorAdministradores.registrarEstudiante(req.body)
            res.status(200).json(usuario)
        } catch (error) {
            console.log(error)
            let respuesta ={
                mensaje: "No fue posible registrar al estudiante"
            }
            res.status(500).json(respuesta)
        }
    })

}