import { useState , useRef , useEffect, useContext, createContext } from 'react'
import { CiudadContext } from './../App'
import { dataWeather } from '../data/data'
import './Aside.css'

const AsideContext = createContext()

export const Aside = () => {

    const setCiudad    = useContext(CiudadContext)

    const [ peticiones , setPeticiones ] = useState(0)
    const [ municipios , setMunicipios ] = useState()
    const [ provincias , setProvincias ] = useState({})

    const fetchGet = async ( url , setFuncion ) => {

        let controller = new AbortController()
        let options = {
            method : 'get',
            signal : controller.signal
        }

        try {        
            const res  = await fetch( url , options )
            const data = await res.json()
            setFuncion(data)
        } catch (error) {
            console.log( error  )
        } finally {
            controller.abort()
        }
    }

    useEffect(()=>{

        fetchGet('https://www.el-tiempo.net/api/json/v2/provincias', setProvincias)
        fetchGet('https://www.el-tiempo.net/api/json/v2/provincias/28/municipios/28079', setCiudad)

    } , [])

    return(
        <AsideContext.Provider value={{ peticiones, setPeticiones, municipios, setMunicipios, provincias, setProvincias, fetchGet }} >

            <div className="Aside">
                {
                    peticiones === 6 && <Modal />
                }
                <Search />
                <TownList />
                <Weather />
            </div>

        </AsideContext.Provider>
    )
}

const Modal = () => {
    
    return(
        <div className="Aside-div Modal">
            <div className="Modal-wrapper">
                <img className='Modal-img' src="/assets/stop.png" alt="Deténgase" />
                <p className="Modal-p">Ha alcanzado el límite de búsquedas gratuitas. Si desea continuar haciendo uso de la aplicación, debe cambiar a la suscripción premium.</p>
                <button className="Modal-button">Suscríbete</button>
            </div>
        </div>
    )
}

const Search = () => {

    const { provincias , setMunicipios , fetchGet } = useContext(AsideContext)
    const inputSearch = useRef()

    const getMunicipios = async ( e ) => {
        e.preventDefault()

        let { value : busqueda } = inputSearch.current        
        let buscar = provincias.provincias.find( provincia => provincia.NOMBRE_PROVINCIA.toLowerCase().includes( busqueda.toLowerCase() ))

        await fetchGet(`https://www.el-tiempo.net/api/json/v2/provincias/${buscar.CODPROV}/municipios`, setMunicipios)
        inputSearch.current.value = ''
    }

    return(
        <div className="Aside-div Search">
            <input className='Search-input' type="text" name='search' placeholder='Busque por provincia' ref={inputSearch} />
            <button onPointerDown={getMunicipios} className='Search-button'>
                <svg className='Search-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </button>
        </div>
    )
}

const TownList = () => {

    const setCiudad = useContext(CiudadContext)
    const { municipios , setMunicipios , peticiones , setPeticiones , fetchGet } = useContext(AsideContext)

    const selectCity = async ( id ) => {
        console.log(`Seleccionando la ciudad`)
        
        await fetchGet(`https://www.el-tiempo.net/api/json/v2/provincias/${id.substr(0,2)}/municipios/${id}`, setCiudad)
        setMunicipios()
        setPeticiones( peticiones + 1)
    }

    return(
        <>
            {
                municipios && 
                <div className="Aside-div Town">
                    <h3 className="Town-h3">Seleccione el municipio</h3>            
                    <ul className="Town-ul"> 
                        {
                            municipios.municipios.map( municipio =>
                                <li className="Town-li" key={municipio.CODIGOINE}>
                                    <button onPointerDown={() => selectCity(municipio.CODIGOINE.substr(0,5))} className="Town-button">{municipio.NOMBRE}</button>
                                </li>
                            )
                        }         
                    </ul>
                </div>
            }
            
        </>
    )
}

const Weather = () => {

    return(
        <div className="Aside-div Weather">
            <WeatherInfo />
            <WeatherLocation />        
        </div>
    )
}

const WeatherInfo = () => {

    const date   = new Date()
    const ciudad = useContext(CiudadContext)

    return(
        <div className="Weather-div">
            <img className="Weather-img" src='/assets/stateSky/Iconos-16.png' alt='Estado del tiempo'></img>
            <h2 className="Weather-h2">{`${ciudad.temperatura_actual}°C`}</h2>
            <span className='Weather-span'>{ `${date.toDateString()}, ${date.toLocaleTimeString()}` }</span>
            <ul className="Weather-ul">
                {
                    dataWeather.map( dataEach =>
                        <WeatherList 
                            key={dataEach.id} 
                            { ...dataEach } />
                    )
                }                
            </ul>
        </div>  
    )
}

const WeatherList = ( props ) => {

    const ciudad = useContext(CiudadContext)
    const { d1 , d2 , nombre , seccion , span } = props
    
    return(
        <li className="Weather-li">
            <svg className='Weather-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d={d1}/>
                <path d={d2}/>
            </svg>
            {
                ciudad[nombre] && seccion
                    ? <span className='Weather-text'>{ciudad[nombre][seccion]}{span}</span>
                    : <span className='Weather-text'>{ciudad[nombre]}{span}</span>

            }
        </li>
    )
}

const WeatherLocation = () => {

    const ciudad        = useContext(CiudadContext)
    const { municipio } = ciudad

    return(
        <div className="Weather-location">
            <svg className='Weather-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
            { municipio && <span className="Weather-city">{municipio.NOMBRE}, {municipio.NOMBRE_PROVINCIA}</span> }
        </div>
    )
}