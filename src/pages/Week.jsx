import { Highlights } from '../components/Highlights'
import { State } from '../components/State'
import './Week.css'

export const Week = () => {

    return(
        <div className="Week">

            <State />

            <div className="Week-highlights">
                <h2 className='Week-h2'>Destacados Hoy</h2>                
                <Highlights />
            </div>

        </div>
    )
} 