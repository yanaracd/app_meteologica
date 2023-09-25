import { Highlights } from '../components/Highlights'
import { State } from '../components/State'
import './Today.css'

export const Today = () => {

    return(
        <div className="Today">

            <State />

            <div className="Today-highlights">
                <h2 className='Today-h2'>Destacados Hoy</h2>                
                <Highlights />
            </div>

        </div>
    )
} 