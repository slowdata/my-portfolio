import React, { Component } from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";
import Form from "react-bootstrap/Form";

class ContactPage extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    disable: false,
    emailSent: null
  };
  render() {
    const { title } = this.props;
    return (
      <div>
        <Hero title={title} />
        <Content>
          <Form>Coisas</Form>
        </Content>
      </div>
    );
  }
}

export default ContactPage;
