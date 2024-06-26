import { useState } from "react";

interface DataPetProps {
  question: string | undefined;
  placeholder: string | undefined;
  inputType: string | "text" | "number" | "option" | undefined;
  option?: {
    optionOne: string;
    optionTwo: string;
  };
  type?: string | number | boolean;
  buttonText: string;
  onButtonClick: () => void;
  measurement?: string;
}

function DataPet({
  question,
  placeholder,
  inputType,
  type,
  buttonText,
  onButtonClick,
  measurement,
  option,
}: DataPetProps) {

  const [optionSelected, setOptionSelected] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <h3>{question}</h3>
      {inputType === "text" && (
        <div className="inputDataPet flex rounded-lg border-[1px] border-neutral-300 p-2 text-sm shadow-inner shadow-sm">
          <input
            type="text"
            className=" font-normal placeholder:text-neutral-400"
            placeholder={placeholder}
          />
        </div>
      )}
      {inputType === "number" && (
        <div className="inputDataPet flex w-[100px] rounded-lg border-[1px] border-neutral-300 text-sm shadow-inner shadow-sm">
          <input
            type="number"
            className="p-2 font-normal placeholder:text-neutral-400"
            placeholder={placeholder}
          />
          <div className="rounded-r-lg bg-neutral-100 px-2 py-2 font-medium">
            {measurement}
          </div>
        </div>
      )}
      {inputType === "option" && (
        <div className="flex gap-3">
          <label onClick={() => setOptionSelected(1)} className={`${optionSelected === 1 ? "text-blue-500 border-blue-300" : "text-neutral-500"} text-xs cursor-pointer rounded-lg border-[1px] p-3 font-medium`}>
            <input
              className="hidden"
              type="radio"
              name="dogGenre"
              id={option?.optionOne}
            />
            {option?.optionOne}
          </label>
          <label onClick={() => setOptionSelected(2)} className={`${optionSelected === 2 ? "text-blue-500 border-blue-300" : "text-neutral-500"} text-xs cursor-pointer rounded-lg border-[1px] p-3 font-medium`}>
            <input
              className="hidden"
              type="radio"
              name="dogGenre"
              id={option?.optionTwo}
            />
            {option?.optionTwo}
          </label>
        </div>
      )}
      <button
        onClick={() => onButtonClick()}
        className="w-[180px] rounded-lg bg-blue-600 py-2  text-sm font-medium text-white shadow-inner shadow-sm"
      >
        {buttonText}
      </button>
    </div>
  );
}

export default DataPet;
