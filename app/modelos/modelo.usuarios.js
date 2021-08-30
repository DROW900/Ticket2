const Usuarios = require('../../db/db.modelo.usuarios')
const Estudiantes = require('../../db/db.modelo.estudiantes')

module.exports.registrarUsuario = async(datos) =>{
    try {
        const array = [datos.correo]
        const caracteres = ['a','B','C','D','x','$','%','1','5','6','.','b','c','y','e','f']
        let contrasenia = ''
        let numero = 0
        for(let i = 0; i < 10; i++){
            numero = parseInt(Math.random()*caracteres.length)
            contrasenia += caracteres[numero]
        }
        const resultado = await Usuarios.create({correo:array[0],contrasenia,roleId :1})
        return resultado
    } catch (error) {
        throw new Error(error)
    }
}

module.exports.obtenerInformacionEstudiante = async(idUsuario)=>{
    try {
        const resultados = await Usuarios.findOne({attributes:['correo'],include:{model:Estudiantes,attributes:['id','nombre','edad','pais','ciudad','linkedin','github']},where:{id: idUsuario}})
        return resultados
    } catch (error) {
        throw new Error(error)
    }
}

module.exports.verificarUsuario = async(datos) => {
    try {
        let array = [datos.correo, datos.contrasenia]
        const usuario = await Usuarios.findOne({attributes:['id','roleId'],where:{correo: array[0],contrasenia: array[1]}})
        if(usuario != undefined){
            return usuario
        }
        throw new Error('No se encontró la información de usuario')
    } catch (error) {
        throw error
    }
}
