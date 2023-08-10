export function EmailInput({ placeholder, name, onChange, value = null }) {
  return (
    <div className="form-control">
      <label htmlFor="username" className="label font-semibold text-base">
        {placeholder}
      </label>
      <input
        type="email"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="input input-bordered"
        autoComplete="off"
      />
    </div>
  );
}
