/* eslint-disable react-refresh/only-export-components */
import {createContext} from 'react';
import Child2 from './Child2.jsx';
const css1 = createContext();
const as = {backgroundColor:'red',color:'white',padding:'10px',margin:'10px'};

function T1Parent(){
    return(
        <css1.Provider value= {as}>
            <Child2/>
        </css1.Provider>
    )
}

export default T1Parent;
export {css1};