import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

import CardAuthor from "../components/CardAuthor.jsx";
import FormInputs from "../components/FormInputs.jsx";
import Button from "../components/CustomButton.jsx";
import Index from "../components/Index"

import damirBosnjak from "../assets/img/damir-bosnjak.jpg";
import mike from "../assets/img/default-avatar.png";

class User extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col md={4} xs={12}>
            <Card className="card-user">
              <div className="image">
                <img src={damirBosnjak} alt="..." />
              </div>
              <CardBody>
                <CardAuthor
                  avatar={mike}
                  avatarAlt="..."
                  title="/user GET"
                  description="/user GET"
                />
                <p className="description text-center">
                  defaultValue: "/user GET"
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md={8} xs={12}>
            <Card className="card-user">
              <CardHeader>
                <CardTitle>Edit Profile</CardTitle>
              </CardHeader>
              <CardBody>
                <form>
                  <FormInputs
                    ncols={["col-md-3 pr-1", "col-md-9 px-1"]}
                    proprieties={[
                      {
                        label: "Username",
                        inputProps: {
                          type: "text",
                          defaultValue: "/user GET"
                        }
                      },
                      {
                        label: "Email address",
                        inputProps: {
                          type: "email",
                          defaultValue: "/user GET",
                          placeholder: "Email"
                        }
                      }
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-6 pr-1", "col-md-6 pl-1"]}
                    proprieties={[
                      {
                        label: "First Name",
                        inputProps: {
                          type: "text",
                          placeholder: "First Name",
                          defaultValue: "/user GET"
                        }
                      },
                      {
                        label: "Last Name",
                        inputProps: {
                          type: "text",
                          placeholder: "Last Name",
                          defaultValue: "/user GET"
                        }
                      }
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-12"]}
                    proprieties={[
                      {
                        label: "Address",
                        inputProps: {
                          type: "text",
                          placeholder: "Home Address",
                          defaultValue: "/user GET"
                        }
                      }
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-4 pr-1", "col-md-4 px-1", "col-md-4 pl-1"]}
                    proprieties={[
                      {
                        label: "City",
                        inputProps: {
                          type: "text",
                          defaultValue: "/user GET",
                          placeholder: "City"
                        }
                      },
                      {
                        label: "Country",
                        inputProps: {
                          type: "text",
                          defaultValue: "/user GET",
                          placeholder: "Country"
                        }
                      },
                      {
                        label: "Postal Code",
                        inputProps: {
                          type: "number",
                          placeholder: "ZIP Code"
                        }
                      }
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-12"]}
                    proprieties={[
                      {
                        label: "About Me",
                        inputProps: {
                          type: "textarea",
                          defaultValue: "/user GET",
                          placeholder: "Here can be your description"
                        }
                      }
                    ]}
                  />
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button color="primary" round>
                        Update Profile
                      </Button>
                    </div>
                  </Row>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Card>
              <CardHeader>
                <CardTitle>My founded items</CardTitle>
                <p className="card-category">PLACEHOLDER</p>
              </CardHeader>
              <CardBody>
                <div>
                  <section>
                    <Index owner={true}/>
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

export default User;
