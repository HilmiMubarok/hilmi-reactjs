import React from "react";

export default class ClientComponents extends React.Component {
  render() {
    return (
      <div className="flex w-full flex-wrap justify-center rounded-xl border p-16 hover:bg-indigo-800 lg:flex-nowrap lg:justify-start lg:space-x-32 lg:px-32 lg:py-20">
        <div className="mb-6 lg:mb-0 ">{this.props.logo}</div>

        <div className="flex flex-wrap justify-center text-center lg:block lg:text-left">
          <h3 className="text-3xl font-semibold text-white">
            {this.props.company}
          </h3>

          <div className="mt-6 mb-8 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
            <div className="rounded-xl bg-gray-500 p-2">
              {this.props.position}
            </div>
          </div>

          <p className="text-secondary">
            I’ve had the pleasure of working with multiple Fortune 500
            companies, designing and implementing both frontend and backend.
          </p>
        </div>
      </div>
    );
  }
}
