import React from "react";
import * as Icon from "react-icons/fi";

interface WindowIconProps {
  icon: keyof typeof Icon;
  onClick: () => void;
  className?: string;
}

const WindowIcon = ({
  icon,
  onClick,
  className,
}: WindowIconProps) => {
  const IconComponent = Icon?.[icon as keyof typeof Icon];
  if (!IconComponent) {
    // Fallback if the icon doesn't exist
    return <span>Icon not found </span>;
  }
  return (
    <div
      className={`p-1 flex items-center cursor-pointer justify-center rounded-full ${className}`}
      onClick={onClick}
    >
      <IconComponent
        size={12}
        style={ { stroke: "inherit", strokeWidth: 3 }}
       />
    </div>
  );
};

export default WindowIcon;
