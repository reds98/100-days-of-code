import { createContext, useState } from "react";
import {
  obtenerDiferenciaYear,
  calcularMarca,
  calularPlan,
  formatearDinero,
} from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const [error, setError] = useState("");
  const [resultado, setResultado] = useState(0);
  const [cargando, setCargando] = useState(false);
  const handleChangeDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const cotizarSeguro = () => {
    console.log("Cotizar Seguro");
    //Una base
    let resultado = 2000;
    //Obtener diferencia de years
    const diferencia = obtenerDiferenciaYear(datos.year);

    resultado -= ((diferencia ^ 3) * resultado) / 100;

    resultado *= calcularMarca(datos.marca);
    //americanos 15%
    //Europeo 30%
    //Asiatico 5%
    resultado *= calularPlan(datos.plan);

    resultado = formatearDinero(resultado);

    console.log("el resultado es", resultado);
    setCargando(true);
    setTimeout(() => {
      setResultado(resultado);
      setCargando(false);
    }, 3000);
  };
  return (
    <CotizadorContext.Provider
      value={{
        resultado,
        cotizarSeguro,
        error,
        setError,
        datos,
        handleChangeDatos,
        cargando,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };

export default CotizadorContext;
