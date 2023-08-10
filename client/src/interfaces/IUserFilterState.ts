import { IDateOptions } from "./IDateOptions";
import { IPagination } from "./IPagination";
import { ISortingOptions } from "./ISortingOptions";
import { IQueryUser } from "./IQueryUser";

export interface IUserFilterState
  extends IQueryUser,
    ISortingOptions,
    IPagination,
    IDateOptions {}
