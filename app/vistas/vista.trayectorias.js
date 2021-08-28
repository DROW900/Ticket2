const controladorTrayectorias = require('../controladores/controlador.trayectorias')

module.exports = async(app)=>{
    app.post('/trayectorias', async(req,res)=>{
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
}