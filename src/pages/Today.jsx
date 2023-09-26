import { Highlights } from '../components/Highlights'
import { StateToday } from '../components/StateToday'
import './Today.css'

export const Today = () => {

    return(
        <div className="Today">

            <StateToday />

            <div className="Today-highlights">
                <h2 className='Today-h2'>Destacados Hoy</h2>                
                <Highlights />
            </div>

        </div>
    )
} 