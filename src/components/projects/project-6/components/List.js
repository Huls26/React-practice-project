import Person from "./Person";

export default function List({data}) {

    const personElement = data.map(person => <Person key={person.id} {...person}/>)
    return (
        <section className="list">
            { personElement }
        </section>
    )
}