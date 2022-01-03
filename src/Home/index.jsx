import React from "react";

import Avatar from "./Avatar";
import Card from "./Card";

class Home extends React.Component {


    randomBg() {
        const bg = [
            "bg-white", "bg-red-600", "bg-emerald-600", "bg-orange-600",
            "bg-amber-600", "bg-yellow-600", "bg-lime-600", "bg-green-600",
        ]

        return bg[Math.floor(Math.random() * bg.length)]
    }
    render () {


        return (
            <div className="bg-gray-900 text-white w-full h-screen flex items-center flex-col justify-center">
                

                <Avatar/>
                <p className="text-4xl">React app project for MERN Eduwork class</p>

                <div className="container mt-[100px]">
                    <div className="flex justify-between">
                        <div className="p-3 text-white text-xl">Materi</div>
                        <button className="p-2 rounded bg-red-900 text-white ">
                            Randomize bg card
                        </button>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mt-5">

                        <Card number="1" bg={this.randomBg()} title="Basic Components" />

                        <Card number="2" bg={this.randomBg()} title="Styling Components" />

                        <Card number="3" bg={this.randomBg()} title="Reusable Components" />

                        <Card number="4" bg={this.randomBg()} title="Rendering Variable" />

                        <Card number="5" bg={this.randomBg()} title="Form and Validation" />

                        <Card number="6" bg={this.randomBg()} title="Lifecycle Components" />
                    </div>
                </div>

            </div>
        )

    }


}

export default Home