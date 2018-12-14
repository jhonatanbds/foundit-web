import React, { Component } from "react";
import { ListGroupItem, Button, Popover, PopoverHeader, PopoverBody, ListGroupItemHeading, ListGroupItemText } from "reactstrap";
import axios from "axios";

class Item extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  delete() {
    console.log("delete");
    axios
      .delete("http://localhost:3000/item/" + this.props.obj._id)
      .then(console.log("Deleted"))
      .catch(err => console.log(err));
    window.location.reload();
  }
  
  render() {
    return (
      <ListGroupItem header="Titulo">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{this.props.obj.title}</h5>
          <small className="text-muted">{"Found at " + this.props.obj.foundDate}</small>
        </div>
        <span className="pull-right">
          {this.props.owner ? 
            <Button className="btn btn-xs btn-danger" onClick={this.delete}>Delete</Button>
            :<a href="mailto:admin@email.com"><button class="btn btn-xs btn-info" >Contact</button></a>
          }      
        </span>
        <p className="mb-1">{this.props.obj.description}</p>
        <small className="text-muted">{this.props.obj.foundPlace}</small>         
      </ListGroupItem>
    );
  }
}

export default Item;
