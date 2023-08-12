import { applyRegexFilter } from "../../utils/applyRegexFilter";

describe("applyRegexFilter function", () => {
  it("should apply a regex filter to the query object", () => {
    const query = {};
    const field = "username";
    const value = "username";

    const result = applyRegexFilter(query, field, value);

    expect(result).toEqual({
      username: {
        $regex: "username",
        $options: "i",
      },
    });
  });

  it("should not modify the query object if value is falsy", () => {
    const query = {};
    const field = "";
    const value = null; // Falsy value

    const result = applyRegexFilter(query, field, value);

    expect(result).toEqual({});
  });
});
