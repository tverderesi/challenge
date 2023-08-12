/**
 * @generated SignedSource<<49cb75795787e68969ffe6c89c8ca870>>
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
export type queriesGetUsersQuery$variables = {
  queryUser?: QueryUser | null;
};
export type queriesGetUsersQuery$data = {
  readonly users: ReadonlyArray<{
    readonly cpf: string;
    readonly createdAt: string;
    readonly deletedAt: string | null;
    readonly email: string;
    readonly fullName: string;
    readonly id: string;
    readonly role: Role;
    readonly updatedAt: string;
    readonly username: string;
  } | null> | null;
};
export type queriesGetUsersQuery = {
  response: queriesGetUsersQuery$data;
  variables: queriesGetUsersQuery$variables;
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
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "users",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "username",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "fullName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "cpf",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "role",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAt",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "updatedAt",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deletedAt",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "queriesGetUsersQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "queriesGetUsersQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2ebd849e60d48871cfe32061310f42cc",
    "id": null,
    "metadata": {},
    "name": "queriesGetUsersQuery",
    "operationKind": "query",
    "text": "query queriesGetUsersQuery(\n  $queryUser: QueryUser\n) {\n  users(queryUser: $queryUser) {\n    id\n    username\n    email\n    fullName\n    cpf\n    role\n    createdAt\n    updatedAt\n    deletedAt\n  }\n}\n"
  }
};
})();

(node as any).hash = "92d9db63fcc8a72872129cb4c022a167";

export default node;
