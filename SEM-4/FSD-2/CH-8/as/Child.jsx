import { useContext } from 'react';
import {Fname,Lname} from './parent';
;
function Child(){
const a = useContext(Fname)
const b = useContext(Lname)
return(
    <h1 style={{color:'brown',fontSize:'70px',fontStyle:'italic'}}>{a}{b}</h1>
)
}
export default Child;
