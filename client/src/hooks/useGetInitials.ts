/**
 * @description Returns the initials of a full name, if the full name has more than 2 names, it will return the first and last name initials.
 * @param {string} fullName - The full name to get the initials from.
 * @returns {string} The initials of the full name.
 * @example <caption>Example usage of useGetInitials hook.</caption>
 * useGetInitials("John Doe"); // "JD"
 * useGetInitials("John"); // "J"
 */

export function useGetInitials(fullName: string) {
  const names = fullName.split(" ");
  if (names.length <= 2) {
    return names.map((name) => name[0]).join("");
  } else {
    return `${names[0][0]}${names[names.length - 1][0]}`;
  }
}
