import DataPet from "@/components/DataPet";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

function index() {
  const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];

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

      <DataPet
        question="¿Cuál es el nombre de tu perro?"
        placeholder="Max"
        inputType="text"
        buttonText="Siguiente"
      />

      <DataPet
        question="¿Cuál es el peso de tu perro en kg?"
        placeholder="30"
        inputType="number"
        buttonText="Siguiente"
      />

      <DataPet
        question="¿Cuál es la raza de tu perro?"
        placeholder="Golden Retriever"
        inputType="text"
        buttonText="Siguiente"
      />

      <DataPet
        question="¿Qué sexo es tu perro?"
        placeholder="Masculino"
        inputType="text"
        buttonText="Siguiente"
      />

      <DataPet
        question="¿Cuantos años tiene tu perro?"
        placeholder="8 years old"
        inputType="number"
        buttonText="Siguiente"
      />

      <DataPet
        question="¿Tu perro ha sido vacunado alguna vez?"
        placeholder="8 years old"
        inputType="text"
        buttonText="Siguiente"
      />
    </div>
  );
}

export default index;
