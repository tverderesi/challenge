import { buildSortOptions } from "../../utils/buildSortOptions";

describe("buildSortOptions function", () => {
  it("should build the sorting options object in ascending order", () => {
    const sortField = "username";
    const order = "ASC";

    const result = buildSortOptions(sortField, order);

    expect(result).toEqual({
      username: 1,
    });
  });

  it("should build the sorting options object in descending order", () => {
    const sortField = "createdAt";
    const order = "DESC";

    const result = buildSortOptions(sortField, order);

    expect(result).toEqual({
      createdAt: -1,
    });
  });
});
