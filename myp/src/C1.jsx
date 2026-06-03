import { useContext } from "react";
import { A } from "./P1.jsx";
import { B } from "./P1.jsx";

function C1() {
    const v = parseInt(useContext(A));
    const z = parseInt(useContext(B));
    const sum = v + z;

    return <h1>a = {v} & b = {z} <br /> <br /><br />sum of a + b = {sum}</h1>;
}

export default C1;