import React, { useContext } from 'react'
import { changeMethod } from '../App'

function Button() {
  const method = useContext(changeMethod)
  return (
    <button
        type="button"
        className="mt-4 w-[200px] ml-8 rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80"
        onClick={method}
      >
        theme
      </button>
  )
}

export default Button
