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
      foundPlace: "",
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
      foundPlace: this.state.foundPlace,
      date: this.state.date
    };
    axios.post("/item", obj).then(res => console.log(res.data));

    console.log(`title: ${this.state.title}`);
    this.setState({
      title: "",
      description: "",
      foundPlace: "",
      date: new Date()
    });

    window.location.reload();
  }

  render() {
    const { title, description, foundPlace, date } = this.state;
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
                <Label>foundPlace</Label>
                <Input
                  type="title"
                  name="foundPlace"
                  id="examplefoundPlace"
                  placeholder="Place where you found"
                  value={foundPlace}
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
