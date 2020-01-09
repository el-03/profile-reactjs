import React, {useState, useEffect} from 'react';
import '../css/App.css'
import '../css/Interests.css';
function Interests() {

    const [part, setPart] = useState(1);
    const [big, setBig] = useState(require("../images/3.jpg"));

    const images = [];

    const loadImg = (e) => {
        const imgS = 6*e;
        for (let i = 1; i < imgS + 1; i++){
            images.push({id: i, src:require("../images/"+ i + ".jpg"), title: i, description: i, className:'img' + i});
        }
    };

    const bigImg = (e) => {
        setBig(e);
        console.log(e)
    };

    const increment = () => {
        if (part !== 3){
            setPart(part+1);
            loadImg(part);
        }
    };
    const decrement = () => {
        if (part !== 1){
            setPart(part-1);
            loadImg(part);
        }
    };

    loadImg(part);

    return(
        <div className="Interests">
            <div className="ImagesContainer">
                <div className="SmallImage">
                    <div className="SmallImagesContainer" style={{gridTemplateRows: 'repeat('+ part * 2 +'1fr)'}}>
                        { images.map(({id, src, title, description, className}) =>
                            <img key={id} src={src} title={title} alt={description} className={className} onClick={() => bigImg(src)}/>
                        )}
                    </div>
                    <div className="Button">
                        <img src={require("../icons/plus.svg")} style={(part === 3) ? {opacity:"0.1"} : {}} onClick={increment}/>
                        <img src={require("../icons/minus.svg")} style={(part === 1) ? {opacity:"0.1"} : {}} onClick={decrement}/>
                    </div>
                </div>
                <div className="InterestsContent">
                    <article>
                        <h2>Interests</h2>
                        <p>
                            Besides have interest in something that related to science and technology, I do love animals and plants.
                            There are several things that i love to do, namely, playing games, taking some photos, and reading.
                            <br/>
                            <br/>
                            These are some photos that I took from a different places.
                        </p>
                    </article>
                    <img src={big} className="BigImage"/>
                </div>
            </div>
            {/*<h2 onClick={increment} style={(part !== 3) ? {} : {display:'none'}}>Expand</h2>*/}
            {/*<h2 onClick={decrement} style={(part !== 1) ? {} : {display:'none'}}>Shrink</h2>*/}
        </div>
    );
}

export default Interests
