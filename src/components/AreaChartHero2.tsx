import { AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "11:30",
    Comida: 500,
  },
  {
    date: "12:30",
    Comida: 100,
  },
  {
    date: "1:30",
    Comida: 10,
  },
  {
    date: "2:30",
    Comida: 0,
  },
  {
    date: "3:30",
    Comida: 0,
  },
  {
    date: "4:30",
    Comida: 0,
  },
  {
    date: "5:30",
    Comida: 500,
  },
  {
    date: "6:30",
    Comida: 230,
  },
  {
    date: "7:30",
    Comida: 200,
  },
  {
    date: "8:30",
    Comida: 200,
  },
  {
    date: "9:30",
    Comida: 110,
  },
  {
    date: "10:30",
    Comida: 110,
  },
];

const dataFormatter = (number: number) =>
  `${number}g`;

export function AreaChartHero2() {
  return (
    <AreaChart
      className="h-[200px] "
      data={chartdata}
      index="date"
      categories={["Comida"]}
      colors={["orange"]}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
      showAnimation={true}
      autoMinValue={true}
    />
  );
}
