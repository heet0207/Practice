import "./style.css";

const Home = () => {
    return (
        <section id="container">
            <section id="details">
                <div className="hi">
                    <p id="hello">Hii, I'm</p>
                    <br />
                </div>

                <div className="name">
                    <p>Heet Chauhan</p>
                    <br />
                </div>

                <div className="wrapper">
                    <div className="static">
                        <p>I'm a</p>
                    </div>

                    <div className="dynamic">
                        <li className="sec-text">
                            <b>Student</b>
                        </li>
                        <li className="sec-text">
                            <b>Gamer</b>
                        </li>
                        <li className="sec-text">
                            <b>Programmer</b>
                        </li>
                        <li className="sec-text">
                            <b>Learner</b>
                        </li>
                    </div>
                </div>
            </section>

            <section id="logo">
                <img src="h1.jpg" alt="profile" />
            </section>
        </section>
    );
};

export default Home;