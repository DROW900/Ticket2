const controladorConocimientosExtra = require('../controladores/controlador.conocimientosExtra');

module.exports = async(app)=>{
    app.post('/conocimientosExtra', async(req,res)=>{
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
}