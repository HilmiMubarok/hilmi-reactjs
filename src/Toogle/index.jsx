// react functional component

import React, { useEffect } from "react";
import { useState } from "react";


export default function Toogle() {
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
        <div className="fixed top-4 right-4">
            <label htmlFor="toggle-example" className="flex relative items-center mb-4 cursor-pointer">
                <input type="checkbox" id="toggle-example" className="sr-only" onChange={toggleDark} />
                <div className="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{text}</span>
            </label>
        </div>
    );
}