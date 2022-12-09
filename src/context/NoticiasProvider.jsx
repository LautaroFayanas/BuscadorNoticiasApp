import { useEffect, useState , createContext } from "react";
import axios from "axios";

const NoticiasContext = createContext();

const NoticiasProvider = ({children}) => {

    const [ categoria , setCategoria ] = useState('general')
    const [ noticias , setNoticias ] = useState([])
    const [ pagina , setPagina ] = useState(1)
    const [ totalnoticias , setTotalNoticias ] = useState(0)


    useEffect(() => {
        const consultarApi = async () => {
          const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
  
          const { data } = await axios(url)
          setNoticias(data.articles)
          setTotalNoticias(data.totalResults)
          setPagina(1)
         
        }
  
        consultarApi()
  
      }, [categoria])


      useEffect(() => {
        const consultarApi = async () => {
          const url = `https://newsapi.org/v2/top-headlines?country=ar&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
  
          const { data } = await axios(url)
          setNoticias(data.articles)
          setTotalNoticias(data.totalResults)
         
        }
  
        consultarApi()
  
      }, [categoria , pagina])



    const handleChangeCategoria = e => {
        setCategoria(e.target.value)
    }

    const handleChangePagina = (e , valor ) => {
        setPagina(valor)
    }

    return (
        <NoticiasContext.Provider
            value={{
                noticias,
                categoria,
                totalnoticias,
                pagina,
                handleChangeCategoria,
                handleChangePagina
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
}

export default NoticiasContext 