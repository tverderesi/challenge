// Object mapping of mask functions
export const maskFunctions = {
  maskCPF: (value) => {
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  },
  getRoleName: (role) => {
    const roles = {
      ADMIN: "Administrador",
      INSTRUCTOR: "Instrutor",
      USER: "Estudante",
    };
    return roles[role];
  },
};
