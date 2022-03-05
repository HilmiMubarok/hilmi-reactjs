import React from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export default function About() {
    return (
        <motion.div initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: .5 }} >
            <div className="w-full flex flex-col md:flex-row-reverse justify-center px-60 items-center mt-24">
                <div>
                    <h1 className="text-4xl">Hi, I'm</h1>
                    <h1 className="my-4 text-7xl font-bold">Hilmi Mubarok</h1>
                    <h2 className="text-4xl mt-10">My Projects</h2>
                    {/* grid tailwind */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                        <Link to="/quran" className="bg-bg-dark text-font-dark dark:bg-bg-light dark:text-font-light dark:font-bold rounded-lg shadow-lg p-4">
                            Qur'an
                        </Link>
                        <Link to="/movies" className="bg-bg-dark text-font-dark dark:bg-bg-light dark:text-font-light dark:font-bold rounded-lg shadow-lg p-4">
                            Movie
                        </Link>
                    </div>
                </div>

            </div>
        </motion.div>
    )
}