export function Select({
  name,
  options,
  onChange,
  label,
  defaultValue = label,
}) {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label font-semibold text-base">
        {label}
      </label>
      <select
        name={name}
        className="select select-bordered"
        onChange={onChange}
        defaultValue={defaultValue}
      >
        <option disabled>{label}</option>
        {Object.keys(options).map((option) => {
          return (
            <option value={option} className="capitalize" key={options[option]}>
              {options[option]}
            </option>
          );
        })}
      </select>
    </div>
  );
}
