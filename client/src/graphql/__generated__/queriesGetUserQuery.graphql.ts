/**
 * @generated SignedSource<<b0b07869dd8f437d8235d92c03bd9e23>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type Role = "ADMIN" | "STUDENT" | "TEACHER" | "%future added value";
export type queriesGetUserQuery$variables = {
  userId: string;
};
export type queriesGetUserQuery$data = {
  readonly user: {
    readonly cpf: string;
    readonly createdAt: string;
    readonly deletedAt: string | null;
    readonly email: string;
    readonly fullName: string;
    readonly id: string;
    readonly role: Role;
    readonly updatedAt: string;
    readonly username: string;
  } | null;
};
export type queriesGetUserQuery = {
  response: queriesGetUserQuery$data;
  variables: queriesGetUserQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "userId"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
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
    "name": "queriesGetUserQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "queriesGetUserQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c5206ce44346620e50f1745a4759a7dd",
    "id": null,
    "metadata": {},
    "name": "queriesGetUserQuery",
    "operationKind": "query",
    "text": "query queriesGetUserQuery(\n  $userId: ID!\n) {\n  user(id: $userId) {\n    id\n    username\n    email\n    fullName\n    cpf\n    role\n    createdAt\n    updatedAt\n    deletedAt\n  }\n}\n"
  }
};
})();

(node as any).hash = "f20d52697c42eb977ddee5c9676e4f30";

export default node;
