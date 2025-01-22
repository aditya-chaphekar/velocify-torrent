import { useState } from "react";
import logo from "./assets/images/logo-universal.png";
import SideBar from "./sections/SideBar";
import Header from "./sections/Header";

function App() {
  return (
    <div id="App" className="shadow-black shadow-2xl">
      <Header />
      <div className="flex">
        <SideBar />
        <div>Right side</div>
      </div>
    </div>
  );
}

export default App;
