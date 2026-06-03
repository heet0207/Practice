import h1 from './h1.jpg';
import h2 from './h2.jpg';
import { useState } from "react";

function Btn1() {

    const [img, setImg] = useState(h1);

    function click() {
        setImg(h2);
    }

    function reset() {
        setImg(h1);
    }

    return (
        <div>
            <button onClick={click}>Click me</button><br />
            <button onClick={reset}>Reset</button><br />

            <img src={img} alt="image" width="300px" height="300px" />
        </div>
    );
}

export default Btn1;