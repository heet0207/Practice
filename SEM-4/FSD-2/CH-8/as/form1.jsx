import { useState } from "react";
function F1(){

    const [data,setdata] = useState("");
    function cH(e){
        setdata(e.target.value);
    }
    return(
        <div>
            Enter Your Msg : <textarea onChange={cH} placeholder="Enter Massage" height='100px' width='200px'></textarea>
            <h1>{data}</h1>
        </div>
    )
}
export default F1;