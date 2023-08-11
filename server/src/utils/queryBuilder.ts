import { IQueryUser } from "../types/IUser.js";
import { applyRegexFilter } from "./applyRegexFilter.js";

/**
 * @description Builds the query object based on the provided arguments
 * @param queryUser The user object containing the query arguments
 * @param userStatus The user status
 * @param dateField The date field to be used in the query
 * @param startDate The start date to be used in the query
 * @param endDate The end date to be used in the query
 * @returns {Object} - The query object
 * @throws {GraphQLError} - Throws an error if the userStatus argument is invalid
 */

export const queryBuilder = ({
  queryUser: { queryUser },
}: {
  queryUser: { queryUser: IQueryUser };
}) => {
  const query: any = {};

  const queryFields = ["id", "username", "email", "fullName", "cpf", "role"];
  const { startDate, endDate, dateField } = queryUser || {
    startDate: null,
    endDate: null,
    dateField: null,
  };

  const { userStatus } = queryUser || { userStatus: "ALL" };

  queryFields.forEach((field) => {
    applyRegexFilter(query, field, queryUser[field]);
  });

  // Apply user status filtering
  if (userStatus === "ACTIVE") {
    query.deletedAt = null;
  } else if (userStatus === "INACTIVE") {
    query.deletedAt = { $ne: null };
  } else {
    query.deletedAt = { $exists: true };
  }

  if (dateField) {
    query[dateField] = {
      $gte: startDate || new Date(0),
      $lte: endDate || new Date(),
    };
  }
  const page = queryUser.page || 1;
  const limit = queryUser.limit || 25;
  const sortField = queryUser.sortField || "createdAt";
  const order = queryUser.order || "DESC";

  const sort: any = {};

  sort[sortField] = order === "ASC" ? 1 : -1;

  return { query, sort, page, limit };
};
