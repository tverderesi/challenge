import { fakerPT_BR as faker } from "@faker-js/faker";
import { generateRandomValidCPF } from "./generateRandomValidCPF";
import { generateRandomRole } from "./generateRandomRole";

export function generateFakeData() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  // fixed password for all fake users
  const password = "Passw0rd!";
  const fullName = `${firstName} ${lastName}`;
  const fakeData = {
    confirmPassword: password,
    cpf: generateRandomValidCPF(),
    email: faker.internet.email({
      firstName: firstName,
      lastName: lastName,
    }),
    fullName: fullName,
    password: password,
    role: generateRandomRole(),
    username: faker.internet.userName({
      firstName: firstName,
      lastName: lastName,
    }),
  };
  return fakeData;
}
