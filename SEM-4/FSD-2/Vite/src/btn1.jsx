function Btn(){
    const btn = () =>{
            alert("Welcome To LJ")
        }
    return(
        <>
        <button onDoubleClick={btn}>Click Me</button>
        </>
    )
}

export default Btn