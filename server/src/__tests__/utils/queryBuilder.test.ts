import { queryBuilder } from "../../utils/queryBuilder";
import { applyRegexFilter } from "../../utils/applyRegexFilter";

describe("queryBuilder function", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mock usage after each test
  });

  it("should build a query object with default values", () => {
    const queryUser = null; // No queryUser provided

    const result = queryBuilder({ queryUser: { queryUser } });

    // Validate that applyRegexFilter was not called
    expect(applyRegexFilter).not.toHaveBeenCalled();

    // Validate other aspects of the result as needed
    expect(result.query).toEqual({ deletedAt: { $exists: true } });
    expect(result.sort).toEqual({ createdAt: -1 });
    expect(result.page).toEqual(1);
    expect(result.limit).toEqual(25);
  });

  it("should build a query object with custom values", () => {
    const queryUser = {
      username: "testuser",
      userStatus: "ACTIVE",
      startDate: new Date("2023-01-01"),
      endDate: new Date("2023-12-31"),
      dateField: "createdAt",
      page: 2,
      limit: 10,
      sortField: "username",
      order: "ASC",
    };

    const result = queryBuilder({ queryUser: { queryUser } });

    // Validate that applyRegexFilter was called with the correct arguments
    expect(applyRegexFilter).toHaveBeenCalledWith({}, "username", "testuser");

    // Validate other aspects of the result as needed
    expect(result.query).toEqual({
      deletedAt: null,
      createdAt: {
        $gte: new Date("2023-01-01"),
        $lte: new Date("2023-12-31"),
      },
    });
    expect(result.sort).toEqual({ username: 1 });
    expect(result.page).toEqual(2);
    expect(result.limit).toEqual(10);
  });
});
