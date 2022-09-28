import { useState, useReducer } from "react";
import Modal from "./Modal";
import data from "./data";
import "./index.css";

export default function Index() {
    const initialArg = {
        name: "",
        dataName: data,
        isModal: false,
        modal: "",
    }
    const actionTaken = {
        name: "name",
        add: "add item",
        delete: "delete item",
    }
    const [state, dispatch] = useReducer(reducer, initialArg);

    function reducer(state, action) {
        switch (action.type) {
            case actionTaken.name :
                return {...state, name: action.value}
            case actionTaken.add :
                return {...state, dataName: [...state.dataName, action.value], isModal: true, modal: actionTaken.add}
            case actionTaken.delete :
                return {...state, dataName: [...action.value], isModal: true, modal: actionTaken.delete}
            default:
              throw new Error();
        }
    }

    console.log(state)
    // handle event
    function deleteElement(id) {
        let element = state.dataName.filter(person => person !== id);
        dispatch({type: actionTaken.delete, value: element})
    }

    function handleChange(event) {
        let target = event.target;
        let value = target.value;
        let name = target.name;

        dispatch({type: actionTaken.name, value: value})
    }

    function handleSubmit(e) {
        e.preventDefault()

        dispatch({type: actionTaken.add, value: state.name})
    }

    const elementName = state.dataName.map(name => <Person key={name} name={name} id={name} event={deleteElement}/>)

    return (
        <div className="container-index">
            {state.isModal && <Modal modal={ state.modal }/>}
            <Form dispatch={ handleChange } handleSubmit={ handleSubmit } value={ state.name }/>

            <div className="name-container">
                { elementName }
            </div>
        </div>
    )
}

function Form({ dispatch, handleSubmit, value}) {
    return (
        <form action="" onSubmit={ handleSubmit }>
            <input value={ value } type="text" className="input-name" onChange={ dispatch }/>

            <button className="add-item">Add</button>
        </form>
    )
}

function Person({name, id, event}) {
    return (
        <article className="person">
            <h3 className="name">{name}</h3>

            <button className="delete" onClick={() => event(id)}>X</button>
        </article>
    )
}