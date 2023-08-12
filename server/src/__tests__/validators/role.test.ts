import { validateRole } from "../../validators/role";

describe("validateRole function", () => {
  it("should return an empty array for a valid role", async () => {
    const validRoles = ["ADMIN", "STUDENT", "TEACHER"];

    for (const role of validRoles) {
      const errors = await validateRole(role);
      expect(errors).toEqual([]);
    }
  });

  it("should return an error for an invalid role", async () => {
    const invalidRole = "INVALID_ROLE";
    const errors = await validateRole(invalidRole);
    expect(errors).toContain(
      "Tipo de usuário inválido! O tipo de Usuário deve ser 'ADMIN', 'STUDENT' ou 'TEACHER'"
    );
  });
});
