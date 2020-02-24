import React, { Component } from "react";

export default class FromSibling extends Component {
  data = " To my sibling";
  render() {
    return (
      <button onClick={() => this.props.callbackFromParent(this.data)}>
        UpdateSibling
      </button>
    );
  }
}
