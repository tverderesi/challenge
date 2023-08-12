/**
 * @generated SignedSource<<7fa92d20c9fee29a6e94ece398f067d2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type Role = "ADMIN" | "STUDENT" | "TEACHER" | "%future added value";
export type AUsersQuery$variables = {};
export type AUsersQuery$data = {
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
export type AUsersQuery = {
  response: AUsersQuery$data;
  variables: AUsersQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "queryUser",
        "value": {}
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
    "storageKey": "users(queryUser:{})"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AUsersQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AUsersQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "0d5a1840e5ba51b93ec6b9fcf9a675f4",
    "id": null,
    "metadata": {},
    "name": "AUsersQuery",
    "operationKind": "query",
    "text": "query AUsersQuery {\n  users(queryUser: {}) {\n    id\n    username\n    email\n    fullName\n    cpf\n    role\n    createdAt\n    updatedAt\n    deletedAt\n  }\n}\n"
  }
};
})();

(node as any).hash = "0536013973ef65359c2df65b1f37be5f";

export default node;
