import { decodeJwt } from "jose";

/**
 * @description This hook is responsible for verifying if the JWT token is valid and not expired.
 * @returns {Boolean} - A boolean indicating if the JWT token is valid or not.
 * @example
 * const valid = useVerifyLocalStorage();
 * if (!valid) {
 * // Do something
 * }
 * @see decodeJwt from jose library.
 */

export const verifyJWT = () => {
  const jwt = localStorage?.getItem("token");

  if (!jwt || jwt === "undefined") {
    return false;
  }
  const { exp } = decodeJwt(jwt);
  if (exp) {
    const valid = exp ? exp * 1000 > Date.now() : false;
    if (!valid) {
      localStorage.removeItem("token");
      return false;
    }
  }

  return true;
};
