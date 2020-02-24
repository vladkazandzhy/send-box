import React, { Component, Fragment } from "react";
import FromChild from "./FromChild";

export default class FromChildToParent extends Component {
  state = {
    someDataFromChild: null
  };

  myCallback = dataFromChild => {
    this.setState({ someDataFromChild: dataFromChild });
  };

  render() {
    return (
      <Fragment>
        <h2>From Child to Parent (Use a callback and states)</h2>
        {/* pass this.state.someDataFromChild as a prop to child component */}
        <FromChild callbackFromParent={this.myCallback} />
        {this.state.someDataFromChild}
      </Fragment>
    );
  }
}
