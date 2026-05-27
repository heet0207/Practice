import "./style.css";

const Contact = () => {
    return (
        <>
            <center>
                <div className="social-media">
                    <p>Connect with me on:</p>

                    <a href="https://instagram.com/heet_0203">
                        <i className="fab fa-instagram" aria-hidden="true"></i>
                    </a>

                    <a href="https://www.snapchat.com/add/heet_0302">
                        <i className="fab fa-snapchat" aria-hidden="true"></i>
                    </a>

                    <a href="https://www.facebook.com/heet.chauhan.9256">
                        <i className="fab fa-facebook" aria-hidden="true"></i>
                    </a>
                </div>
            </center>

            <hr className="end" />

            <footer>
                <p>
                    Made with ❤️ &copy; 2023 <br />
                    Heet Chauhan
                </p>
            </footer>
        </>
    );
};

export default Contact;