import Child from './Child';
import {createContext} from 'react';
const Fname = createContext();

function Parent(){
    return(
        <Fname.Provider value='Heet'>
            <Child/>
        </Fname.Provider>
    )
}
export default Parent;
export {Fname}