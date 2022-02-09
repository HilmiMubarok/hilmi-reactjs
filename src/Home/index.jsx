import React from "react";
import me from "../images/me.JPG";

import { motion } from "framer-motion";

function Home() {


    return (
        <motion.div initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: .5 }} >
            <div className="w-full flex flex-col md:flex-row-reverse  justify-between px-60 items-center mt-24">
                <div>
                    <img
                        src={me}
                        alt="Hilmi Mubarok"
                        className="w-[450px] h-[600px] rounded-[50px] shadow-xl object-cover"
                    />
                </div>
                <div>
                    <h1 className="text-4xl">Hi, I'm</h1>
                    <h1 className="my-4 text-7xl font-bold">Hilmi Mubarok</h1>
                    <h2 className="text-4xl">Welcome to my website</h2>
                </div>

            </div>
        </motion.div>
    );
}

export default Home;
