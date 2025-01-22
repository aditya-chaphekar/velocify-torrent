import React from "react";
import WindowAction from "../components/WindowAction";
import logo from "../assets/images/logo.png";

const Header: React.FC = () => {
  return (
    <div
      id="Header"
      style={{
        "--wails-draggable": "drag"
      } as any}
      className="text-white h-12 flex justify-between shadow-md items-center px-5"
    >
      <div className="search min-w-20">
        <img
          src={logo}
          alt="Velocify"
          className="h-8"
        />
      </div>
      <div className="uppercase font-bold flex-1 font-sans text-center">
        Velocify
      </div>

      <WindowAction />
    </div >
  );
};

export default Header;
