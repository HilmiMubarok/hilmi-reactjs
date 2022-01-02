import React from "react";

export default class Card extends React.Component {


    render() {
        return (
            <div className="font-bold w-full border border-white rounded rounded-lg shadow-lg p-[20px] bg-white text-gray-900 flex flex-col items-center">
                <p className="text-6xl">{this.props.number}</p>
                <p className="text-xl">{this.props.title}</p>
            </div>
        )
    }

}