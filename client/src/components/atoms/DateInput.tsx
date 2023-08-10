import { useState } from "react";
export function DateInput({ onChange, placeholder, name }) {
  const [valid, setValid] = useState(true);
  const handleChange = (e) => {
    const { value } = e.target;
    const date = new Date(value);
    const now = new Date(Date.now());

    setValid(date <= now);

    onChange(e);
  };

  return (
    <div
      className={`tooltip w-full tooltip-error tooltip-bottom ${
        !valid ? "tooltip-open" : "hover:before:opacity-0 hover:after:opacity-0"
      } font-semibold`}
      data-tip="Insira uma data válida."
    >
      <div className="form-control">
        <label htmlFor="" className="label text-base">
          {placeholder}
        </label>
        <input
          type="date"
          name={name}
          onChange={handleChange}
          className="input text-sm"
          onBlur={(e) => setValid(true)}
        />
      </div>
    </div>
  );
}
