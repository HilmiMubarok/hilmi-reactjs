import React from "react";

import me from "../images/me.JPG"

class Landing extends React.Component {


    render () {


        return (
            <div className="bg-gray-900 text-white w-full h-screen flex items-center flex-col justify-center">

                <img src={me} className="border-4 border-white object-cover w-[180px] h-[180px] rounded-full mb-5" />
                <p className="text-4xl">React app project for MERN Eduwork class</p>

                <div className="container grid grid-cols-4 gap-4 mt-[100px]">
                    <div className="font-bold w-full border border-white rounded rounded-lg shadow-lg p-[20px] bg-white text-gray-900 flex flex-col items-center">
                        <p className="text-6xl">1</p>
                        <p className="text-xl">Komponen</p>
                    </div>
                </div>

            </div>
        )

    }


}

export default Landing