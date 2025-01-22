import React, { useEffect } from "react";
import WindowIcon from "./WindowIcon";
import { EventsOn, LogPrint } from '../../wailsjs/runtime/runtime.js';

import { Minimize, Maximize, Close, GetIsMaximized } from "../../wailsjs/go/main/App";

const WindowAction: React.FC = () => {
  const [isMaximized, setIsMaximized] = React.useState(false);

  useEffect(() => {
    GetIsMaximized().then((res) => {
      setIsMaximized(res);
    });
  }, []);

  return (
    <div className="flex justify-evenly gap-2 min-w-20">
      <WindowIcon
        icon="FiMinus"
        className="bg-green-400 stroke-white"
        onClick={() => Minimize()}
      />
      <WindowIcon
        icon={isMaximized ? "FiMinimize2" : "FiMaximize2"}
        className="bg-orange-400 stroke-white"
        onClick={() => { Maximize(); setIsMaximized(!isMaximized) }}
      />
      <WindowIcon
        icon="FiX"
        className="bg-red-500 stroke-white"
        onClick={() => Close()}
      />
    </div>
  );
};

export default WindowAction;
