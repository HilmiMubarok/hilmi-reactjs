import React from "react";
import me from "../images/me.JPG"
export default class Avatar extends React.Component {

    render() {
        return (
            <img src={me} className="border-4 border-white object-cover w-[180px] h-[180px] rounded-full mb-5" />
        )
    }
    
}