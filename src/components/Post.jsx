import React, { Component } from "react";
import axios from "axios";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row
} from "reactstrap";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      place: "",
      date: new Date()
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
      description: this.state.description,
      place: this.state.place,
      date: this.state.date
    };
    axios({
      method: "post",
      url: "http://localhost:3000/item",
      data: obj
    }).then(res => console.log(res.data));

    console.log(`title: ${this.state.title}`);
    this.setState({
      title: "",
      description: "",
      place: "",
      date: new Date()
    });
  }

  render() {
    const { title, description, place, date } = this.state;
    return (
      <Container>
        <Form className="form" onSubmit={e => this.submitForm(e)}>
          <Row>
            <Col md={4}>
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
            <Col md={4}>
              <FormGroup>
                <Label>Place</Label>
                <Input
                  type="title"
                  name="place"
                  id="exampleplace"
                  placeholder="Place where you found"
                  value={place}
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleDate">Date</Label>
                <Input
                  type="date"
                  name="date"
                  id="exampleDate"
                  placeholder="date placeholder"
                  value={date}
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
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
          </Row>
          <Button className="pull-right">Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default Post;
