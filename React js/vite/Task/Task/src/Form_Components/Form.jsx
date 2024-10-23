import React, { useState } from "react";

const Form = () => {
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
    <div className="border px-4 py-4 bg-lime-700">
      <h2 className="mb-6 text-2xl ">Sign Up Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Username input */}
        <div>
          <label className="mt-4">Username:</label>
          <input 
            type="text"
            name="username"
            className="ml-2"
            value={formData.username}
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
            className="mr-[-70px]"
            value={formData.email}
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
            className="ml-2"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Submit button */}
        <button className="bg-lime-400 py-2 px-4 rounded" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Form;
