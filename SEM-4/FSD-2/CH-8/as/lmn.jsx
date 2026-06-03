import { useState } from "react";
function Lmn(){
    
    const[wagh,setWagh]=useState(2)
    
    function click(){
        if(wagh < 20)
        setWagh(wagh+1)
        
    }
    function click1(){
        if(wagh > 0)
        setWagh(wagh-1)
    }
    return(
        <div>
            <button onClick={click}>Click me for Increment</button> <br/>
            <button onClick={click1}>Click me for decremnet</button>
            <h2>{wagh}</h2>

        </div>
    )
}
export default Lmn;