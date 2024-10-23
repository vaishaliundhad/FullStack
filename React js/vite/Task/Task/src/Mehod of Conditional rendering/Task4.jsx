import React, { useState } from 'react'

const Task4 = () => {
    const [view, setview] = useState("home");

    const renderview = () => {
        switch (view) {
            case "home":
                return <h1>Home page</h1>;
            case "about":
                return <h1>about us</h1>;
            case "contact":
                return <h1>contact page</h1>;
            default:
                return <h1>404 - page not found</h1>;
        }
    }
    return (
        <div>
             <div className='bg-yellow-600 py-4'>{renderview()}</div>
            <div className='justify-evenly mt-8'>
                <button onClick={() => setview("home")} className='py-2 px-4 bg-yellow-700 rounded'>Home</button>
                <button onClick={() => setview("about")} className='py-2 px-4 bg-yellow-700 rounded ml-4'>about</button>
                <button onClick={() => setview("contact")} className='py-2 px-4 bg-yellow-700 rounded ml-4'>contact</button>

            </div>


           
        </div>
    )
}

export default Task4
