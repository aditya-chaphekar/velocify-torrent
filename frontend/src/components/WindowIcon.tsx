import React from "react";
import * as Icon from "react-icons/fi";

interface WindowIconProps {
  icon: keyof typeof Icon;
  onClick: () => void;
  className?: string;
}

const WindowIcon: React.FC<WindowIconProps> = ({
  icon,
  onClick,
  className,
}) => {
  return (
    <div
      className={`p-1 flex items-center cursor-pointer justify-center rounded-full ${className}`}
      onClick={onClick}
    >
      {React.createElement(Icon[icon], {
        size: 12,
        style: { stroke: "inherit", strokeWidth: 3 },
      })}
    </div>
  );
};

export default WindowIcon;
