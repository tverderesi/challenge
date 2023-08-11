export const generateRandomRole = () => {
  const roles = ["ADMIN", "TEACHER", "STUDENT"];
  return roles[Math.floor(Math.random() * roles.length)];
};
