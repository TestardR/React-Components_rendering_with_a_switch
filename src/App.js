import React, { Component } from "react";
import navigation from "./navigation";

export default class App extends Component {
  state = {
    type: null,
    message: "this is a message to pass down to Type1",
    other: "this is another message"
  };

  render() {
    const { type, message, other } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ type: "type1" })}>Show 1</button>
        <button onClick={() => this.setState({ type: "type2" })}>Show 2</button>
        <button onClick={() => this.setState({ type: "type3" })}>Show 3</button>
        <button onClick={() => this.setState({ type: "all" })}>Show all</button>
        {navigation(type, message, other)}
      </div>
    );
  }
}
