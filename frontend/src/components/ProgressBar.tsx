import React from "react";

interface ProgressBarProps {
  progress: number;
  total: number;
  color?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, total, color }) => {
  const [width, setWidth] = React.useState(0);
  React.useEffect(() => {
    setWidth((progress / total) * 100);
  }, [progress, total]);
  return (
    <div className="w-full bg-inherit rounded-full h-2.5">
      <div className={`${color} h-2.5 rounded-full`} style={{ width: `${width}%` }}></div>
    </div>);
}

export default ProgressBar;
