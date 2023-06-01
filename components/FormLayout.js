import React, { useState } from "react";
import { FormGroup, Label, Row, Col, Form, Input, Button } from "reactstrap";

const FormLayout = () => {
  const initialFormData = {
    subject: "",
    recipient: "",
    date: "",
    time: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialFormData);
  };

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  return (
    <section>
      <Form className="mt-4">
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for="subject">Subject</Label>
              <Input
                onChange={handleChange}
                value={formData.subject}
                id="subject"
                name="subject"
                placeholder="Subject of Memo"
                type="text"
              ></Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="recipient">Recipient</Label>
              <Input
                onChange={handleChange}
                value={formData.recipient}
                id="recipient"
                name="recipient"
                placeholder="Recipient of the Memo"
                type="text"
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="date">Date Sent</Label>
              <Input
                onChange={handleChange}
                value={formData.date}
                id="date"
                name="date"
                placeholder="When the memo was sent"
                type="date"
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="time">Time Sent</Label>
              <Input
                onChange={handleChange}
                value={formData.time}
                id="time"
                name="time"
                placeholder="Time of memo sent"
                type="time"
              ></Input>
            </FormGroup>
          </Col>
        </Row>
      </Form>
      <Button color="secondary" onClick={handleSubmit}>
        Submit
      </Button>
    </section>
  );
};

export default FormLayout;
