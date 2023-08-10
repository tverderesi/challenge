export function PasswordInput({ placeholder, name, onChange }) {
  return (
    <div className="form-control">
      <label htmlFor="username" className="label font-semibold text-base">
        {placeholder}
      </label>
      <input
        type="password"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="input input-bordered"
        autoComplete="off"
      />
    </div>
  );
}
