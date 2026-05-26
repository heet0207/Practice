import Child from "./Child";
function Parents(){
    const details = {
        'Name' : 'John Doe',
        'Age' : 45,
        'Occupation' : 'Engineer'
    }
    return(
        <div>
            <Child name={details.Name} age={details.Age} occupation={details.Occupation}/>
        </div>
    )
}
export default Parents;