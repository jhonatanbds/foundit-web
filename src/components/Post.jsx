import React, { Component } from "react";
import axios from "axios";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = async event => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [name]: value
    });
  };

  submitForm(e) {
    e.preventDefault();
    const obj = {
      title: this.state.title,
      description: this.state.description
    };
    axios.post('http://localhost:3000/item', obj)
        .then(res => console.log(res.data));
        
    console.log(`title: ${this.state.title}`);
    this.setState({
      title: '',
      description: ''
    })
  }

  render() {
    const { title, description } = this.state;
    return (
      <Container>
        <Form className="form" onSubmit={e => this.submitForm(e)}>
          <Col>
            <FormGroup>
              <Label>Title</Label>
              <Input
                type="title"
                name="title"
                id="exampletitle"
                placeholder="Name what you found"
                value={title}
                onChange={e => {
                  this.handleChange(e);
                }}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="exampledescription">Description</Label>
              <Input
                type="textarea"
                name="description"
                id="exampledescription"
                placeholder="Describe what you found"
                value={description}
                onChange={e => this.handleChange(e)}
              />
            </FormGroup>
          </Col>
          <Button className="pull-right">Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default Post;
