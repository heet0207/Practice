/* eslint-disable react-refresh/only-export-components */
import Child3 from "./Child3"
import {createContext} from "react"
const css2 = createContext();

function CHild2(){
    return(
        <css2.Provider value="Student">
            <Child3/>
        </css2.Provider>
    )
}
export default CHild2
export {css2}