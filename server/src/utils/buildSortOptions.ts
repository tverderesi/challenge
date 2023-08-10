/**
 * @description Builds the sorting options object based on the provided arguments
 * @param sorting The sorting options object
 * @param field The field to be used in the sorting
 * @param order The order to be used in the sorting
 * @returns {Object} - The sorting options object
 */
export const buildSortOptions = (sortField: string, order: string) => {
  const sort: any = {};

  sort[sortField] = order === "ASC" ? 1 : -1;

  return sort;
};
