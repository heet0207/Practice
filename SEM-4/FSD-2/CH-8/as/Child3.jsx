/* eslint-disable react-refresh/only-export-components */
import { useContext } from "react"
import {css2} from "./Child2.jsx"
import {css1} from "./T1_Parent.jsx"
function Child3(){
    const data = useContext(css2);
    const data1 = useContext(css1);
    return(
        <div>
            <h1 style={data1}>{data}</h1>
        </div>
    )
}
export default Child3