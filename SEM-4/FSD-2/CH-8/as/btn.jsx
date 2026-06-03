import { useState } from "react";
function Btn(){
    const[name,setName]=useState("heet")
    function click(){
        setName("chauhan")
    }
    function click1(){
        setName(<h2 style={{color:'aqua'}}>{name}</h2>)
    }
    function hide(){
        setName("")
    }
    function reset(){
        setName("heet")
    }
    return(
        <div>
            <button onClick={click}>Click me1</button><br/>
            <button onClick={click1}>Click me2</button> <br/>
            <button onClick={hide}>Hide</button> <br/>
            <button onClick={reset}>Reset</button>
            <h2 style={{color:'brown'}}>{name}</h2>
        </div>
    )
}
export default Btn;