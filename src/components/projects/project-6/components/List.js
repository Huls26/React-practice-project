import { useContext } from "react";
import Person from "./Person";
import { PersonContext } from "../useContext";

export default function List() {
    const {persons} = useContext(PersonContext);

    const personElement = persons.map(person => <Person key={person.id} {...person}/>)
    return (
        <section className="list">
            { personElement }
        </section>
    )
}