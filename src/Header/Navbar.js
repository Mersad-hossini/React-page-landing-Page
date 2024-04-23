import React, { useEffect, useRef } from 'react';
import "./Navbar.css";

function Navbar() {
    const menuBarRef = useRef(null);
    const menuRef = useRef(null);
    const imageBarRef = useRef(null);
    let isToggle = false;

    useEffect(() => {
        const handleMenuClick = () => {
            if (isToggle) {
                menuRef.current.style.left = "-240px";
                imageBarRef.current.src = "menu-bar-100.png";
                isToggle = false;
            } else {
                menuRef.current.style.left = "0";
                imageBarRef.current.src = "close-bar.png";
                isToggle = true;
            }
        };

        menuBarRef.current.addEventListener("click", handleMenuClick);

        return () => {
            menuBarRef.current.removeEventListener("click", handleMenuClick);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav-wrapper">
                    <h1 className="nav-logo">Mersad Demo</h1>
                    <ul className="menu" ref={menuRef}>
                        <li className="nav-link"><a href="#">Home</a></li>
                        <li className="nav-link"><a href="#">Blog</a></li>
                        <li className="nav-link"><a href="#">Portfolio</a></li>
                        <li className="nav-link"><a href="#">About</a></li>
                        <li className="nav-link"><a href="#">Level 1</a></li>
                        <li className="nav-link"><a href="#">Shop</a></li>
                    </ul>
                    <div className="menu-bar" ref={menuBarRef}>
                        <img src="menu-bar-100.png" className="image-bar" ref={imageBarRef} alt="menu-bar" />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
