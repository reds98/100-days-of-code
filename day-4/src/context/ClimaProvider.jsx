import { useState, createContext, Children } from "react";
import axios from "axios";

const ClimaContext = createContext();

function ClimaProvider({ children }) {
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);
  const [noResultado,setNoResultado]=useState(false)
  const datosBusqueda = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const consultarClima = async (datos) => {
    setCargando(true)
    setNoResultado(false)
    try {
      const { ciudad, pais } = datos;
      const appId = import.meta.env.VITE_API_KEY;
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`;
      console.log("URL", url);
      const { data } = await axios.get(url);
      console.log(data);
      const { lat, lon } = data[0];
      const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
      const { data: clima } = await axios.get(urlClima);
      console.log(clima);
      setResultado(clima);
      setCargando(false)
    } catch (error) {
      console.log(error);
      setNoResultado("No hay resultado")
      setResultado({})
    }finally{
      setCargando(false)
    }
  };

  return (
    <ClimaContext.Provider
      value={{ noResultado,cargando,resultado, consultarClima, busqueda, datosBusqueda }}
    >
      {children}
    </ClimaContext.Provider>
  );
}
export { ClimaProvider };
export default ClimaContext;
