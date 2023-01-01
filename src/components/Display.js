import Bilten from './Bilten'
import {BiltenGroup} from './Bilteni'

export default function Display(){
    return(
        <div className="all-page-container">
            <Bilten pdf={BiltenGroup.bilten1} />
        </div>
    )
}