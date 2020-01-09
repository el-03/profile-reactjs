import React, {useEffect, useState} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import  '../css/App.css'
import '../css/About.css';
import profilePicture from '../images/DSCF9371.jpg'

function About() {

    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            scrollPosY()
        }, 10);
        return () => clearInterval(interval);
    });

    const scrollPosY = () => {
        setScroll(window.scrollY);
        // console.log("scroll Position: ",scroll)
    };

    return(
        <div className="About">
            <div className={(scroll < 150 || scroll > 550)? "Hi-Container" : "Hi-Container--expand"}>
                <article className="Hi">
                    <h3>Hi.</h3>
                    <p>
                        My name is Bilal El Bari. I am really passionate about science and technology, yet I have curiosity on
                        other things.
                    </p>
                </article>
                <img src={profilePicture} alt ="Bilal-Profile-Picture"/>
            </div>
            <div className="Know">
                <h2>Getting to Know Me.</h2>
                <div className="Know-Container Content-Picture">
                    <article>
                        <h3>Background</h3>
                        <p style={{textAlign:'left'}}>
                            By 2019, I have graduated from Institut Teknologi Bandung (ITB) in Physics Major. In university,
                            I did a research on nuclear fission reactor, in particular on thermal-hydraulics study.
                        </p>
                    </article>
                    <img src={require("../icons/background.svg")}/>
                </div>
                <div className="Know-Container Picture-Content">
                    <img src={require("../icons/skills.svg")}/>
                    <article>
                        <h3>What I did and do</h3>
                        <p style={{textAlign:'left'}}>
                            I did some computational physics programming when I was in university, the language that I
                            used were python, MatLab, and C++. And for now, I try to learn a front-end developer
                            using react-js framework.
                        </p>
                    </article>
                </div>
                <div className="Know-Container Content-Picture">
                    <article>
                        <h3>Experience(s)</h3>
                        <p style={{textAlign:'left'}}>
                            In University also I had several experience in assisting on some laboratories, and also
                            I had been a lecturer assistant for a particular elementary lecture. Apart from academic things,
                            I am the member of athletic unit ITB (ATLAS) and also on of the head division in
                            Physics student union (HIMAFI ITB).
                        </p>
                    </article>
                    <img src={require("../icons/experiences.svg")}/>
                </div>
            </div>
        </div>
    );
}

export default About
