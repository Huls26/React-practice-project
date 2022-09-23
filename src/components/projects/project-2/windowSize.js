import { useState, useEffect } from "react";
import "./windowSize.css"

export default function WindowSize() {
    let [size, setSize] = useState(() => window.innerWidth);
    let [hideShow, setHideShow] = useState(() => true);

    useEffect(() => {
        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
        }
    }, [])

    // event
    function resize() {
        setSize(() => window.innerWidth);
    }

    
    function toggleHideShow() {
        setHideShow(prevValue => !prevValue);
    }

    return (
        <div className="container">
            <h1 className="title">Windown</h1>
            {hideShow && <h2 className="display--size">{ size } px</h2>}

            <button className="toggle-btn" onClick={ toggleHideShow }>{hideShow ? "Hide" : "Show"}</button>
        </div>
    )
}