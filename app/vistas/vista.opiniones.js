const controladorOpiniones = require('../controladores/controlador.opiniones')
const midd = require('../../middlewares/midd.usuarios')

module.exports = async(app) =>{
    app.get('/opiniones/:idEstudiante', async(req,res)=>{
        try {
            const resultado = await controladorOpiniones.listarOpiniones(req.params.idEstudiante);
            res.status(200).json(resultado)     
        } catch (error) {
            console.log(error)
            let respuesta = {
                mensaje: "Ocurrió un error al realizar el registro"
            }
            res.status(500).json(respuesta)              
        }
    })

    app.post('/opiniones',midd.usuarioValido,async(req,res)=>{
        try {
            const resultado = await controladorOpiniones.registrarOpinion(req.body);
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