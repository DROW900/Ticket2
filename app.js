const express = require('express');
const app = express();
require('dotenv').config()
const cors = require('cors')
const midd = require('./middlewares/midd') 
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
const Trayectorias = require('./db/db.modelo.trayectorias')
const Administradores = require('./db/db.modelo.administradores')
const Opiniones = require('./db/db.modelo.opiniones')
const Empresas = require('./db/db.modelo.empresas')
const Anuncios = require('./db/db.modelo.anuncios')

//Endpoints
const vistaUsuarios = require('./app/vistas/vista.usuarios')
const vistaConocimientosExtra = require('./app/vistas/vista.conocimientosExtra')
const vistaIdiomas = require('./app/vistas/vista.idiomas')
const vistaEstudiantes = require('./app/vistas/vista.estudiantes')
const vistaTrayectorias = require('./app/vistas/vista.trayectorias')
const vistaAdministradores = require('./app/vistas/vistas.administradores')
const vistaOpiniones = require('./app/vistas/vista.opiniones')
const vistaAnuncios = require('./app/vistas/vista.anuncios')

//Middleware globales
app.use(express.json())
app.use(cors())
app.use(midd.limiter)

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
        await Trayectorias.sync({alter: true})
        await Administradores.sync({alter: true})
        await Opiniones.sync({alter: true})
        await Empresas.sync({alter: true})
        await Anuncios.sync({alter: true})
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
vistaEstudiantes(app)
vistaTrayectorias(app)
vistaAdministradores(app)
vistaOpiniones(app)
vistaAnuncios(app)