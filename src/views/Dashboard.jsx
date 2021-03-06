import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

import Index from "../components/Index";
import Post from "../components/Post";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col md={12}>
            <Card className="demo-icons">
              <CardHeader>
                <CardTitle>Post a finding</CardTitle>
              </CardHeader>
              <CardBody>
                <div>
                  <section>
                    <Post />
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
                    <Index owner={false} />
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
