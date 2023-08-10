/**
 * @description Applies a regex filter to the query object
 * @param query The query object
 * @param field The field to be used in the regex filter
 * @param value The value to be used in the regex filter
 * @returns {Object} - The query object
 */
export const applyRegexFilter = (query: any, field: string, value: string) => {
  if (value) {
    query[field] = { $regex: value, $options: "i" };
  }
  return query;
};
