import { useContext } from 'react'
import { dataHighlights } from '../data/data'
import './Highlights.css'
import { CiudadContext } from '../App'

export const Highlights = () => {

    return(
        <div className="Highlights">
            <ul className="Highlights-ul">
                {
                    dataHighlights.map( data =>
                        <HighlightsLi 
                            key={ data.id }
                            { ...data } />
                    )
                }
            </ul>
        </div>
    )
}

export const HighlightsLi = ( props ) => {

    const { titulo , nombre , seccion , atributo , orto , span } = props
    const { ciudad } = useContext(CiudadContext)

    return(
        <li className="Highlights-li">
            <h3 className="Highlights-h3">{ titulo }</h3>
            {
                ciudad[nombre] && seccion && atributo && orto
                    ? <h4 className="Highlights-h4">{ ciudad[nombre][seccion][atributo][orto] }</h4>
                    : <h4 className="Highlights-h4">{ ciudad[nombre] }</h4>
            }
            {
                ciudad[nombre] && seccion && atributo && span
                    ? <span className="Highlights-span">{ ciudad[nombre][seccion][atributo][span] }</span>
                    : <span className="Highlights-span">{ span }</span>
            }
        </li>
    )
}
