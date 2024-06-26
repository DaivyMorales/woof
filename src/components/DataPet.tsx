import {useState} from "react";

interface DataPetProps {
  name: string;
  question: string | undefined;
  placeholder?: string;
  inputType: string |"text" | "number" | "option" | undefined;
  option?: {
    optionOne: string;
    optionTwo: string;
  };
  buttonText: string;
  onButtonClick: () => void;
  measurement?: string;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}

function DataPet({
  name,
  question,
  placeholder,
  inputType,
  buttonText,
  onButtonClick,
  measurement,
  option,
  setFieldValue,
}: DataPetProps) {
  const [optionSelected, setOptionSelected] = useState("");

  const handleOptionSelect = (value: string) => {
    setFieldValue(name, value);
    setOptionSelected(value);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <h3>{question}</h3>
      {inputType === "text" && (
        <div className="inputDataPet flex rounded-lg border-[1px] border-neutral-300 p-2 text-sm shadow-inner shadow-sm">
          <input
            name={name}
            type="text"
            className="font-normal placeholder:text-neutral-400"
            placeholder={placeholder}
            onChange={(e) => {
              setFieldValue(name, e.target.value);
            }}
          />
        </div>
      )}
      {inputType === "number" && (
        <div className="inputDataPet flex w-[100px] rounded-lg border-[1px] border-neutral-300 text-sm shadow-inner shadow-sm">
          <input
            name={name}
            type="number"
            className="p-2 font-normal placeholder:text-neutral-400"
            placeholder={placeholder}
            onChange={(e) => {
              setFieldValue(name, parseInt(e.target.value));
            }}
          />
          <div className="rounded-r-lg bg-neutral-100 px-2 py-2 font-medium">
            {measurement}
          </div>
        </div>
      )}
      {inputType === "option" && option &&(
        <div className="flex gap-3">
          <label
            onClick={() => handleOptionSelect(option.optionOne)}
            className={`${
              optionSelected === option?.optionOne ? "border-blue-300 text-blue-500" : "text-neutral-500"
            } cursor-pointer rounded-lg border-[1px] p-3 text-xs font-medium`}
          >
            <input
              type="radio"
              name={name}
              className="hidden"
              value={option?.optionOne}
              checked={optionSelected === option?.optionOne}
              onChange={() => {}}
            />
            {option?.optionOne}
          </label>
          <label
            onClick={() => handleOptionSelect(option.optionTwo)}
            className={`${
              optionSelected === option?.optionTwo ? "border-blue-300 text-blue-500" : "text-neutral-500"
            } cursor-pointer rounded-lg border-[1px] p-3 text-xs font-medium`}
          >
            <input
              type="radio"
              name={name}
              className="hidden"
              value={option?.optionTwo}
              checked={optionSelected === option?.optionTwo}
              onChange={() => {}}
            />
            {option?.optionTwo}
          </label>
        </div>
      )}
      <button
        onClick={onButtonClick}
        className="w-[180px] rounded-lg bg-blue-600 py-2 text-sm font-medium text-white shadow-inner shadow-sm"
      >
        {buttonText}
      </button>
    </div>
  );
}

export default DataPet;