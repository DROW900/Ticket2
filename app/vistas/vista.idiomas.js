const controladorIdiomas = require('../controladores/controlador.idiomas')

module.exports = async(app) =>{
    app.post('/idiomas', async(req,res)=>{
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
}