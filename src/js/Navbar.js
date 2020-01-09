import React from 'react';
import '../css/Navbar.css';
import '../css/App.css'
import {Link} from "react-scroll";

function Navbar() {

    const increment = () => {
        // toggle navlist
        const nav = document.querySelector('.nav-links');
        nav.classList.toggle('nav-active');

        // toggle burger to x
        const burger = document.querySelector('.burger');
        burger.classList.toggle('toggle');

        // animate the list
        const navLinks = document.querySelectorAll('.nav-links li');
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5 ease forwards ${index / 7 + 1.5}s`;
            }
        });
    };

    // const scrollY = () => {
    //     // setScroll(window.pageYOffset);
    //     window.scrollBy(0, 100);
    //     setScroll(window.scrollY);
    //     console.log("scroll position:", scroll);
    // };

    // useEffect()

    return(
        <nav>
            {/*<div className="logo">*/}
            {/*    <h4>^_^</h4>*/}
            {/*</div>*/}
            <ul className="nav-links">
                <li>
                    <Link
                        activeClass="active"
                        to="Home"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="About"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="Interests"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Interests
                    </Link>
                </li>
            </ul>
            <div className="burger"  onClick={increment}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar
