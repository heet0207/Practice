import Child from "./c1.jsx"
function P1(){
    const details = [{'name':'John','age':30},{'name':'Jane','age':25},{'name':'Doe','age':35},{'name':'Smith','age':28},{'name':'Emily','age':22}];
    return(
        <>
        <Child data={details}/>
        </>
    )

}
export default P1;