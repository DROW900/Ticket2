const controladorAnuncios = require('../controladores/controlador.anuncios')
const midd = require('../../middlewares/midd.usuarios')
module.exports = async(app)=>{
    app.get('/anuncios', async(req,res)=>{
        try {
            const resultado = await controladorAnuncios.listarAnuncios(req.body)   
            res.status(200).json(resultado) 
        } catch (error) {
            console.log(error)
            let respuesta = {
                mensaje: "Ocurrió un error al realizar el registro"
            }
            res.status(500).json(respuesta)
        }
    })

    app.post('/anuncios/:tipoRol',midd.usuarioValido,midd.verificarPermisos, async(req,res)=>{
        try {
            const resultado = await controladorAnuncios.registrarAnuncio(req.body)   
            res.status(200).json(resultado) 
        } catch (error) {
            console.log(error)
            let respuesta = {
                mensaje: "Ocurrió un error al realizar el registro"
            }
            res.status(500).json(respuesta)
        }
    })
}
