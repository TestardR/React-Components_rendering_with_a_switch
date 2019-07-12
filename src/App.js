import React, { Component } from "react";
import navigation from "./navigation";

export default class App extends Component {
  state = {
    type: null
  };

  render() {
    const { type } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ type: "type1" })}>Show 1</button>
        <button onClick={() => this.setState({ type: "type2" })}>Show 2</button>
        <button onClick={() => this.setState({ type: "type3" })}>Show 3</button>
        <button onClick={() => this.setState({ type: "all" })}>Show all</button>
        {navigation(type)}
      </div>
    );
  }
}
