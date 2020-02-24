import React, { Component } from "react";

export default class FromChild extends Component {
  data = " To my parent";
  render() {
    return (
      <button onClick={() => this.props.callbackFromParent(this.data)}>
        UpdateParent
      </button>
    );
  }
}
