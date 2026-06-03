import{ useState } from 'react';
function Bg(){
    const [color,setColor] = useState('lavender')

    function Change(){
        setColor('pink')
    }
    function Change1(){
        setColor('burlywood')
    }
    function reset(){
        setColor('lavender')
    }

    return(
        <div style={{backgroundColor:color,width:'1000px',height:'1000px'}}>
            <button onClick={Change}>Change</button> <br/>
            <button onClick={Change1}>Change1</button> <br />
            <button onClick={reset}>Reset</button> <br />
        </div>
    )
}
export default Bg;