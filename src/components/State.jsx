import './State.css'

export const State = () => {

    return(
        <div className="State">            
            <ul className="State-ul">
                <StateLi />
            </ul>   
        </div>
    )
}

const StateLi = () => {

    return(
        <li className="State-li">
            <span className="State-span">hora/dia</span>
            <img src="./assets/stateSky/00.png" alt="Estado del tiempo" className="State-img" />
            <span className="State-span">temp°C</span>     
        </li> 
    )
}
