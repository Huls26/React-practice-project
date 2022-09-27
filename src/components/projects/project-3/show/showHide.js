import { useState, useEffect } from "react";
import "./showHide.css"

export default function ShowHide() {
    let [size, setSize] = useState(() => window.innerWidth);
    let [isShow, setIsShow] = useState(() => true);

    function screenSize() {
        setSize(() => window.innerWidth);
    }

    function showSize() {
        return (
            <div>
                <h1 className="title">Window</h1>
                <h3 className="size">Size: {size} Px</h3>
            </div>
        )
    }

    function toggle() {
        setIsShow(prevValue => !prevValue);
    }

    useEffect(() => {
        if (isShow) {
            window.addEventListener("resize", screenSize);
        };

        return function cleanup() {
            window.removeEventListener("resize", screenSize);
        };
       
    }, [isShow])

    return (
        <div className="container">
            <button className="toggle-btn" onClick={ toggle }>{ isShow ? "Hide" : "Show" }</button>

           {isShow && showSize()}
        </div>
    )
}