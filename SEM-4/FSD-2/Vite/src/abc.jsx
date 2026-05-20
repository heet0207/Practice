import "./My.css"
import img1 from "./assets/hero.png"
function Abc(){
    const name = "React";
    return(
        <>
        <h1 style={{color:'blue',fontStyle:"italic"}}>Welcome To LJ {name}</h1>
        <p className='para'>Today Is A Good Day</p>
        <h3 class="q1">List Of Fruit</h3>
        <ol>
            <li class="a1">Apple</li>
            <li class="a2">Banana</li>
        </ol>
        <img src={img1} width={200}/>
        <img src="/favicon.svg" width={200}/>
        </>
    )
}
export default Abc