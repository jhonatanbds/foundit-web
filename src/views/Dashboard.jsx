import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button
} from "reactstrap";

import FormInputs from "../components/FormInputs";
import Post from "../components/Post";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col md={12}>
            <Card className="demo-icons">
              <CardHeader>
                <CardTitle>Create a new Item</CardTitle>
              </CardHeader>
              <CardBody>
                <div>
                  <section>
                    <FormInputs
                      ncols={["col-md-6 pr-1", "col-md-6 pl-1"]}
                      proprieties={[
                        {
                          label: "Title",
                          inputProps: {
                            type: "text",
                            placeholder: "Name what you found"
                          }
                        },
                        {
                          label: "Found at",
                          inputProps: {
                            type: "text",
                            placeholder: "The place you found it!"
                          }
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      proprieties={[
                        {
                          label: "Description",
                          inputProps: {
                            type: "textarea",
                            placeholder: "Here can be your description"
                          }
                        }
                      ]}
                    />
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button color="primary" round>
                          Post new found Item
                        </Button>
                      </div>
                    </Row>
                  </section>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Card>
              <CardHeader>
                <CardTitle>Items that were recent found</CardTitle>
                <p className="card-category">PLACEHOLDER</p>
              </CardHeader>
              <CardBody>
                <div>
                  <section>
                    <h1>Hello World!</h1>
                  </section>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
