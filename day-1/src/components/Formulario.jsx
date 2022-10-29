import React, { useEffect } from "react";
import styled from "styled-components";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";
import { useState } from "react";
import Error from "./Error";
const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px; color: #fff; 
  font-weight: 700;
   text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

export default function Formulario({setMonedas}) {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      console.log(resultado.Data);
      const arrayCriptos = resultado.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };
        console.log(objeto);
        return objeto;
      });
      setCriptos(arrayCriptos);
    };
    consultarAPI();
  }, []);

  const [moneda, SelectMonedas] = useSelectMonedas("Elige Tu Moneda", monedas);
  const [cripto, SelectCriptos] = useSelectMonedas(
    "Elige Tu CriptoMoneda",
    criptos
  );

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(moneda);
    console.log(cripto);
    if ([moneda, cripto].includes("")) {
      setError(true);
      return 
    }
    setError(false)
    setMonedas({moneda,cripto})
  };

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSumbit}>
        <SelectMonedas />
        <SelectCriptos />
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  );
}
