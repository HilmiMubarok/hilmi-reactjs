import React from "react";
import me from "../images/me.JPG";

export default class Header extends React.Component {
  render() {
    return (
      <div className="flex flex-col-reverse items-center justify-between xl:flex-row">
        <div className="flex flex-col items-center xl:items-stretch">
          <p className="text-4xl font-bold">Hi, I'm Hilmi Mubarok</p>
          <p className="mt-3">I'm Web Developer From Indonesia</p>
          <p className="mt-16 text-center text-4xl font-bold xl:text-left xl:text-6xl">
            Let's Work Together and <br /> Build Some Beautiful Project
          </p>

          <a
            href="https://wa.me/6283127903672"
            rel="noreferrer"
            target="_blank"
            className="mt-12 block w-full rounded-lg bg-gradient-to-r from-orange-600 to-amber-600 p-4 text-center text-xl font-bold  hover:bg-gradient-to-l hover:from-orange-500 hover:to-amber-500 xl:w-[200px] xl:rounded-xl"
          >
            Let's Talk
          </a>
        </div>
        <img
          src={me}
          alt="Man"
          className=" my-10 h-[300px] w-[300px] rounded-full border-4 border-none bg-gradient-to-tl from-purple-600  to-amber-600 object-cover p-2 lg:shadow-2xl xl:mb-0 xl:h-[700px] xl:w-[450px] xl:rounded-[100px]"
        />
      </div>
    );
  }
}
