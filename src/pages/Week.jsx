import { Highlights } from '../components/Highlights'
import { StateWeek } from '../components/StateWeek'
import './Week.css'

export const Week = () => {

    return(
        <div className="Week">

            <StateWeek />

            <div className="Week-highlights">
                <h2 className='Week-h2'>Destacados Hoy</h2>                
                <Highlights />
            </div>

        </div>
    )
} 