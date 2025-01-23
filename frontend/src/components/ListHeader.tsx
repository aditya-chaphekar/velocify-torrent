import React from "react";

interface ListHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  headerConfig: {
    name: string,
    width: string,
    align: string
  }[];
}


const ListHeader: React.FC<ListHeaderProps> = ({ headerConfig, ...rest }) => {
  return (
    <div
      id="ListHeader"
      {...rest}
      className={`flex w-full uppercase ${rest.className}`}
    >
      {
        headerConfig.map((item, index) => (
          <div
            key={index}
            className={`w-${item.width} text-${item.align} text-sm text-gray-200`}
          >
            {item.name}
          </div>
        ))
      }
    </div >
  );
}

export default ListHeader;
