const controladorIdiomas = require('../controladores/controlador.idiomas')
const midd = require('../../middlewares/midd.usuarios')

module.exports = async(app) =>{
    app.post('/idiomas',midd.usuarioValido, async(req,res)=>{
        try {
            const resultado = await controladorIdiomas.registrarIdioma(req.body)   
            res.status(200).json(resultado) 
        } catch (error) {
            console.log(error)
            let respuesta = {
                mensaje: "Ocurrió un error al realizar el registro"
            }
            res.status(500).json(respuesta)
        }
    })

    app.delete('/idiomas/:idIdioma',midd.usuarioValido, async(req,res)=>{
        try {
            const resultado = await controladorIdiomas.eliminarIdioma(req.params.idIdioma)   
            res.status(200).json({mensaje: "Se realizó la eliminación correctamente"}) 
        } catch (error) {
            console.log(error)
            let respuesta = {
                mensaje: "Ocurrió un error al realizar el registro"
            }
            res.status(500).json(respuesta)            
        }
    })

    app.patch('/idiomas',midd.usuarioValido, async(req,res)=>{
        try {
            const resultado = await controladorIdiomas.actualizarIdioma(req.body)   
            res.status(200).json({mensaje: "Se realizó la actualizacion correctamente"}) 
        } catch (error) {
            console.log(error)
            let respuesta = {
                mensaje: "Ocurrió un error al realizar el registro"
            }
            res.status(500).json(respuesta)            
        }
    })
}