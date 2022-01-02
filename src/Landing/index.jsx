import React from "react";

import Avatar from "./Avatar";
import Card from "./Card";

class Landing extends React.Component {

    render () {


        return (
            <div className="bg-gray-900 text-white w-full h-screen flex items-center flex-col justify-center">

                <Avatar/>
                <p className="text-4xl">React app project for MERN Eduwork class</p>

                <div className="container grid grid-cols-4 gap-4 mt-[100px]">
                    <Card number="1" title="Basic Components" />

                    <Card number="2" title="Styling Components" />
                </div>

            </div>
        )

    }


}

export default Landing