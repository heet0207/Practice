import {useState} from 'react';
function F2(){
    const [name,setName]=useState("");
    function handleChange(e){
        setName(e.target.value);
    }
    return(
        <div>
            Pizza Size:
            <br />
                small <input type="radio" value='small' name='pizza' onClickCapture={handleChange} /> <br />
                medium <input type="radio" value='medium'name='pizza' onClickCapture={handleChange} /><br />
                large <input type="radio" value='large' name='pizza' onClickCapture={handleChange}/>
            <br />

            <h1>{'Pizza Size  : ' + name}</h1>
        </div>
    )
}
export default F2;