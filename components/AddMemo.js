import React, { useState } from "react";
import { FormGroup, Label, Row, Col, Form, Input, Button } from "reactstrap";

const AddMemo = ({ addMemo }) => {
  const initialMemo = {
    subject: "",
    recipient: "",
    date: "",
    time: "",
  };

  const [memo, setMemo] = useState(initialMemo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMemo((prevMemo) => {
      return {
        ...prevMemo,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //form validation
    if (!memo.subject) {
      alert("Please add Memo");
      return;
    }
    addMemo({
      subject: memo.subject,
      recipient: memo.recipient,
      date: memo.date,
      time: memo.time,
    });

    setMemo(initialMemo);
  };
  return (
    <section className="my-4">
      <Form>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for="subject">Subject</Label>
              <Input
                onChange={handleChange}
                value={memo.subject}
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
                value={memo.recipient}
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
                value={memo.date}
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
                value={memo.time}
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

export default AddMemo;
