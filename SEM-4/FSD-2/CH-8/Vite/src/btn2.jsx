// import h1 from './h1.jpg';
import h2 from './h2.jpg';
import h3 from './h3.jpeg';
import h4 from './h4.jpeg';
import h5 from './h5.jpeg';
import h6 from './h6.jpeg';
import { useState } from "react";

function Btn1() {
    const x = [h2, h3, h4, h5, h6];

    const [img, setImg] = useState(x[0]);
    function change(){
        const random = Math.floor(Math.random() * x.length);
        setImg(x[random]);
    }

    function reset(){
        setImg(x[0]);
    }
    return (
        <div className="btn1">
            <img src={img} alt="h" height='500px' width='500px' />
            <button onClick={change}>Change</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Btn1;
