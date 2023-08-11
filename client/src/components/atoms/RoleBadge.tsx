import roles from "../../assets/roles.json";

export function RoleBadge({ data }) {
  const roleColors = {
    ADMIN: "bg-stone-600",
    TEACHER: "bg-orange-700",
    USER: "bg-rose-900",
  };
  return (
    <span
      className={`badge badge-ghost badge-lg relative ml-2 self-center p-3 ${
        roleColors[data?.user.role]
      }`}
    >
      {roles[data?.user?.role]}
    </span>
  );
}
