import { useState } from "react";
import { validateCPF } from "../../utils/validateCPF";

const CustomCPFInput = ({ onChange, name, value, placeholder }) => {
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const { value } = e.target;

    e.target.value = value.replace(
      /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
      "$1.$2.$3-$4"
    );

    validateCPF(value) ? setIsValid(true) : setIsValid(false);

    onChange(e);
  };

  return (
    <div
      className={`tooltip w-full tooltip-error tooltip-bottom ${
        !isValid
          ? "tooltip-open"
          : "hover:before:opacity-0 hover:after:opacity-0"
      } font-semibold h-auto relative top-0`}
      data-tip="Insira um CPF válido."
    >
      <div className="form-control ">
        <label className="label text-lg" htmlFor={name}>
          CPF
        </label>
        <input
          name={name}
          value={value}
          type="text"
          autoComplete="off"
          placeholder={placeholder}
          aria-placeholder="CPF"
          className={`input input-bordered w-full ${
            isValid ? "" : "input-error"
          }`}
          onChange={handleChange}
          onBlur={(e) => setIsValid(true)}
          pattern="^(\d{0,3}\.\d{0,3}\.\d{0,3}-\d{0,2}|\d{0,11})$"
          maxLength={14}
        />
      </div>
    </div>
  );
};

export default CustomCPFInput;
