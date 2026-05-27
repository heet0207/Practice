import "./style.css";

const Service = () => {
    return (
        <>
            <center>
                <h1 id="exp">Activities</h1>
            </center>

            <br />

            <hr id="exphr" color="#012d78" />

            <br />

            <section className="exp-container">
                <div className="exp-items">
                    <div className="head">
                        <h4>Volunteer, BAPS Sanstha</h4>
                        <p>Kheda, Gujarat</p>
                    </div>

                    <hr />

                    <div className="details">
                        <p>
                            I am a Bal Sanchalak. I organise Sabhas for children which enrich
                            their Spiritual Knowledge and moral values.
                        </p>
                    </div>
                </div>

                <div className="exp-items">
                    <div className="head">
                        <h4>Student, H & D Parekh High School</h4>
                        <p>Kheda, Gujarat</p>
                    </div>

                    <hr />

                    <div className="details">
                        <p>
                            Studying in class 12th Science with Physics, Chemistry, Maths and
                            English subjects.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Service;