import { useState } from 'react'
import axios from 'axios'

function Signup() {
    const [name, setName] = useState('')
    const handleSubmit = async (e) => {
        try {
            await axios.post('http://localhost:5001/signup', { name })
            alert('username')
            setName('')
        }
        catch (error) {
            console.log(error)
    }
}

return (
    <div>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} name="uname" onChange={(e)=> setName(e.target.value)}/>
            <button type="submit">Submit</button>
            <h1>{name}</h1>
        </form>
    </div>
)
}

export default Signup;