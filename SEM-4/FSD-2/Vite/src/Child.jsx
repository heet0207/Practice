function Child(props){
    return(
        <div>
            <h1>Name : {props.name}</h1>
            <h2>Age : {props.age}</h2>
            <h3>Occupation : {props.occupation}</h3>
        </div>
    )
}

export default Child;