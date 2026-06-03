import T1_Child from './T1_Child';
import {createContext} from 'react';
const Fname = createContext();
const Lname = createContext();
function T1(){
    return(
        <Fname.Provider value= '5'>
            <Lname.Provider value='6'>
                
                <T1_Child/>
            </Lname.Provider>
        </Fname.Provider>
    )
}
export default T1;
export {Fname,Lname};
