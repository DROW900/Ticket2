const controladorEstudiantes = require('../controladores/controlador.estudiantes')
const midd = require('../../middlewares/midd.usuarios')

module.exports = async(app)=>{
    app.get('/perfilEstudiante', async(req,res)=>{
        try {
            res.render('perfilEstudiante')             
        } catch (error) {
            console.log('Ereor al realizar el renderizado')
            res.status(500).json({mensaje: "Error al realizar el renderizado"});           
        }   
    })

    app.get('/estudiantes/:idUsuario', async(req,res)=>{
        try {
            const resultado = await controladorEstudiantes.obtenerInformacionEstudiante(req.params.idUsuario)
            res.status(200).json(resultado)
        } catch (error) {
            console.log(error)
            let respuesta = {
                mensaje: "Ocurrió un error al obtener la información"
            }
            res.status(500).json(respuesta)
        }
    })

    app.put('/estudiante',midd.usuarioValido,async(req,res)=>{
        try {
            const resultado = await controladorEstudiantes.actualizarInformacion(req.body)
            res.status(200).json({mensaje:"Se actualizó la información correctamente"})
        } catch (error) {
            console.log('Ocurrió un error al actualizar la información')
            let respuesta = {
                mensaje: "Ocurrió un error al actualizar la información"
            }
            res.status(500).json(respuesta)
        }
    })
}