import React from "react";
import me from "../images/me.JPG"
export default class Avatar extends React.Component {

    render() {
        return (
            <div className="flex items-center flex-col">
                <img src={me} className="border-4 border-white object-cover w-[180px] h-[180px] rounded-full mb-5" alt="Hilmi Mubarok" />
                <p className="text-4xl font-bold">Hilmi Mubarok</p>
                <p className="text-lg">Web Developer</p>
            </div>
        )
    }

}