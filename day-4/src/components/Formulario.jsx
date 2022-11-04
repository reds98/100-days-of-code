import React, { useState } from 'react'
import useClima from '../hooks/useClima'

export default function Formulario() {
  const [alerta,setAlterta]=useState("")
  const {consultarClima, busqueda,datosBusqueda}=useClima()
  const {ciudad,pais}=busqueda
  const handleSubmit=e=>{
    e.preventDefault()
    console.log("Estoy dandole click")
    if(Object.values(busqueda).includes("")){
        setAlterta("Todos los campos son obligatorios")
        return
    }
    consultarClima(busqueda)
  }

  return (
    <div className='contenedor'>
        <form onSubmit={handleSubmit} action="">
            <div className='campo'>
                <label htmlFor="ciudad">Cuidad</label>
                <input type="text" onChange={datosBusqueda} id='ciudad' name='ciudad' value={ciudad}/>
            </div>
            <div className='campo'>
                <label htmlFor="ciudad">Pais</label>
            <select onChange={datosBusqueda} name="pais" id="pais">
                <option value="">Seleccione un pais</option>
                <option value="US">Estados Unidos</option>
                <option value="MX">Mexico</option>
                <option value="AR">Argentina</option>
                <option value="CO">Colombia</option>
                <option value="CR">Costa Rica</option>
                <option value="ES">España</option>
            </select>
            </div>
            <input type="submit" value="Consultar Clima" />
        </form>
    </div>
  )
}
