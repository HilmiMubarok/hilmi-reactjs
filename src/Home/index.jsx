import React from "react";

import Avatar from "./Avatar";
import Card from "./Card";

class Home extends React.Component {
    
    state = {
        value : 0
    }

    backgrounds = [
        "bg-white", "bg-red-600", "bg-emerald-600", "bg-orange-600",
        "bg-amber-600", "bg-yellow-600", "bg-lime-600", "bg-green-600",
    ]

    randomize = () => {
        this.setState({
            value : this.backgrounds[this.random()]
        })
    }

    random = () => Math.floor(Math.random() * this.backgrounds.length)
    

    render () {

        return (
            <div className="bg-gray-900 text-white w-full h-screen flex items-center flex-col justify-center">
            
                <Avatar/>

                <div className="container mt-[100px]">
                    <div className="flex justify-between">
                        <div className="p-3 text-white text-xl">Materi</div>
                        <button className="p-2 rounded bg-red-900 text-white" onClick={this.randomize}>
                            Randomize bg card
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 mt-5">

                        <Card number="1" bg={this.backgrounds[this.random()]} title="Basic Components" />

                        <Card number="2" bg={this.backgrounds[this.random()]} title="Styling Components" />

                        <Card number="3" bg={this.backgrounds[this.random()]} title="Reusable Components" />

                        <Card number="4" bg={this.backgrounds[this.random()]} title="Rendering Variable" />

                        <Card number="5" bg={this.backgrounds[this.random()]} title="Form and Validation" />

                        <Card number="6" bg={this.backgrounds[this.random()]} title="Lifecycle Components" />
                    </div>
                </div>

            </div>
        )

    }


}

export default Home