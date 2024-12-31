import React from 'react'
import { useState } from 'react'
import ThemeContext from './ThemeContext'

const ThemeContextProvider = ({ children }) => {
    const [theme, settheme] = useState()
    const [value, setvalue] = useState(false)
    return (
        <div>
            <ThemeContext.Provider value={{ settheme, value, setvalue }}>
                {children}
            </ThemeContext.Provider>
        </div>
    )
}

export default ThemeContextProvider
