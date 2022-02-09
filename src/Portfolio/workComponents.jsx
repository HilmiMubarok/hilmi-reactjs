import React from "react";

export default class WorkComponents extends React.Component {
  render() {
    return (
      <div className="rounded-xl p-2 transition-all hover:-rotate-3 hover:scale-110">
        <img
          src={this.props.url}
          alt="work"
          className="h-[400px] w-full rounded-xl object-cover shadow-xl"
        />
      </div>
    );
  }
}
