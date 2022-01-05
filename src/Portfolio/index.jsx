import React, { Suspense } from "react";
import Client from "../Client";
import Contact from "../Contact";
import Work from "./work";
const Header = React.lazy(() => import('./header'))

export default class Portfolio extends React.Component {

    render() {
        return (
            <div className="bg-gradient-to-bl from-indigo-500 to-indigo-900 text-white w-full  flex flex-col justify-center">
                <div className="container mx-auto">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Header />
                    </Suspense>
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
                <div className=" bg-gradient-to-tl from-indigo-500 to-indigo-900">
                    <div className="container mx-auto">
                        <Contact />
                    </div>
                </div>
                <div className="p-3 text-center">
                    Copyright 2022 &copy; Created By Hilmi Mubarok
                </div>
            </div>

        )
    }

}