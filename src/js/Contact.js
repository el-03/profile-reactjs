import React from 'react';
import '../css/App.css'
import '../css/Contact.css';

function Contact() {
    return(
        <div className="Contact">
            <article>
                <h2>Get In Touch</h2>
                <p>
                    Have a question? fell free to contact me.
                </p>
                <a className="btn-message" href="mailto:bilalelbari@gmail.com">
                    <img src={require("../icons/email.svg")}/>
                    MESSAGE ME
                </a>
            </article>
            <div className="Media">
                <a href="https://www.linkedin.com/in/bilalelbari">
                    <img src={require("../icons/linkedin.svg")}/>
                </a>
                <a href="https://www.flickr.com/people/152835368@N03/">
                    <img src={require("../icons/flickr.svg")}/>
                </a>
                <a href="https://www.instagram.com/billy.bilal/">
                    <img src={require("../icons/instagram.svg")}/>
                </a>
            </div>
        </div>
    );
}

export default Contact
