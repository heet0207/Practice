function Frm(){

    const a = ()=>{
        alert("welcome to lj")
    }
    return(
        <>
        <form onSubmit={a} border="1px solid black" style={{width:"300px",margin:"auto",padding:"20px"}}>
            <h1>Form</h1>
            Name ____:     <input type="text" placeholder='Enter Name' required/> <br/>
            email____:    <input type="email" placeholder='Enter Email'required/> <br/>
            Password_: <input type="password" placeholder='Enter Password'required/><br/>
            Number___:   <input type="number" placeholder="Enter Number" required/> <br />
            Gender___:
            Male<input type="radio" name="Gender" required/>
            Female<input type="radio" name="Gender"required/> <br />

            <button type="submit" value="submit" >Submit</button>
            </form>
        </>
    )
}
export default Frm;