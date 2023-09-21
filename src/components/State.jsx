import { useContext } from 'react'
import './State.css'
import { CiudadContext } from '../App'

export const State = () => {

    const ciudad = useContext(CiudadContext)

    return(
        <div className="State">
            <span className="State-span">00:00 AM</span>
            <img src="./assets/stateSky/Iconos-05.png" alt="Estado del tiempo" className="State-img" />
            <span className="State-span">17°C</span>
        </div>
    )
}
