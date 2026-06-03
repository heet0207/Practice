import { useState } from "react";
function F(){

        const [data,setData] = useState('');
        const [data1,setData1] = useState('');
    function cH(e){
        setData(e.target.value);
    }
    function cH1(e){
        setData1(e.target.value);
    }
    return(
        <div>
            <input onChange={cH} type="text" placeholder="Enter First Name" />
            <input onChange={cH1} type="text" placeholder="Enter Last Name" />
            <h1>{data}{" "}{data1}</h1>
        </div>
    )
}
export default F;