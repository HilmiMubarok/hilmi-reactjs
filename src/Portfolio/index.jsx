import React from "react";
import Client from "../Client";
import Header from "./header";
import Work from "./work";

export default class Portfolio extends React.Component {

    render() {
        return (
            <div className="bg-gradient-to-bl from-indigo-500 to-indigo-900 text-white w-full  flex flex-col justify-center">
                <div className="container mx-auto">
                    <Header />
                </div>
                <div className="mt-16 bg-gradient-to-tl from-indigo-500 to-indigo-900">
                    <div className="container mx-auto">
                        <Work />
                    </div>
                </div>
                <div className=" bg-gradient-to-tl from-indigo-500 to-indigo-900">
                    <div className="container mx-auto">
                        <Client />
                    </div>
                </div>
            </div>

        )
    }

}