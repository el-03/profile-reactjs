import React from 'react';
import './css/App.css';
import Navbar from "./js/Navbar";
import About from "./js/About";
import Interests from "./js/Interests";
import Contact from "./js/Contact";
import Footer from "./js/Footer";

function App() {

    // const [scroll, setScroll] = useState(0);

    return (
        <div className="App">
            <Navbar/>
            <div className="Home" id="Home">
                <h1>HELLO WORLD.</h1>
            </div>
            <About id="About"/>
            <Interests id="Interests"/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
