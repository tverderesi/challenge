export const formatDate = (date: string) => {
  const stringDate = new Date(Number(date));
  return stringDate.toLocaleDateString();
};
