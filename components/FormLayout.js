import React from "react";
import { FormGroup, Label, Row, Col, Form, Input, Button } from "reactstrap";

const FormLayout = () => {
  return (
    <section>
      <Form className="mt-4">
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="Subject of Memo"
                type="text"
              ></Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="recepient">Recepient</Label>
              <Input
                id="recepient"
                name="recepient"
                placeholder="Recepient of the Memo"
                type="text"
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="date">Date Sent</Label>
              <Input
                id="date"
                name="recepient"
                placeholder="When the memo was sent"
                type="date"
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="time">Time Sent</Label>
              <Input
                id="time"
                name="recepient"
                placeholder="Time of memo sent"
                type="time"
              ></Input>
            </FormGroup>
          </Col>
        </Row>
      </Form>
      <Button color="secondary">Submit</Button>
    </section>
  );
};

export default FormLayout;