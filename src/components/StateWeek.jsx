import { useContext } from 'react'
import './State.css'
import { CiudadContext } from '../App'
import { Image } from './Image'

export const StateWeek = () => {

    const { ciudad } = useContext(CiudadContext)

    if (!ciudad || !ciudad.proximos_dias) {
        return null
    }

    return(
        <div className="State">            
            <ul className="State-ul">
                {
                    ciudad.proximos_dias.map( eachDia => {

                        const fecha = new Date( eachDia["@attributes"].fecha )
                        const diaSemana = fecha.getDay()

                        const nombresDias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
                        const nombreDiaSemana = nombresDias[diaSemana]

                        return(
                            <StateLi 
                                key   = { eachDia["@attributes"].fecha } 
                                fecha = { nombreDiaSemana }
                                { ... eachDia } />
                        )
                    })
                }
            </ul>   
        </div>
    )
}

const StateLi = ({ fecha , temperatura , estado_cielo_descripcion }) => {    

    return(
        <li className="State-li">       
            <span className="State-span">{ fecha }</span>
            {
                Array.isArray( estado_cielo_descripcion )
                    ? <Image estadoCielo = { estado_cielo_descripcion[0] } />
                    : <Image estadoCielo = { estado_cielo_descripcion } /> 
            }
            <span className="State-span">{`${ temperatura.maxima }°C / ${ temperatura.minima }°C`}</span>     
        </li>   
    )
}
