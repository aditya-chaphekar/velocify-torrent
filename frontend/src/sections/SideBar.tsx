import React from "react";
import * as Icon from "react-icons/tb";
import { NavLink } from "react-router";

const list = [
  {
    id: 1,
    title: "Overview",
    icon: Icon.TbBrandGoogleHome,
    link: "/",
    count: 5,
  },
  {
    id: 2,
    title: "Downloading",
    icon: Icon.TbDownload,
    link: "/downloading",
    count: 3,
  },
  {
    id: 3,
    title: "Seeding",
    icon: Icon.TbUpload,
    link: "/seeding",
    count: 2,
  },
  {
    id: 4,
    title: "Completed",
    icon: Icon.TbFolder,
    link: "/completed",
    count: 17,
  },

]


const SideBar: React.FC = () => {
  return (
    <div
      id="SideBar"
      className="w-1/5 p-5"
      style={{
        height: "calc(100vh - 3rem - 2.5rem)",
      }}
    >
      <div className="uppercase text-sm text-gray-200">
        overview
      </div>
      <div className="h-1 bg-gray-200 w-1/2 my-3"></div>
      <div className="flex h-full flex-col justify-between">
        <div>
          {list.map((item) => (
            <NavLink
              to={item.link}
              key={item.id}
              className="flex justify-evenly items-center p-2 my-2 text-xl rounded-lg cursor-pointer hover:bg-[#1f1f1f]"
            >
              <item.icon size={20} />
              <div className="ml-3 flex-1">
                {item.title}
              </div>
              {item.count && (
                <div className="count text-gray-500 float-right">
                  {item.count}
                </div>
              )}
            </NavLink>
          ))}
        </div>
        <NavLink to="/settings"
          className="flex items-center p-2 my-2 text-xl rounded-lg cursor-pointer hover:bg-[#1f1f1f]">
          <Icon.TbSettings size={20} />
          <div className="ml-3">
            Settings
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
