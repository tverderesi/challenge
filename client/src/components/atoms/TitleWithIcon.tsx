export const TitleWithIcon = ({ name, icon }) => (
  <h2 className="text-2xl font-semibold card-title">
    <span className="material-symbols-outlined symbols-filled text-2xl">
      {icon}
    </span>
    {name}
  </h2>
);
