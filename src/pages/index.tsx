import DataPet from "@/components/DataPet";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { useState } from "react";
import { useFormik } from "formik";
import Chart from "@/components/Chart";
import { TiCalendar } from "react-icons/ti";
import { FaDog } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";

function index() {
  const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];

  const [step, setStep] = useState(0);

  const formik = useFormik({
    initialValues: {
      name: "",
      weight: 0,
      breed: "",
      genre: "",
      age: 0,
      isVacunned: "",
    },
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  const questions = [
    {
      name: "name",
      question: "¿Cuál es el nombre de tu perro?",
      placeholder: "Max",
      inputType: "text",
    },
    {
      name: "weight",
      question: "¿Cuál es el peso de tu perro en kg?",
      placeholder: "30",
      inputType: "number",
      measurement: "kg",
    },
    {
      name: "breed",
      question: "¿Cuál es la raza de tu perro?",
      placeholder: "Golden Retriever",
      inputType: "text",
    },
    {
      name: "genre",
      question: "¿Qué sexo es tu perro?",
      placeholder: "Masculino",
      inputType: "option",
      option: {
        optionOne: "Masculino",
        optionTwo: "Femenino",
      },
    },
    {
      name: "age",
      question: "¿Cuantos años tiene tu perro?",
      placeholder: "3",
      inputType: "number",
      measurement: "años",
    },
    {
      name: "isVacunned",
      question: "¿Tu perro ha sido vacunado alguna vez?",
      placeholder: "yes",
      inputType: "text",
    },
  ];

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      console.log("All question answered");
    }
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3">
      <div className="flex flex-col items-center justify-center gap-8 ">
        <div className="flex w-[1000px] justify-between ">
          <div>
            <h1 className="text-3xl font-bold">Hola, Daivy!</h1>
            <p className="text-sm font-normal text-neutral-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptas.
            </p>
          </div>

          <div className="flex items-center justify-center gap-2">
            <p className="text-sm font-medium"> 4 Jul, 2024</p>
            <div className="cursor-pointer rounded-lg bg-neutral-200 p-2">
              <TiCalendar size={20} />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-4 rounded-xl border-[1px] bg-white p-4 shadow-sm">
            <div className="flex gap-1 text-neutral-500">
              <TiStarFullOutline />
              <p className="text-[14px] font-medium "> Valoracion AI</p>
            </div>
            <p className="text-2xl font-medium text-neutral-800">70%</p>
            <span className="text-[14px] font-medium">
              <span className="text-green-500">+10%</span> que la semana pasada
            </span>
          </div>
          <div className="flex flex-col gap-4 rounded-xl border-[1px] bg-white p-4 shadow-sm">
            <div className="flex gap-1 text-neutral-500">
              <TiStarFullOutline />
              <p className="text-[14px] font-medium "> Valoracion AI</p>
            </div>
            <p className="text-2xl font-medium text-neutral-800">70%</p>
            <span className="text-[14px] font-medium">
              <span className="text-green-500">+10%</span> que la semana pasada
            </span>
          </div>
          <div className="flex flex-col gap-4 rounded-xl border-[1px] bg-white p-4 shadow-sm">
            <div className="flex gap-1 text-neutral-500">
              <TiStarFullOutline />
              <p className="text-[14px] font-medium "> Valoracion AI</p>
            </div>
            <p className="text-2xl font-medium text-neutral-800">70%</p>
            <span className="text-[14px] font-medium">
              <span className="text-green-500">+10%</span> que la semana pasada
            </span>
          </div>
          <div className="flex flex-col gap-4 rounded-xl border-[1px] bg-white p-4 shadow-sm">
            <div className="flex gap-1 text-neutral-500">
              <TiStarFullOutline />
              <p className="text-[14px] font-medium "> Valoracion AI</p>
            </div>
            <p className="text-2xl font-medium text-neutral-800">70%</p>
            <span className="text-[14px] font-medium">
              <span className="text-green-500">+10%</span> que la semana pasada
            </span>
          </div>
        </div>

        {/* <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart> */}
        {/* <form onSubmit={formik.handleSubmit}> */}
        {/* <DataPet
          name={questions[step]?.name ?? ""}
          question={questions[step]?.question}
          placeholder={questions[step]?.placeholder}
          inputType={questions[step]?.inputType}
          buttonText="Siguiente"
          onButtonClick={handleNext}
          option={questions[step]?.option}
          measurement={questions[step]?.measurement}
          setFieldValue={formik.setFieldValue}
        /> */}
        {/* <button type="submit">Submit</button> */}
        {/* </form> */}
        <Chart />
      </div>
    </div>
  );
}

export default index;
