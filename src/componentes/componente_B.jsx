import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Contacto } from './contacto_class'


const ComponenteB = ( {contacto} ) => {
  
  const [conexion, setConexion] = useState(false);

  contacto.conectado = conexion
  
  const conectarse = () => {
    setConexion(true)
  }
  const desconectarse = () => {
    setConexion(false)
  }
  
  return (
    <div>
        <h2> Nombre: { contacto.nombre }</h2>
        <h3> Apellido: { contacto.apellido }</h3>
        <h4> Email: { contacto.email }</h4>
        <h5> Conectado: { contacto.conectado ? 'Contacto En Linea':'Contacto No Disponible' }</h5>
        <button onClick={ conectarse }>Conectarse</button>
        <button onClick={ desconectarse }>Desconectarse</button>

    </div>
  )
}

ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)

};

export default ComponenteB;
