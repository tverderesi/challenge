export function TextInput({
  placeholder,
  name,
  onChange,
  label,
  disabled = false,
}) {
  return (
    <div className="form-control">
      <label
        htmlFor={name}
        className="label font-semibold text-base capitalize"
      >
        {label}
      </label>

      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="input input-bordered"
        autoComplete="off"
        disabled={disabled}
      />
    </div>
  );
}
