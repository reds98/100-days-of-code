import React from "react";
import Resultado from "./Resultado";
import Formulario from "./Formulario";
import useClima from "../hooks/useClima";
import Spinner from "./Spinner";

export default function AppClima() {
  const { resultado, cargando,noResultado } = useClima();
  console.log(resultado.name)
  return (
    <>
      <main className="dos-columnas">
        <Formulario />
        {cargando ? <Spinner /> :
         resultado?.name ? <Resultado />:
        noResultado? <p>{noResultado}</p>
      :<p>El clima se va a mostar aqui</p>}
      </main>
    </>
  );
}
