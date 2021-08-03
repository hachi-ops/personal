import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);

    const trackScreenWidth = () => {
        const width = window.innerWidth;
        setScreenWidth(width);
        if (width > 800) {
            setOpen(true)
        }
    };

    useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
    }, []);


    return (
        <nav className="navbar">
            <div className="nav-wrapper">
                <div className="logo">
                    <Link
                        to="/">
                        <img
                        src= {`${process.env.PUBLIC_URL}/circle.png`}
                        alt="brand"
                        />
                    </Link>
                </div>
                <div className="list-wrapper">
                    <img
                    src= {`${process.env.PUBLIC_URL}/icons8-menu.png`}
                    alt="menu bars"
                    style={{ opacity: !open ? 1 : 0 }}
                    onClick={() =>{
                        setOpen(!open);
                    }}
                    />
                    <img
                    src= {`${process.env.PUBLIC_URL}/icons8-multiply.png`}
                    alt="menu cross"
                    style={{ opacity: open ? 1 : 0 }}
                    onClick={() =>{
                        setOpen(!open);
                    }}
                    />
                    <ul style={{ left: open ? "0" : "-100vw"}}>
                        <li>
                            <Link
                             style={{ color: location.pathname === "/" && "#4071f4"}}
                            to="/"
                            // onClick={handleClose}
                            // style={{ color: location.pathname === "/" && "#4071f4"}}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                             style={{ color: location.pathname === "/about" && "#4071f4"}}
                            to="/about"
                            >
                                About
                            </Link>
                        </li>

                        <li>
                            <Link
                             style={{ color: location.pathname === "/skills" && "#4071f4"}}
                            to="/skills"
                            >
                                Skills
                            </Link>
                        </li>

                        <li>
                            <Link
                             style={{ color: location.pathname === "/works" && "#4071f4"}}
                            to="/works"
                            >
                                Works
                            </Link>
                        </li>

                        <li>
                            <Link
                             style={{ color: location.pathname === "/contact" && "#4071f4"}}
                            to="/contact"
                            >
                                Contact
                            </Link>
                        </li>

                    </ul>

                </div>

            </div>

        </nav>
    )
}

export default NavBar;
