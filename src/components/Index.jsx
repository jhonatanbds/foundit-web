import React, { Component } from 'react';
import {
    ListGroup,
    ListGroupItem
} from "reactstrap";
import axios from 'axios';
import Item from './Item';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {items: []};
    }
    componentDidMount(){
      axios.get('http://localhost:3000/item')
        .then(response => {
          this.setState({ items: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.business.map(function(object, i){
          return <Item obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
            <ListGroup>          
              { this.tabRow() }
            </ListGroup>
        </div>
      );
    }
  }