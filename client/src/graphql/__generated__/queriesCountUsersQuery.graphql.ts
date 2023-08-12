/**
 * @generated SignedSource<<7e1a5a32cfd39a11dc29f52a420c6959>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type DateField = "createdAt" | "deletedAt" | "updatedAt" | "%future added value";
export type Role = "ADMIN" | "STUDENT" | "TEACHER" | "%future added value";
export type SortDirection = "ASC" | "DESC" | "%future added value";
export type Status = "ACTIVE" | "ALL" | "INACTIVE" | "%future added value";
export type QueryUser = {
  cpf?: string | null;
  createdAt?: string | null;
  dateField?: DateField | null;
  deletedAt?: string | null;
  email?: string | null;
  endDate?: string | null;
  fullName?: string | null;
  id?: string | null;
  limit?: string | null;
  order?: SortDirection | null;
  page?: string | null;
  role?: Role | null;
  sortField?: string | null;
  startDate?: string | null;
  updatedAt?: string | null;
  userStatus?: Status | null;
  username?: string | null;
};
export type queriesCountUsersQuery$variables = {
  queryUser?: QueryUser | null;
};
export type queriesCountUsersQuery$data = {
  readonly userCount: number | null;
};
export type queriesCountUsersQuery = {
  response: queriesCountUsersQuery$data;
  variables: queriesCountUsersQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "queryUser"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "queryUser",
        "variableName": "queryUser"
      }
    ],
    "kind": "ScalarField",
    "name": "userCount",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "queriesCountUsersQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "queriesCountUsersQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e0f9e3f03b5c181cff236e414a6c3592",
    "id": null,
    "metadata": {},
    "name": "queriesCountUsersQuery",
    "operationKind": "query",
    "text": "query queriesCountUsersQuery(\n  $queryUser: QueryUser\n) {\n  userCount(queryUser: $queryUser)\n}\n"
  }
};
})();

(node as any).hash = "36b37efa94f1ef91e2b9fc1602a0ff9f";

export default node;
