import React, { Component } from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Axios from "axios";

class ContactPage extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    disabled: false,
    emailSent: null
  };
  handleTextChange = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  handleSubmit = e => {
    Axios.post("http://localhost:8888/email", {
      name: this.state.name
    }).then(res => {
      alert(res.data.message);
    });

    this.setState({ disabled: true, emailSent: true });
    e.preventDefault();
  };

  render() {
    const { title } = this.props;
    const { name, email, message, disabled, emailSent } = this.state;
    return (
      <>
        <Hero title={title} />
        <Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="full-name">Full Name</Form.Label>
              <Form.Control
                id="full-name"
                name="name"
                type="text"
                value={name}
                onChange={this.handleTextChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={this.handleTextChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="message">Message</Form.Label>
              <Form.Control
                id="message"
                name="message"
                as="textarea"
                rows="3"
                value={message}
                onChange={this.handleTextChange}
              />
            </Form.Group>
            <Button
              className="d-inline-block"
              type="submit"
              disabled={disabled}
            >
              Send
            </Button>

            {emailSent !== null &&
              (emailSent ? (
                <p className="d-inline success-msg">Email Sent</p>
              ) : (
                <p className="d-inline err-msg">Email Not Sent</p>
              ))}
          </Form>
        </Content>
      </>
    );
  }
}

export default ContactPage;
