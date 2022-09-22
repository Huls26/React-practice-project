import { useState } from "react";
import "./error-example.css";

export default function RandomTitle() {
    let titles = ["Random Title", "Hello World", "Dance With You Tonight", "With Smile", "Work Hard Play Hard"];
    let [title, setTitle] = useState(() => titles[0]);

    function randomPicker(array) {
        let titleLength = titles.length;
        let randomIndex = Math.floor(Math.random() * titleLength);

        return array[randomIndex];
    }

    // event handler
    function toogleRandom() {
        setTitle(() => randomPicker(titles))
    }

    return (
        <div className="container">
                <h1>{ title }</h1>

                <button 
                    onClick={toogleRandom}      className="change-title"
                >Change Title</button>
        </div>

    )
}