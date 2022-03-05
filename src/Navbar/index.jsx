import React from "react";
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {


    const [dark, setDark] = useState(false);
    const [text, setText] = useState("Dark Mode");


    useEffect(() => {
        if (dark) {
            document.body.classList.add("dark");
            setText("Light Mode");
        } else {
            document.body.classList.remove("dark");
            setText("Dark Mode");
        }
    }, [dark])

    const toggleDark = () => {
        setDark(!dark);
    };


    return (


        <div>
            <nav className="bg-bg-light border-none px-2 sm:px-4 py-2.5 dark:bg-bg-dark dark:text-font-dark">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="#" className="flex">
                        <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-font-dark text-font-light">Hilmi Mubarok</span>
                    </a>
                    <div className="flex md:order-2">
                        <button onClick={toggleDark} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{text}</button>
                        <button data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <Link to="/" className="block py-2 pr-4 pl-3 text-font-light bg-bg-light rounded md:bg-transparent md:p-0 dark:text-font-dark dark:bg-bg-dark" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="block py-2 pr-4 pl-3 text-font-light bg-bg-light rounded md:bg-transparent md:p-0 dark:text-font-dark dark:bg-bg-dark" aria-current="page">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>

    )

}