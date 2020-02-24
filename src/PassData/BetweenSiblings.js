import React, { Component, Fragment } from "react";
import FromSibling from "./FromSibling";
import ToSibling from "./ToSibling";

export default class BetweenSiblings extends Component {
  state = {
    someDataFromSibling: null
  };

  myCallback = dataFromSibling => {
    this.setState({ someDataFromSibling: dataFromSibling });
  };
  render() {
    return (
      <Fragment>
        <h2>Between Siblings</h2>
        <FromSibling callbackFromParent={this.myCallback} />
        <ToSibling fromSibling={this.state.someDataFromSibling} />
      </Fragment>
    );
  }
}
