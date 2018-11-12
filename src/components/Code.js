import React, { Component } from "react";
import Item from "./Item";

class Code extends Component {
  constructor() {
    super();
    this.state = {
      bold: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      bold: !this.state.bold
    });
  }

  render() {
    return (
      <React.Fragment>
        <code onClick={this.handleClick}>
          {this.state.bold ? this.props.plus : " "} {this.props.children}
        </code>
        <Item />
      </React.Fragment>
    );
  }
}

export default Code;
