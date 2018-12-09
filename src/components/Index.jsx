import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import axios from "axios";
import Item from "./Item";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/item")
      .then(response => {
        this.setState({ items: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  tabRow() {
    console.log(this.state.items);
    if (this.state.items.length > 0) {
      return this.state.items.map((object, i) => <Item obj={object} key={i} />);
    } else {
      return <h2>Nothing to show</h2>;
    }
  }

  render() {
    return (
      <div>
        <ListGroup>{this.tabRow()}</ListGroup>
      </div>
    );
  }
}
