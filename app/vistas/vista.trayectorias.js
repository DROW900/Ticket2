const controladorTrayectorias = require('../controladores/controlador.trayectorias')
const midd = require('../../middlewares/midd.usuarios')

module.exports = async(app)=>{
    app.get('/trayectorias/:idEstudiante', async(req,res)=>{
        try {
            const resultado = await controladorTrayectorias.listarTrayectorias(req.params.idEstudiante)
            res.status(200).json(resultado)
        } catch (error) {
            console.log(error)
            let respuesta = {
                mensaje: 'Ocurrió un error al realizar la consulta'
            }
            res.status(500).json(respuesta)            
        }
    })

    app.post('/trayectorias',midd.usuarioValido, async(req,res)=>{
        try {
            const resultado = await controladorTrayectorias.registrarTrayectoria(req.body)
            res.status(200).json(resultado)
        } catch (error) {
            console.log(error)
            let respuesta = {
                mensaje: 'Ocurrió un error al realizar el registro'
            }
            res.status(500).json(respuesta)
        }
    })

    app.patch('/trayectorias',midd.usuarioValido, async(req,res)=>{
        try {
            const resultado = await controladorTrayectorias.actualizarTrayectoria(req.body)   
            res.status(200).json({mensaje: "Se realizó la actualizacion correctamente"}) 
        } catch (error) {
            console.log(error)
            let respuesta = {
                mensaje: "Ocurrió un error al realizar la actualización"
            }
            res.status(500).json(respuesta)            
        }
    })

    app.delete('/trayectorias/:idTrayectoria',midd.usuarioValido, async(req,res)=>{
        try {
            const resultado = await controladorTrayectorias.eliminarTrayectoria(req.params.idTrayectoria)   
            res.status(200).json({mensaje: "Se realizó la eliminación correctamente"}) 
        } catch (error) {
            console.log(error)
            let respuesta = {
                mensaje: "Ocurrió un error al realizar la eliminación"
            }
            res.status(500).json(respuesta)            
        }
    })

}