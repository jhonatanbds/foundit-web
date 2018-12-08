import React, { Component } from 'react';
import {
  ListGroup,
  ListGroupItem
} from "reactstrap";
import axios from 'axios';

class Item extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:3000/item?id='+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <ListGroupItem header={this.props.obj.title}>Description</ListGroupItem>        
    );
  }
}

export default Item;