const controladorUsuarios = require('../controladores/controlador.usuarios');
const controladorRubros = require('../controladores/controlador.rubros')

module.exports = async(app)=>{
    app.get('/obtenerEvaluaciones/:idAlumno', async(req,res)=>{
        try {
            const resultado = await controladorRubros.obtenerEvaluacionesAlumno(req.params.idAlumno)
            res.status(200).json(resultado)      
        } catch (error) {
            console.log(error)
            res.status(500).json('Ocurrió un error con la consulta')
        }
    })

    app.get('/login', async(req,res)=>{
        try {
            res.render('login')
        } catch (error) {
            console.log(error)
            res.status(500).json({mensaje: "Ocurrió un error al renderizar la página"})
        }
    })

    app.post('/iniciarSesion', async(req,res)=>{
        try {
            const resultado = await controladorUsuarios.verificarUsuario(req.body);  
            if(resultado != undefined){
                const validacion = await controladorUsuarios.generaToken(resultado.id)
                resultado.dataValues.token = validacion
                res.status(200).json(resultado)
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({mensaje: "Ocurrió un error al iniciar sesión"})
        }
    })

}