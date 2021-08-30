class Estudiante{
    static async obtenerInformacionEstudiante(){
        const idUsuario = localStorage.getItem('perfilId');
        const resultado = await fetch(`http://localhost:3000/estudiantes/${idUsuario}`,{
            method: 'get',
            headers: {
                "Accept": "application/json, text/plain, */*",
                'Content-Type': 'application/json',
            },
        })
        const datos = await resultado.json()
        localStorage.setItem('alumnoId', datos.estudiante.id)
        //Plasmamos la información en pantalla
        const idSesion = JSON.parse(localStorage.getItem('sesionActual')).id
        document.getElementById('nombrePerfil').innerHTML = `${datos.estudiante.nombre}` 
        if(idSesion == localStorage.getItem('perfilId')){
            document.getElementById('informacion').innerHTML = `<h3>Información general</h3>`+
            `<label>Nombre: </label><input class="campo-usuario" type="text" value="${datos.estudiante.nombre}"></br>`+
            `<label>Edad: </label><input class="campo-usuario" type="number" value="${datos.estudiante.edad}"></br>`+
            `<label>Pais de residencia: </label><input class="campo-usuario" type="text" value="${datos.estudiante.pais}" disabled></br>`+
            `<label>Ciudad: </label><input class="campo-usuario" type="text" value="${datos.estudiante.ciudad}" disabled></br>`+
            `<h3>Medios de Contacto</h3>`+
            `<label>LinkedIn: </label><input class="campo-usuario" type="text" value="${datos.estudiante.linkedin}"></br>`+
            `<label>Github: </label><input class="campo-usuario" type="text" value="${datos.estudiante.linkedin}"></br>`+
            `<label>Email: </label><input class="campo-usuario" type="text" value="${datos.correo}"></br>`+
            `<button>Guardar</button>`
        }else{
            document.getElementById('informacion').innerHTML = `<h3>Información general</h3>`+
            `<label>Nombre: </label><input class="campo-usuario" type="text" value="${datos.estudiante.nombre}" disabled></br>`+
            `<label>Edad: </label><input class="campo-usuario" type="number" value="${datos.estudiante.edad}" disabled></br>`+
            `<label>Pais de residencia: </label><input class="campo-usuario" type="text" value="${datos.estudiante.pais} disabled" disabled></br>`+
            `<label>Ciudad: </label><input class="campo-usuario" type="text" value="${datos.estudiante.ciudad}" disabled></br>`+
            `<h3>Medios de Contacto</h3>`+
            `<label>LinkedIn: </label><input class="campo-usuario" type="text" value="${datos.estudiante.linkedin} disabled"></br>`+
            `<label>Github: </label><input class="campo-usuario" type="text" value="${datos.estudiante.linkedin} disabled"></br>`+
            `<label>Email: </label><input class="campo-usuario" type="text" value="${datos.correo} disabled"></br>`           
        }
    }

    static async obtenerEvaluaciones(){
        const idAlumno = localStorage.getItem('alumnoId');
        const resultado = await fetch(`http://localhost:3000/obtenerEvaluaciones/${idAlumno}`,{
            method: 'get',
            headers: {
                "Accept": "application/json, text/plain, */*",
                'Content-Type': 'application/json',
            },
        })
        let evaluaciones = await resultado.json()
        console.log(evaluaciones)
        let anexo = ''
        let calificacion = 0;

        //Se plasman los conocimientos independientes del estudiante
        for(let i = 0; i < evaluaciones.conocimientos.length ; i++){
            anexo += `<h3>${evaluaciones.conocimientos[i].titulo}</h3>`
            for(let j = 0; j < evaluaciones.conocimientos[i].rubros.length; j++){
                anexo += `<p class = 'evaluacion'>${evaluaciones.conocimientos[i].rubros[j].nombre} <span>`
                calificacion = evaluaciones.conocimientos[i].rubros[j].rubrosEstudiantes[0].evaluacion;
                for(let k = 0; k < calificacion  ; k++ ){
                    anexo += '★'
                }
                anexo += '</span></p>'
            }
        }
        //Se plasman los idiomas y conocimientos extra que el Estudiante planteó
        anexo += `<h3>Idiomas</h3>`
        for(let i = 0; i < evaluaciones.idiomas.length ; i++){
            anexo += `<p class = 'evaluacion'>${evaluaciones.idiomas[i].nombre} - ${evaluaciones.idiomas[i].nivel}</p>`
        }
        const idSesion = JSON.parse(localStorage.getItem('sesionActual')).id
        if(idSesion == localStorage.getItem('perfilId')){
            anexo += '<button>Agregar</button>'
        }

        //Se plasman los conocimientos extra que el estudiante va agregando
        anexo += `<h3>Conocimientos Extra</h3>`
        for(let i = 0; i < evaluaciones.conocimientosExtra.length ; i++){
            anexo += `<p class = 'evaluacion'>${evaluaciones.conocimientosExtra[i].nombre} - ${evaluaciones.conocimientosExtra[i].nivel}</p>`
        }
        if(idSesion == localStorage.getItem('perfilId')){
            anexo += '<button>Agregar</button>'
        }        
        document.getElementById('informacion').innerHTML = anexo

    }
}