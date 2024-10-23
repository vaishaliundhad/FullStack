// import { useState } from "react" 
 
 
// const Object = () => { 
//     const [car,setcar] =useState({year:2024,make:"Ford",model:"Mustang"}); 
//     function  handleyearChange(event) { 
//          setcar({...car,year:parseInt(event.target.value)})  // spread operator to create a new object and update the year property. 
         
//     } 
//     function  handlemakeChange(event) { 
//          setcar({...car,make:event.target.value})  // spread operator to create a new object and update the make property. 
         
//     } 
//     function  handlemodelChange(event) { 
//          setcar({...car,model:event.target.value})  // spread operator to create a new object and update the model property.  // parseInt is used to convert the input value to integer.  // value attribute is used to display the current value of the input field.  // onChange event is triggered when the user finishes typing in the input field.  // event.target.value contains the current value of the input field.   // setcar updates the state with the new object with updated properties.   // spread operator is used to create a new object and update the properties of the car object.  // The properties of the car object are updated only when the corresponding input fields change.   // The new object is then assigned to the car state.  // This way, the car state is updated in real-time as the user types in the input fields.   // The input fields are controlled by the handleyearChange, handlemakeChange, and handlemodelChange 
         
//     } 
 
//   return ( 
//     <div className="information"> 
//         <p>Your Favorite Car Is:{car.year} {car.make} {car.model}</p> 
//         <input  type="number" onChange={handleyearChange}  value={car.year}/><br/> 
//         <input  type="text"   onChange={handlemakeChange}  value={car.make}/><br/> 
//         <input  type="text"   onChange={handlemodelChange}  value={car.model}/> 
 
//     </div> 
//   ) 
// } 
 
// export default Object

import React from 'react'
import { useState } from 'react';

const Object = () => {

    const [user, setUser] = useState({
        name: "",
        age: "",
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update the state using the spread operator
        setUser({
            ...user,
            [name]: value, // Dynamically update the property using computed property names
        });
    };


    return (
        <div className='border-2 flex flex-col  items-center mx-96 mt-48 py-10 bg-teal-500 '>
            <h1 className='text-2xl mb-10 text-white border p-4'>Object Example</h1>

            <p>Name: {user.name}</p>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className='border-2 border-solid border-black'
            />

            <p>Age: {user.age}</p>
            <input
                type="number"
                name="age"
                value={user.age}
                onChange={handleChange}
                placeholder="Enter your age"
                className='border-2 border-solid border-black'
            />

            <p>Email: {user.email}</p>
            <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className='border-2 border-solid border-black'
            />

            <h2>User Information:</h2>
            <textarea name="" id="" className='border-2 border-black'></textarea>

        </div>
    );
}

export default Object

