import { useState } from "react";
import "./Forms.css";

export default function Form() {
    let [form, setForm] = useState(() => ({
                                    name: "",
                                    email: "",
                                }));

    function updateForm(event) {
        let name = event.currentTarget.name;
        let value = event.currentTarget.value;

        setForm(prevForm => ({
            ...prevForm,
            [name]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(form, "added")
    }

    return (
        <form action="" className="form-addperson" onSubmit={ handleSubmit }>
            <div className="name-form">
                <label htmlFor="name">Name:</label>
                <input value={ form.name } type="text" id="name" name="name" onChange={ event => updateForm(event) }/>
            </div>
         
            <div className="email-form">
                <label htmlFor="email">Email:</label>
                <input value={ form.email } type="email" id="email" name="email" onChange={ event => updateForm(event) } />
            </div>

            <button className="add-person">Add Person</button>
        </form>
    )
}