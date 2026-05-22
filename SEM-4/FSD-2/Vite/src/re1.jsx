function Re1(){
    const a = (m)=>{
        console.log(m.target.value);
    }
    return(
        <div>
            <input onInput={a} type="text" placeholder="Enter Text" />
            
        </div>
    )
}
export default Re1;