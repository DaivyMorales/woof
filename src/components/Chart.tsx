import React from "react";
import { Card } from "@tremor/react";
import { AreaChartHero } from "./AreaChartHero";
import { AreaChartHero2 } from "./AreaChartHero2";

const Chart = () => {
  return (
    <div className="flex gap-5 w-[1000px]">
       
      <Card className=" w-[550px] border-[0px]">
        <div className="px-5">
          <h4 className="text-lg font-bold">Litro de agua</h4>
          <h1 className="text-4xl font-medium text-neutral-800">2L</h1>
        </div>
        <AreaChartHero />
      </Card>
      <Card className=" w-[550px] border-[0px]">
        <div className="px-5">
          <h4 className="text-lg font-bold">Gramos de comida</h4>
          <h1 className="text-4xl font-medium text-neutral-800">110g</h1>
        </div>
        <AreaChartHero2 />
      </Card>
    </div>
  );
};

export default Chart;
