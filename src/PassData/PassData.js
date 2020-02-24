import React, { Fragment } from "react";
import FromParentToChild from "./FromParentToChild";
import FromChildToParent from "./FromChildToParent";
import BetweenSiblings from "./BetweenSiblings";

export default function PassData() {
  return (
    <Fragment>
      <h1>1. Ways of sending data between components:</h1>
      <FromParentToChild />
      <FromChildToParent />
      <BetweenSiblings />
    </Fragment>
  );
}
