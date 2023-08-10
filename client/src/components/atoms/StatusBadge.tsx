export function StatusBadge({ data }) {
  return (
    <span
      className={`badge badge-lg relative ml-2 self-center p-3 ${
        !data?.user?.deletedAt ? "badge-success" : "badge-error"
      }`}
    >
      {!data?.user?.deletedAt ? "Ativo" : "Inativo"}
    </span>
  );
}
