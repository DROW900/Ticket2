const express = require('express');
const app = express();
require('dotenv').config()
const cors = require('cors')
/* const midd = require('./middlewares/midd')  */
const sequelize = require('./db/db.conexion');

//Modelos de la Base de datos (sequelize)
const Roles = require('./db/db.modelo.roles')
const TiposEvaluacion = require('./db/db.modelo.tiposEvaluacion')
const Rubros = require('./db/db.modelo.rubros')
const RubrosEstudiante = require('./db/db.modelo.rubrosEstudiante')
const Estudiantes = require('./db/db.modelo.estudiantes')
const Usuarios = require('./db/db.modelo.usuarios')
const Idiomas = require('./db/db.modelo.idiomas')
const ConocimientosExtra = require('./db/db.modelo.conocimientosExtra')

//Endpoints
const vistaUsuarios = require('./app/vistas/vista.usuarios')
const vistaConocimientosExtra = require('./app/vistas/vista.conocimientosExtra')
const vistaIdiomas = require('./app/vistas/vista.idiomas')

//Middleware globales
app.use(express.json())
app.use(cors())
/* app.use(midd.limiter) */

//Configuraciones globales
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

//Se levanta el servidor
async function inicioServer(){
    try {
        await Roles.sync({alter: true})
        await Usuarios.sync({alter: true})
        await TiposEvaluacion.sync({alter: true})
        await Rubros.sync({alter: true})
        await Estudiantes.sync({alter: true})
        await RubrosEstudiante.sync({alter: true})
        await Idiomas.sync({alter: true})
        await ConocimientosExtra.sync({alter: true})
        await sequelize.authenticate()
        console.log('Se autenticó correctamente la DB')
        app.listen(process.env.PORT, function(){
            console.log(`Servidor inicializado en http://${process.env.HOST}:${process.env.PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

inicioServer();
vistaUsuarios(app)
vistaConocimientosExtra(app)
vistaIdiomas(app)