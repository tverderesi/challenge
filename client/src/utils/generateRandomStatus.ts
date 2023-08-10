export const generateRandomStatus = () => {
  const status = ["ACTIVE", "INACTIVE"];
  return status[Math.floor(Math.random() * status.length)];
};
