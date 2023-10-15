import React from 'react'
import '../css/normalize.css'
import '../css/estilos.css'
const LoginPage = () => {
  return (
    <div class="body2">
   

      <div class="contenedor-formulario contenedor2">
        <div class="imagen-formulario2">
            
        </div>

        <form class="formulario">
            <div class="texto-formulario">
                <h2>Bienvenido al Sistema de Elecciones UMSS</h2>
                {/* <!-- <p>Inicia sesión con tu cuenta</p> --> */}
            </div>
            <div class="input">
                <label for="usuario">Usuario</label>
                <input placeholder="Ingresa tu nombre" type="text" id="usuario"/>
            </div>
            <div class="input">
                <label for="contraseña">Contraseña</label>
                <input placeholder="Ingresa tu contraseña" type="password" id="contraseña"/>
            </div>


            {/* <div class="password-olvidada">
                <a href="#">¿Olvidaste tu contraseña?</a>
            </div> */}

            <br/>
            <div class="input">
                <input type="submit" value="Ingresar"/>
            </div>
        </form>
    </div>

</div>
  )
}

export default LoginPage