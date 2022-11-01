import React, { Fragment } from "react";
import { MARCAS, YEARS, PLANES } from "../constants";
import useCotizador from "../hooks/useCotizador";
import Error from "./Error";

export default function Formulario() {
  const { cotizarSeguro,datos,handleChangeDatos,error,setError } = useCotizador();
  const handleSubmit=e=>{
   e.preventDefault()
   if(Object.values(datos).includes("")){
    setError('Todos los campos son obligatorios')
    console.error("Error campos obligatorios")
   return
   } 
   setError("")
   cotizarSeguro()
  }
  return (
    <>
    {error && <Error/>}
      <form onSubmit={handleSubmit}>
        <div className="my-5">
          <label
            htmlFor=""
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Marca
          </label>
          <select
            className="w-full p-3 bg-white border border-gray-200"
            name="marca"
            id=""
            value={datos.marca}
            onChange={(e) => {
              handleChangeDatos(e);
            }}
          >
            <option value="">-- Selecciona Marca</option>
            {MARCAS.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label
            htmlFor=""
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Año
          </label>
          <select
            className="w-full p-3 bg-white border border-gray-200"
            name="year"
            id=""
            value={datos.year}
            onChange={(e) => {
              handleChangeDatos(e);
            }}
          >
            <option value="">-- Selecciona Año</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label
            htmlFor=""
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Elige un Plan
          </label>
          <div className="flex gap-3">
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label>{plan.nombre}</label>
                <input
                  onChange={(e) => {
                    handleChangeDatos(e);
                  }}
                  type="radio"
                  value={plan.id}
                  name="plan"
                />
              </Fragment>
            ))}
          </div>
        </div>
        <input
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
          value="Cotizar"
        />
      </form>
    </>
  );
}
