import React, { useState, useContext } from "react";
import List from "./components/List";
import { data } from "./data";
import "./useContext.css";

export const PersonContext = React.createContext();

export default function ContextApi() {
    let [persons, setPersons] = useState(() => data); 

    function deleteItem(id) {
        setPersons(prevData => prevData.filter(person => person.id != id));
    }

    return (
        <PersonContext.Provider value={ deleteItem }>
            <div className="container-api">
                <h1 className="title">Prop Drilling</h1>
                <List data={ persons } />
            </div>
        </PersonContext.Provider>
    )
}