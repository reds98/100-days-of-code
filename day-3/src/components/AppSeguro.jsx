import React,{useContext} from "react";
import useCotizador from "../hooks/useCotizador";
import Spinner from "./Spinner";
import Resultado from "./Resultado";
import Formulario from "./Formulario";
export default function AppSeguro() {
  const {resultado,cargando} =useCotizador()
  return (
    <>
      <header className="my-10">
        <h1 className="text-white text-center text-4xl font-black">
          Cotizador de Seguros de Autos
        </h1>
      </header>
      <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
      <Formulario/>
      {cargando ?<Spinner/>: <Resultado/>}
      </main>
    </>
  );
}
