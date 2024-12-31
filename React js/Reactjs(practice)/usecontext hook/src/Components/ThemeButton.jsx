import React from 'react'
import ThemeContext from '../Context/ThemeContext'
import { useContext } from 'react'

const ThemeButton = () => {
    const {value , setvalue , setTheme} = useContext (ThemeContext);
        if(value === true)
        {
            setTheme(document.querySelector('html').classList.add('dark'))
        }
        if(value === false)
        {
            setTheme(document.querySelector('html').classList.remove('dark'))
        }
    return (
        
        <div>
            <label className="inline-flex items-center me-5 cursor-pointer">
                <input
                    type="checkbox"
                    defaultValue=""
                    className="sr-only peer"
                    defaultChecked=""
                   onChange={(e) => setvalue(e.target.c)} 
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-900" />
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {value === true ? 'Dark' : 'light'}
                </span>
            </label>
        </div>
    )
}

export default ThemeButton
