const controladorUsuarios = require('../app/controladores/controlador.usuarios')

module.exports.usuarioValido = async(req, res, next) => {
    try {
        if (req.headers.authorization != undefined) {
            console.log(req.header.authorization)
            const token = req.headers.authorization.split(' ')[1]
            let verificado = await controladorUsuarios.verificacionUsuario(token)
            req.params.usuario = verificado.data
            return next()
        } else {
            throw new Error('Este es un sistema seguro y requiere autorización')
        }
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ error: err.message })
    }
}

module.exports.verificarPermisos = async(req,res,next)=>{
    try {
        if(req.params.tipoRol == 2){
            return next()
        }else{
            throw new Error("No hay permiso para realizar esta acción")
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({mensaje: "No tienes los permisos necesarios para realizar esta acción"})
    }
}

