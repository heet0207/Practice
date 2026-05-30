import {useState} from 'react';
function Form(){

    const [data,setData] = useState()

    function a(e){
        setData(e.target.value)
    }
    return(
        <div>
            <input type="text" placeholder="Enter First Name"/><br />
            <input type="email" placeholder="Enter Email"/><br />
            <input type="password" placeholder="Enter Password"/><br />
            <input type="password" placeholder="Enter Confirm Password"/><br />
            <textarea name="" id="" placeholder="Enter Address"></textarea>
            <br />
            Gender: <br />
            <input type="radio" value='male' name="gender" /> Male
            <input type="radio" value='female' name="gender" /> Female
        <br />
        <select name="dropdown">
            <option value="select">Select</option>
            <option value="Amd">Ahmedabad</option>
            <option value="surat">Surat</option>
            <option value="Kheda">Kheda</option>
            <option value="Nadiad">Nadiad</option>
        </select>
        <br />
        <input type='submit' value='submit' onClick={a} />Submit
        <h1>{data}</h1>
        </div>
    )
}
export default Form;