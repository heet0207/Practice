// print every name & any of one not entered then field medetary fill up & all of fill then print all.
import {useState} from 'react';
function Form(){

    const [data,setData] = useState({})

    function a(e){
        const name = e.target.name;
        const value = e.target.value;
        setData({...data,[name]:value });

    }
    function submit(e){
        e.preventDefault();
        // basic validation: require name and email
        if(!data.name || !data.eid){
            alert('Please fill in Name and Email');
            return;
        }
        alert('Your Details are Submitted\nName: ' + data.name + '\nEmail: ' + data.eid + '\npassword:' + data.password + '\nConfirm Password : ' + data.confirm + '\nAddress : '+ data.address + '\nGender : '+ data.gender);
    }
    return(
        <div>
            <form onSubmit={submit}>
            <input type="text" name="name" placeholder="Enter First Name" onChange={a} /><br />
            <input type="email" name="eid" placeholder="Enter Email" onChange={a} /><br />
            <input type="password" name="password" placeholder="Enter Password" onChange={a} /><br />
            <input type="password" name="confirm" placeholder="Enter Confirm Password" onChange={a} /><br />
            <textarea name="address" placeholder="Enter Address" onChange={a}></textarea>
            <br />
            Gender: <br />
            <input type="radio" value='male' name="gender" onChange={a} /> Male
            <input type="radio" value='female' name="gender" onChange={a} /> Female
        <br />
        <select name="dropdown">
            <option name='city' value="select">Select</option>
            <option name='city' value="Amd">Ahmedabad</option>
            <option name='city' value="surat">Surat</option>
            <option name='city' value="Kheda">Kheda</option>
            <option name='city' value="Nadiad">Nadiad</option>
        </select>
        <br />
        <input type='submit' value='submit' />
        </form>
        <h1>{JSON.stringify(data)}</h1>
        </div>
    )
}
export default Form;