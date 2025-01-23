import React from "react";
import { TbCheck, TbDownload, TbUpload } from "react-icons/tb";
import ListHeader from "../components/ListHeader";
import ProgressBar from "../components/ProgressBar";

const list = [
  {
    id: 1,
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    progress: 50,
    size: "2.5 GB",
    timeLeft: "1h 30m",
    seeders: 10,
    peers: 20,
    isDownloading: true,
    isSeeding: false,
    isCompleted: false,
  }, {
    id: 2,
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    progress: 100,
    size: "2.5 GB",
    timeLeft: "1h 30m",
    seeders: 10,
    peers: 20,
    isDownloading: false,
    isSeeding: true,
    isCompleted: false,
  },
];


const Overview: React.FC = () => {
  return (
    <div className="p-5 w-full">
      <ListHeader headerConfig={[
        { name: "Name", width: "1/2", align: "left" },
        { name: "Progress", width: "1/5", align: "left" },
        { name: "Size", width: "1/5", align: "center" },
        { name: "Time Left", width: "1/5", align: "center" },
        { name: "Seeders", width: "1/5", align: "center" },
        { name: "Peers", width: "1/5", align: "center" },
      ]} />
      <div className="h-1 bg-gray-200 w-full my-3"></div>
      <div className="flex flex-col gap-1">
        {list.map((item) => (
          <div key={item.id} className="flex justify-evenly items-center p-2 my-2 text-xl rounded-lg cursor-pointer bg-[rgba(31,31,31,0.5)]">
            <div className="w-2/6  text-gray-200 flex items-center ">
              <div className="mr-2">
                {item.isSeeding && <TbUpload size={20} />}
                {item.isDownloading && <TbDownload size={20} />}
                {item.isCompleted && <TbCheck size={20} />}
              </div>
              <div className="w-[80%] truncate">
                {item.name}
              </div>
            </div>
            <div className="w-1/5 px-2  text-gray-200"><ProgressBar color="bg-blue-400" progress={item.progress} total={100} /></div>
            <div className="w-1/5  text-center text-gray-200">{item.size}</div>
            <div className="w-1/5  text-center text-gray-200">{item.timeLeft}</div>
            <div className="w-1/5   text-center text-gray-200">{item.seeders}</div>
            <div className="w-1/5   text-center text-gray-200">{item.peers}</div>
          </div>
        ))}
      </div>
    </div >
  );
}



export default Overview;
