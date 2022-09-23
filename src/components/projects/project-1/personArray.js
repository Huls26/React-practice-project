import { useState } from "react";
import { persons } from "./data/personArrayData";
import "./personArray.css";

export default function PersonDelete() {
    let [personName, setPersonName] = useState(() => persons);

    let personsElement = personName.map((person, index) => <Person key={person} eventRemove={() => removeItem(index)} name={ person }/>)

    // event handler
    function clearItems() {
        setPersonName(() => []);
    }

    console.log(personName)
    function removeItem(id) {
        setPersonName(prevValue => {
            prevValue.splice(id, 1);

            return [...prevValue]
        })
    }   

    return (
        <section className="container">
            <main className="person--container">
                { personName.length ? personsElement: "No Item Available!" }
            </main>

            <button className="clear-items" onClick={ clearItems }>Clear Items</button>
        </section>
    )
}

function Person({name, eventRemove}) {
    return (
        <div className="person">
            <h1 className="person--name">{ name }</h1>
            <button className="remove--btn" onClick={ eventRemove }>remove</button>
        </div>
    )
}