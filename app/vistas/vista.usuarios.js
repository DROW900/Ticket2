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
}