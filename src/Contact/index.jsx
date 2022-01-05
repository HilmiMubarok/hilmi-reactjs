import React from "react";

export default class Contact extends React.Component {

    render() {
        return (
            <div className="flex flex-col px-16 py-16 xl:px-0">
                <div className="text-3xl font-bold">Hire Me</div>
                <div className="mb-8">Feel free to to contact me any time, through any method below.</div>
                <div className="grid grid-row gap-4">

                    <div>
                        <label htmlFor="name" className="text-xl">Name</label>
                        <input type="text" className="p-4 mt-4 bg-gray-900 text-white w-full rounded-lg" placeholder="Input your name" />
                    </div>

                    <div>
                        <label htmlFor="email" className="text-xl">Email</label>
                        <input type="email" className="p-4 mt-4 bg-gray-900 text-white w-full rounded-lg" placeholder="Input your email" />
                    </div>

                    <div>
                        <label htmlFor="msg" className="text-xl">Message</label>
                        <textarea rows="10" className="p-4 mt-4 bg-gray-900 text-white w-full rounded-lg" />
                    </div>

                    <button className="bg-gradient-to-r from-orange-600 to-amber-600 hover:bg-gradient-to-l hover:from-orange-500 hover:to-amber-500 p-3 w-full sm:w-[200px] rounded-lg">
                        Send to me
                    </button>

                </div>
            </div>
        )
    }

}