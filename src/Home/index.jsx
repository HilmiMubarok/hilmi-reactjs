import React from "react";
import Toogle from "../Toogle";
import me from "../images/me.JPG";

function Home() {

    return (
        <div className="bg-white dark:bg-gray-900 flex min-h-screen w-full flex-col items-center justify-center">

            <Toogle />
            <div className="flex flex-col items-center">
                <img
                    src={me}
                    alt="Hilmi Mubarok"
                    className="h-40 w-40 rounded-full border-4 dark:border-green-300 border-cyan-300 object-cover"
                />
                <h1 className="my-4 text-black dark:text-white text-4xl font-bold">Hilmi Mubarok</h1>
                <h2 className="text-black dark:text-white">Web Developer</h2>
                <div className="mt-8 flex justify-between w-96">
                    <div className="p-4 dark:bg-gray-500 bg-gray-900 rounded-xl text-white font-bold">
                        <p>About</p>
                    </div>
                    <div className="p-4 dark:bg-gray-500 bg-gray-900 rounded-xl text-white font-bold">
                        <p>My Projects</p>
                    </div>
                    <div className="p-4 dark:bg-gray-500 bg-gray-900 rounded-xl text-white font-bold">
                        <p>Contact</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
