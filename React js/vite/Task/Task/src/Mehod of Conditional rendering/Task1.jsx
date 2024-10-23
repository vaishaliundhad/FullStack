import React, { useState } from 'react'

const Task1 = () => {
    const [login, setlogin] = useState(false)

 
    if (login) {
        return (
            <div className='bg-slate-600 text-white py-4'>
                <h1>components One</h1>
            </div>
        )
    }
    else {
        return (
            <div className='bg-slate-600 text-white py-4'>
                <h1>components two</h1>
            </div>
        )
    }

}

export default Task1
