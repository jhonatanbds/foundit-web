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
    console.log(axios.defaults.headers.common);
    axios({
      method: "get",
      url: "/item"
    })
      .then(response => {
        this.setState({ items: response.data });
      })
      .catch(function(error) {
        console.log("Error getting items: " + error);
      });
  }
  tabRow() {
    if (this.state.items.length > 0) {
      return this.state.items.map((object, i) => <Item owner={this.props.owner} obj={object} key={i} />);
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
