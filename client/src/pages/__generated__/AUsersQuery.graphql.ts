/**
 * @generated SignedSource<<de6f709dbfb327eae97eae066c4362a5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AUsersQuery$variables = {};
export type AUsersQuery$data = {
  readonly users: ReadonlyArray<{
    readonly email: string;
    readonly id: string;
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
    "args": null,
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
      }
    ],
    "storageKey": null
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
    "cacheID": "a912183f51ee5678fe3a960cbeb4932f",
    "id": null,
    "metadata": {},
    "name": "AUsersQuery",
    "operationKind": "query",
    "text": "query AUsersQuery {\n  users {\n    id\n    username\n    email\n  }\n}\n"
  }
};
})();

(node as any).hash = "2bd3f42a275e96416aa3a23799c8f81a";

export default node;
