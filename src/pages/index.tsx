import DataPet from "@/components/DataPet";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { useState } from "react";
import { useFormik } from "formik";

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
      <form onSubmit={formik.handleSubmit}>
        <DataPet
          name={questions[step]?.name ?? ""}
          question={questions[step]?.question}
          placeholder={questions[step]?.placeholder}
          inputType={questions[step]?.inputType}
          buttonText="Siguiente"
          onButtonClick={handleNext}
          option={questions[step]?.option}
          measurement={questions[step]?.measurement}
          setFieldValue={formik.setFieldValue}
        />
        {/* <button type="submit">Submit</button> */}
      </form>
    </div>
  );
}

export default index;
