import C1 from './C1';
import {createContext} from 'react';
const Fname = createContext();
const Lname = createContext();
function Parent(){
    return(
        <Fname.Provider value='P E T E R  '>
            <Lname.Provider value=' P A R K E R 🕷 🕸'>
                
                <C1/> breaking news: peter parker is spiderman
            </Lname.Provider>
        </Fname.Provider>
    )
}
export default Parent;
export {Fname,Lname};
