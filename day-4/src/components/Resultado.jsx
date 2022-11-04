import React from 'react'
import useClima from '../hooks/useClima'

export default function Resultado() {
  const {resultado}=useClima()
  const{main}=resultado
  const kelvin=273.15
  return (

    <div className='contenedor'>
    <h2>El clima de {resultado.name} es :</h2>
    <p> {parseInt(main.temp-kelvin)}<span>&#x2103;</span></p>
    <p>Temperatura Maxima: {parseInt(main.temp_max-kelvin)}<span>&#x2103;</span></p>
    <p>Temperatura Minima: {parseInt(main.temp_min-kelvin)}<span>&#x2103;</span></p>
    </div>
  )
}
