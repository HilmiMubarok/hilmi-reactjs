import React from "react";

import { motion } from "framer-motion";

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
                    <h2 className="text-4xl">Ini Halaman About</h2>
                </div>

            </div>
        </motion.div>
    )
}