import React from "react";
import IndicatorItem from "./IndicatorItem";
import { ReactComponent as RedArrow } from "../../assets/svgs/red-arrow.svg";
import { ReactComponent as GreenArrow } from "../../assets/svgs/green-arrow.svg";
import { ReactComponent as GreyArrow } from "../../assets/svgs/grey-arrow.svg";

const Indicators = () => {
  const data = [
    {
      title: "Total API calls",
      number: "182",
      sub: "Last 30 days",
      change: "23",
      tick: <GreenArrow />,
    },
    {
      title: "Successful calls",
      number: "109",
      sub: "Last 30 days",
      change: "17",
      tick: <GreenArrow />,
    },
    {
      title: "Total customers",
      number: "86",
      sub: "Last 30 days",
      change: "8",
      tick: <RedArrow />,
    },
    {
      title: "Cost incurred",
      number: "$808.57",
      sub: "Last 30 days",
      change: "0",
      tick: <GreyArrow />,
    },
  ];
  return (
      <div class="grid grid-cols-4 gap-4 mt-10">
        {data.map((ele, i) => {
          return <IndicatorItem item={ele} key={i} />;
        })}
      </div>
  );
};

export default Indicators;
