import React, { Fragment } from "react";
import ToChild from "./ToChild";

export default function FromParentToChild() {
  let message = "To my child";
  return (
    <Fragment>
      <h2>From Parent to Child: (Use Prop)</h2>
      <ToChild someMessage={message} />
    </Fragment>
  );
}
