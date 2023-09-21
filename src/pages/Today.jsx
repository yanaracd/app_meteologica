import { Highlights } from '../components/Highlights'
import { State } from '../components/State'
import './Today.css'

export const Today = () => {

    return(
        <div className="Today">

            <div className="Today-state">
                <State />
            </div>

            <div className="Today-highlights">
                <h2 className='Today-h2'>Destacados Hoy</h2>
                <div className="Today-card">
                    <Highlights />
                </div>
            </div>

        </div>
    )
} 