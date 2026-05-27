import "./style.css";
import logo from "./main.png";

const Navbar = () => {
    return (
        <>
            <nav
                id="navbar-example2"
                className="navbar navbar-light bg-light px-3"
            >
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo" width="40" />
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link" href="#fat">
                            @fat
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#mdo">
                            @mdo
                        </a>
                    </li>

                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                            href="#"
                            role="button"
                            aria-expanded="false"
                        >
                            Dropdown
                        </a>

                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="#one">
                                    one
                                </a>
                            </li>

                            <li>
                                <a className="dropdown-item" href="#two">
                                    two
                                </a>
                            </li>

                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li>
                                <a className="dropdown-item" href="#three">
                                    three
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <div className="container mt-4">
                <h4 id="fat">@fat</h4>
                <p>Content here...</p>

                <h4 id="mdo">@mdo</h4>
                <p>Content here...</p>

                <h4 id="one">one</h4>
                <p>Content here...</p>

                <h4 id="two">two</h4>
                <p>Content here...</p>

                <h4 id="three">three</h4>
                <p>Content here...</p>
            </div>
        </>
    );
};

export default Navbar;