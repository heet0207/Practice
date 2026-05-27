import "./style.css";

const About = () => {
    return (
        <section id="abt-me">
            <div id="about-wrapper">
                <div id="about-img">
                    <img src="h2.jpg" alt="about" />
                </div>

                <div id="about-text">
                    <h1>About Me</h1>
                    <br />
                    <hr color="#012d78" />
                    <br />

                    <p>
                        I am a student studying in class 12th Science in H & D Parekh High
                        School. I always like to learn new skills. Academically, I like to
                        do Maths. I live in a small town Kheda with big dreams.
                    </p>

                    <br />

                    <p>
                        I had a career goal to become a Software Engineer because building
                        Websites and Applications and solving real life problems fascinates
                        me.
                    </p>

                    <br />

                    <p>
                        Apart from academics, I like to chill with friends and listen &
                        sing music. Also I have a great passion for Chess and Cricket.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;