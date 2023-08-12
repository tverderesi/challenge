import { IUserDateOptions } from "./IUserDateOptions";
import { IUserPaginationOptions } from "./IUserPaginationOptions";
import { IUserSortingOptions } from "./IUserSortingOptions";
import { IQueryUserFields } from "./IQueryUserFields";
interface IQueryUser
  extends IUserDateOptions,
    IUserPaginationOptions,
    IUserSortingOptions,
    IQueryUserFields {}
