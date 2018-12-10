import React, { Component } from "react";
import { ListGroupItem, Button } from "reactstrap";
import axios from "axios";

class Item extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios
      .get("http://localhost:3000/item?id=" + this.props.obj._id)
      .then(console.log("Deleted"))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <ListGroupItem header="Titulo">
        {this.props.obj.title} <Button />
      </ListGroupItem>
    );
  }
}

export default Item;
