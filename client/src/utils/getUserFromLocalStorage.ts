import { JWTPayload, decodeJwt } from "jose";

type ILocalStorageType = {
  id: string;
  fullName: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
};

/**
 * @description Returns the user data from the local storage.
 * @param {string} item - The item to get from the local storage.
 * @returns {object} The user data from the local storage.
 * @example <caption>Example usage of getLocalStorage function.</caption>
 * getLocalStorage("user"); // { id: "123", fullName: "John Doe", email: "john@doe", role: "admin", iat: 123, exp: 123 }
 */

export const getUserFromLocalStorage = (item: string): ILocalStorageType => {
  const jwt = localStorage.getItem(item);

  const user: JWTPayload = jwt ? decodeJwt(jwt) : {};

  return {
    id: user.sub as string,
    fullName: user.fullName as string,
    email: user.email as string,
    role: user.role as string,
    iat: user.iat as number,
    exp: user.exp as number,
  };
};
