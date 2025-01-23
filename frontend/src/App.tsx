import { useState } from "react";
import logo from "./assets/images/logo-universal.png";
import SideBar from "./sections/SideBar";
import Header from "./sections/Header";
import { Route, Routes } from "react-router";
import Overview from "./sections/Overview";

function App() {
  return (
    <div id="App" className="shadow-black shadow-2xl">
      <Header />
      <div className="flex">
        <SideBar />
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/downloading" element={<div>Downloading</div>} />
          <Route path="/seeding" element={<div>Seeding </div>} />
          <Route path="/completed" element={<div>Completed</div>} />
          <Route path="/settings" element={<div>Settings</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
