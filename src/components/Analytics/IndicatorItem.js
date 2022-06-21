import React from "react";
import "./styles.css";
import { Tooltip } from "flowbite-react";
import { ReactComponent as Info } from "../../assets/svgs/info.svg";

const IndicatorItem = ({ item }) => {
  return (
    <div>
      <div className="flex items-center">
        <p className="indicator-title">{item.title}</p>
        <Tooltip content={item.title} style="light">
          <Info className="cursor-pointer ml-4" />
        </Tooltip>
      </div>
      <p className="indicator-number">{item.number}</p>
      <div className="flex items-center">
        <div className="flex items-center">
          <span>{item.tick}</span>
          <span className=" ml-2">{item.change}%</span>
        </div>
        <div className="indicator-sub-text ml-2">{item.sub}</div>
      </div>
    </div>
  );
};

export default IndicatorItem;
