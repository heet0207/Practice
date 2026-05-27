import h1 from './h1.jpg';
import h2 from './h2.jpg';
import h3 from './h3.jpeg';
import h4 from './h4.jpeg';
import h5 from './h5.jpeg';
import h6 from './h6.jpeg';
import { useState } from "react";

function Btn1() {
    const x = [h1, h2, h3, h4, h5, h6];

    function random_img() {
        const r = Math.floor(Math.random() * x.length);
        return x[r];
    }

    const [initialImg] = useState(() => random_img());
    const [img, setImg] = useState(initialImg);

    function click() {
        setImg(random_img());
    }

    function reset() {
        setImg(initialImg);
    }

    return (
        <div>
            <button onClick={click}>Click me</button>
            <br />
            <button onClick={reset}>Reset</button>
            <br />

            <img src={img} alt="image" width="300px" height="300px" />
        </div>
    );
}

export default Btn1;
