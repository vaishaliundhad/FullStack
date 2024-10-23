import React, { useState } from "react";

const Form_multiple = () => {
    // Declare state variables for form fields
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    // Handle input change
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        // Update the corresponding state field
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Submitted:", formData);

        // You can add form validation, data submission logic here (like an API call)
    };

    return (
        <div className="border px-4 py-4 bg-lime-700 text-white">
            <h2 className="mb-6 text-4xl text-white">Register Form</h2>
            <form onSubmit={handleSubmit}>
                {/* first name input */}
                <div>
                    <label className="mt-4 mb-8">FirstName:</label>
                    <input
                        type="text"
                        name="firstname"
                        className="ml-2 mb-6"
                        value={formData.firstname}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                {/* last name input */}
                <div>
                    <label className="mt-6">LastName:</label>
                    <input
                        type="text"
                        name="lastname"
                        className="ml-2 mb-6"
                        value={formData.lastname}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                {/* Email input */}
                <div className="mt-4 mr-8 mb-2">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        className="mr-[-70px] mb-6"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                {/* number input */}
                <div className="mb-2 mt-4">
                    <label>Number:</label>
                    <input
                        type="number"
                        name="password"
                        className="ml-2 mb-6"
                        value={formData.number}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                {/* Password input */}
                <div className="mb-2 mt-4">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        className="ml-2 mb-6"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                {/* Submit button */}
                <button className="bg-lime-400 py-2 px-4 rounded ml-16" type="submit">Registed</button>
            </form>
        </div>
    );
};

export default Form_multiple;
