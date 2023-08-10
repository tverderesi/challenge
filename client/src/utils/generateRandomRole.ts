export const generateRandomRole = () => {
  const roles = ["ADMIN", "INSTRUCTOR", "USER"];
  return roles[Math.floor(Math.random() * roles.length)];
};
