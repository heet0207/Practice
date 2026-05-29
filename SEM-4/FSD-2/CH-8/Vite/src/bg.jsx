import{ useState } from 'react';
function Bg(){
    const [color,setColor] = useState('burlywood')

    function Change(){
        setColor('aqua')
    }
    function Change1(){
        setColor('brown')
    }
    function reset(){
        setColor('burlywood')
    }

    return(
        <div style={{backgroundColor:color,width:'100vw',height:'100vh'}}>
            <button onClick={Change}>Change</button> <br/>
            <button onClick={Change1}>Change1</button> <br />
            <button onClick={reset}>Reset</button> <br />
        </div>
    )
}
export default Bg;