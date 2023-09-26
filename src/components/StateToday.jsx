import { useContext } from 'react'
import './State.css'
import { CiudadContext } from '../App'
import { Image } from './Image'

export const StateToday = () => {

    const { ciudad } = useContext(CiudadContext)

    if (!ciudad || !ciudad.pronostico || !ciudad.pronostico.hoy) {
        return null
    }

    if (typeof ciudad.pronostico.hoy.temperatura === 'undefined') {
        return null
    }

    if (typeof ciudad.pronostico.hoy.estado_cielo_descripcion === 'undefined') {
        return null
    }

    return(
        <div className="State">            
            <ul className="State-ul">
                {
                    ciudad.pronostico.hoy.temperatura.map( ( eachHora , index ) => {

                        const horaActual = new Date()

                        horaActual.setHours(horaActual.getHours() + index + 1)
                        
                        const formattedHora = horaActual.toLocaleTimeString('en-US', {
                            hour   : 'numeric',
                            hour12 : true,
                        })

                        const estadoCielo = ciudad.pronostico.hoy.estado_cielo_descripcion[index]

                        return(
                            <StateLi 
                                key  = { index }
                                hora = { formattedHora }
                                temperatura = { eachHora }
                                estadoCielo = { estadoCielo }/>
                        )
                    })
                }
            </ul>   
        </div>
    )
}

const StateLi = ({ hora , temperatura , estadoCielo }) => {

    return(
        <li className="State-li">
            <span className="State-span">{ hora }</span>
            <Image estadoCielo = { estadoCielo} />
            <span className="State-span">{ temperatura }°C</span>     
        </li> 
    )
}
