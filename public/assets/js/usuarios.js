class Usuario{
    static async iniciarSesion(){
        try {
            const correo = document.getElementById('campo-correo').value
            const clave = document.getElementById('campo-clave').value
            if(clave == ''  || correo == '' ){
                alert("Uno de los campos está vacio")
                return
            }
            const resultado = await fetch('http://localhost:3000/iniciarSesion',{
                method: 'post',
                headers: {
                    "Accept": "application/json, text/plain, */*",
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "correo": correo,
                    "contrasenia": clave
                })
            })
            if(!resultado.ok){
                throw new Error("No se pudo iniciar sesión, revise la información")
            }
            const datos = await resultado.json()
            console.log(datos)
            localStorage.setItem('sesionActual',JSON.stringify(datos))
            localStorage.setItem('perfilId',JSON.stringify(datos.id))
            if(datos.roleId == 1){
                location.href = 'perfilEstudiante'
            }       
        } catch (error) {
            alert(error)
        }
    }

}