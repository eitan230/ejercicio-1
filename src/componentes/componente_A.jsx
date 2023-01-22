import React from 'react'
import ComponenteB from './componente_B'
import { Contacto } from './contacto_class'

function ComponenteA(props) {
  
  const contactoDefault = new Contacto("Eitan", "Yberbuden", "eitan03@hotmail.com.ar", false)
    
  return (
    <div>
        <h1>Contacto:</h1>
        <ComponenteB contacto={contactoDefault}></ComponenteB>
    </div>
  )
}

export default ComponenteA