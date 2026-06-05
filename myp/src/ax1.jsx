import {useState,useEffect} from 'react';
import axios from 'axios'

function RandomImg(){
    const[img,setImg] = useState('')
    useEffect(()=>{
        setInterval(()=>{
            // axios.get("https://dog.ceo/api/breeds/image/random")
            axios.get("https://api.api-ninjas.com/v1/jokes")
            .then((Response)=>{setImg(Response.data.message)})
            .catch((error)=>{console.log(error)})
        },1000)
    },[])
    return(
        <>
            <img src={img} height={500} width={500}/>
        </>
    )
}
export default RandomImg;