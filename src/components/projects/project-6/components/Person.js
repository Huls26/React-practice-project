import { useContext } from "react";
import { PersonContext } from "../useContext";

export default function Person({name, id}) {
    const {deleteItem} = useContext(PersonContext)

    return (
        <article className="person">
            <h3 className="person--name">{ name }</h3>
            <button className="delete--element" onClick={ () => deleteItem(id) }>remove</button>
        </article>
    )
}