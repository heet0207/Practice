import {useState,useEffect} from 'react';
function UE1(){
    const [count,setCount] = useState(0)
    const [calculation,setCalc] = useState(0)
    useEffect(()=>{alert('You Clicked Somewhere On The Browser ')})
    useEffect(()=>{alert('Only When First Time Page Is Loaded')},[])
    useEffect(()=>{alert('Loaded When First Time Page Is Loaded Button A Clicked')},[count])

    function Change(){
        setCount(count + 1)
    }
    function Calc(){
        setCalc(calculation + 1)
    }
    return(
        <>
            <button onClick={Change}>Btn- A</button>
            <button onClick={Calc}>Btn- B</button>
            <h1>count : {count}</h1>
            <h1>calc : {calculation}</h1>


        </>
    )
}
export default UE1;