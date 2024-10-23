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
    <div className="border form bg-lime-700 w-[45%] ml-[350px]">
      <h2 className="mb-8 text-3xl text-white mt-4 ">Sign Up Form</h2>
      <form onSubmit={handleSubmit}>
        {/* first name input */}
        <div>
          <label className="mt-4">First Name:</label>
          <input 
            type="text"
            name="firstname"
            className="ml-2 mb-4"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* last name input */}
        <div>
          <label className="mt-4">Last Name:</label>
          <input 
            type="text"
            name="lastname"
            className="ml-2 mt-6 "
            value={formData.lastname}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Email input */}
        <div className="mt-4 mr-8 mb-6"> 
          <label>Email:</label>
          <input
            type="email"
            name="email"
            className="mr-[-70px] mt-6 ml-2"
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
            className="ml-2 mt-6"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Password input */}
        <div className="mb-2 mt-4">
          <label>Age:</label>
          <input
            type="age"
            name="age"
            className="ml-10 mt-6 "
            value={formData.age}
            onChange={handleInputChange}
            required
          />
        </div>
          {/* date */}
          <div className="mb-2 mt-4 mr-10">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            className="ml-6 mt-6"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>


        {/* Password input */}
        <div className="flex gap-4 mt-10">

          <label for="male" className="ml-[150px]">Male:</label>
          <input type="radio" id="gender" name="gender" className=" " />
         
          <label for="male">Female:</label>
          <input type="radio" id="gender" name="gender" />
          
        
       
  
        </div>

      
        {/* Submit button */}
        <button className="bg-lime-400 py-2 px-4 rounded mt-6 text-white mb-6" type="submit">Submit</button>
        <button className="bg-lime-500 py-2 px-4 rounded mt-6 text-white ml-4" type="submit">Reset</button>
      </form>
    </div>
  );
};

export default Form_multiple;
