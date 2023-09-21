import './State.css'

export const State = ({ hora , url , temperatura }) => {
    return(
        <div className="State">
            <span className="State-span">00:00 AM</span>
            <img src="./assets/stateSky/Iconos-05.png" alt="Estado del tiempo" className="State-img" />
            <span className="State-span">17°C</span>
        </div>
    )
}
