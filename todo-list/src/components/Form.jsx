import { useState } from "react";

function Form (props) {
    const [name, setName] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        props.addTask(name);
        setName("");
    }

    function handleChange(event) {
        setName(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    Че нада делат?
                </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Дабавит
            </button>
        </form>
    )
}

export default Form;