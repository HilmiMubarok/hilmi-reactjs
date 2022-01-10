import React from "react";

export default class WorkComponents extends React.Component {


    render() {

        return (
            <div className="p-2 rounded-xl hover:scale-110 hover:-rotate-3 transition-all">
                <img src={this.props.url} title="work" className="rounded-xl shadow-xl object-cover w-full h-[400px]" />
            </div>
        )

    }

}