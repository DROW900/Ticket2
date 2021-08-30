const controladorConocimientosExtra = require('../controladores/controlador.conocimientosExtra');
const midd = require('../../middlewares/midd.usuarios')

module.exports = async(app)=>{
    app.post('/conocimientosExtra',midd.usuarioValido ,async(req,res)=>{
        try {
            const resultado = await controladorConocimientosExtra.registrarConocimiento(req.body)
            res.status(200).json(resultado)      
        } catch (error) {
            console.log(error)
            let respuesta = {
                mensaje: error,
            }
            res.status(500).json(respuesta)
        }
    })

    app.delete('/conocimientosExtra/:idConocimiento',midd.usuarioValido ,async(req,res)=>{
        try {
            const resultado = await controladorConocimientosExtra.eliminarConocimiento(req.params.idConocimiento)   
            res.status(200).json({mensaje: "Se realizó la eliminación correctamente"}) 
        } catch (error) {
            console.log(error)
            let respuesta = {
                mensaje: "Ocurrió un error al realizar el registro"
            }
            res.status(500).json(respuesta)            
        }
    })

    app.patch('/conocimientosExtra',midd.usuarioValido ,async(req,res)=>{
        try {
            const resultado = await controladorConocimientosExtra.actualizarConocimiento(req.body)   
            res.status(200).json({mensaje: "Se realizó la actualización correctamente"}) 
        } catch (error) {
            console.log(error)
            let respuesta = {
                mensaje: "Ocurrió un error al realizar el registro"
            }
            res.status(500).json(respuesta)            
        }
    })
}