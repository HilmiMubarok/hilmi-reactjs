import React from "react";

export default class ClientComponents extends React.Component {


    render() {
        return (
            <div className="w-full border rounded-xl hover:bg-indigo-800 p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">

                <div className="mb-6 lg:mb-0 ">
                    {this.props.logo}
                </div>

                <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
                    <h3 className="text-white text-3xl font-semibold">{this.props.company}</h3>

                    <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                        <div className="p-2 bg-gray-500 rounded-xl">{this.props.position}</div>
                    </div>

                    <p className="text-secondary">I’ve had the pleasure of working with multiple Fortune 500 companies, designing and implementing both frontend and backend.</p>
                </div>

            </div>
        )
    }


}