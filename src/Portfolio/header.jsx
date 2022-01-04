import React from "react";
import me from "../images/me.JPG"

export default class Header extends React.Component {
    render() {
        return (
            <div className="flex flex-col-reverse xl:flex-row justify-between items-center">
                <div className="flex flex-col items-center xl:items-stretch">
                    <p className="text-4xl font-bold">
                        Hi, I'm Hilmi Mubarok
                    </p>
                    <p className="mt-3">
                        I'm Web Developer From Indonesia
                    </p>
                    <p className="mt-16 font-bold text-4xl xl:text-6xl text-center xl:text-left">
                        Let's Work Together and <br /> Build Some Beautiful Project
                    </p>

                    <a href="https://wa.me/6283127903672" rel="noreferrer" target="_blank" className="block text-center p-4 w-full xl:w-[200px] bg-gradient-to-r from-orange-600 to-amber-600 hover:bg-gradient-to-l hover:from-orange-500 hover:to-amber-500  rounded-lg xl:rounded-xl mt-12 text-xl font-bold">
                        Let's Talk
                    </a>
                </div>
                <img src={me} alt="Man" className=" w-[300px] h-[300px] my-10 xl:mb-0 rounded-full border-4 xl:w-[450px] xl:h-[700px]  object-cover xl:rounded-[100px] p-2 border-none bg-gradient-to-tl from-purple-600 to-amber-600 lg:shadow-2xl" />
            </div>
        )
    }
}