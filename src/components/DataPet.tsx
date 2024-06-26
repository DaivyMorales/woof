interface DataPetProps {
  question: string;
  placeholder: string;
  inputType: "text" | "number" | "checkbox";
  type?: string | number | boolean;
  buttonText: string;
}

function DataPet({
  question,
  placeholder,
  inputType,
  type,
  buttonText,
}: DataPetProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <h3>{question}</h3>
      <div className="rounded-lg border-[1px] border-neutral-300 p-2 text-sm shadow-inner shadow-sm">
        {inputType === "text" && (
          <input
            type="text"
            className="font-normal placeholder:text-neutral-400"
            placeholder={placeholder}
          />
        )}
        {inputType === "number" && (
          <input
            type="number"
            className="font-normal placeholder:text-neutral-400"
            placeholder={placeholder}
          />
        )}
      </div>
      <button className="w-[180px] rounded-lg bg-blue-600 py-2 text-sm font-medium text-white shadow-inner shadow-sm">
        {buttonText}
      </button>
    </div>
  );
}

export default DataPet;
