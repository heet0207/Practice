import { useContext } from 'react';
import {Fname,Lname} from './T1';
;
function T1_Child(){
const a = parseInt(useContext(Fname))
const b = parseInt(useContext(Lname))
const sum = a + b;
return(
    <h1 > sum of {a} + {b} : {sum}</h1>
)
}
export default T1_Child;
