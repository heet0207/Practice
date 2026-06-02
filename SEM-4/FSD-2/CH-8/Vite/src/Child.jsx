import { useContext } from 'react';
import {Fname} from './parent';
function Child(){
const a = useContext(Fname)

return(
    <h1 style={{color:'coral',fontSize:'70px',fontStyle:'italic'}}>{a}</h1>
)
}
export default Child