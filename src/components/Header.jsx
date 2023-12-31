import { NavLink } from 'react-router-dom'
import './Header.css'

export const Header = () => {
    return(
        <div className="Header">
            <nav className="Header-nav">
                <HeaderUl />
            </nav>
        </div>
    )
}

const HeaderUl = () => {

    return(
        <ul className="Header-ul">
            <li className="Header-li">
                <NavLink to='/' >Hoy</NavLink>
            </li>
            <li className="Header-li">
                <NavLink to='/week'>Semana</NavLink>
            </li>
        </ul>
    )
}