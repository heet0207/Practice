function Child(props){
    return(
        <div>
            {props.data.map((item,index)=>{
                return(
                    <div key={index}>
                        <h2>Name: {item.name}</h2>
                        <p>Age: {item.age}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Child;