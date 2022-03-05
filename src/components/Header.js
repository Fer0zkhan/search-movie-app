import React, { useState } from 'react'

const Header = ({ onChange }) => {
    const [text, setText] = useState('')
    const changeHandler = (e) => {
        setText(e.target.value)
    }
    const regex = /[a-zA-Z]/;
    const onClick = () => {
        if (regex.test(text)) {
            onChange(text)
        }
    }

    return (
        <>
            <nav className="flex justify-center items-center bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
                <p className="text-white text-2xl px-10">Movies</p>
                <input type="text" onChange={changeHandler} value={text} id="email-adress-icon" className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                <button type="button" onClick={onClick} className="mx-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </nav>
        </>
    )
}

export default Header