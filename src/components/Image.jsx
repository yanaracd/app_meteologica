import { dataStateSky } from "../data/data"

export const Image = ({ estadoCielo }) =>{

    const stateSnakeCase = estadoCielo.toLowerCase().replace(/ /g, '_')

    const estado_desconocido = '/assets/stateSky/012.png'

    return(
        <>
            {
                dataStateSky[stateSnakeCase] 
                    ? <img className="Weather-img" src={ dataStateSky[ stateSnakeCase ]} alt='Estado del tiempo'></img>   
                    : <img className="Weather-img" src={ estado_desconocido } alt='Estado del tiempo'></img>
            
            }
        </>        
    )
}
