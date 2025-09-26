import { useState } from "react";

import './Form.css';

const initialState = {
    name: "",
    imageUrl: "./src/assets/Pikachu.png"
};

const Form = ({ addPokemon }) => {
    const [formFields, setFormFields] = useState(initialState);

    const handleChange = e => {
        let { name, value } = e.target;

        if (e.target.files) {
            // for the type=file we need to create a temporary URL that points to the selected file
            value = URL.createObjectURL(e.target.files[0]);
        }

        setFormFields({ ...formFields, [name]: value });
    };

    const resetFields = () => {
        setFormFields(initialState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addPokemon(formFields);
        resetFields();
    };

    return (
        <form id="add-pokemon-form" onSubmit={handleSubmit} className="form-container">
            <h2 className="form__title">Add a new Pokemon</h2>
            <fieldset className="form-fieldset">
                <label className="form-label" htmlFor="name">Name:</label>
                <input
                    className="form-input"
                    onChange={handleChange}
                    type="text"
                    value={formFields.name}
                    id="name" name="name"
                />
            </fieldset>

            <fieldset className="form-fieldset">
                <label className="form-label" htmlFor="imageUrl">Image:</label>
                <input
                    className="form-input__file"
                    onChange={handleChange}
                    type="file"
                    id="imageUrl"
                    name="imageUrl"
                    accept="image/*"
                />
                <span className="form-help-text">* If no file is selected, a default image(Pikachu) will be used.</span>
            </fieldset>

            <button className="form-button" type="submit">Add</button>
        </form>
    );
};

export default Form;