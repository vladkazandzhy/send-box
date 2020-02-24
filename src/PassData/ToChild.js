import React from "react";

export default function Child(props) {
  return (
    <div>
      <p>Some data: {props.someMessage}</p>
    </div>
  );
}
