import React, { Component } from "react";
import { ListGroupItem, Button, Popover, PopoverHeader, PopoverBody, ListGroupItemHeading, ListGroupItemText } from "reactstrap";
import axios from "axios";

class Item extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
    console.log(this.props.obj);
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }
  contact() {

  }
  delete() {
    axios
      .delete("http://localhost:3000/item/" + this.props.obj._id)
      .then(console.log("Deleted"))
      .catch(err => console.log(err));
  }
  
  render() {
    return (
      <ListGroupItem header="Titulo">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{this.props.obj.title}</h5>
        <small className="text-muted">{"Found at " + this.props.obj.foundDate}</small>
      </div>
      <span class="pull-right">
      <a href="mailto:admin@email.com">
        <button class="btn btn-xs btn-info" >Contact</button>
      </a>
      </span>
      <p class="mb-1">{this.props.obj.description}</p>
      <small class="text-muted">{this.props.obj.foundPlace}</small>         
      </ListGroupItem>
    );
  }
}

export default Item;
