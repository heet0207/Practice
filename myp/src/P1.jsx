/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import C1 from "./C1.jsx";
export const A = createContext();
export const B = createContext();
function P1() {
    return (
        <A.Provider value='10'>
            <B.Provider value='20'>
            <C1 />
            </B.Provider>
        </A.Provider>

    );
}

export default P1;