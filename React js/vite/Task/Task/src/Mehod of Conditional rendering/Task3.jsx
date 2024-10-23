import React, { useState } from 'react'

const Task3 = () => {
    const [login, setlogin] = useState(true)

 
    return(
        <div>
            {login && <p className='bg-amber-600 py-4'>This Is a warning message!</p>}
        </div>
    )

}

export default Task3
