import React, { Component } from "react";

import Card from "../components/Card";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import soccerteams from "../assets/soccerteams.png";
import ocredito from "../assets/ocredito.png";
import safthelper from "../assets/safthelper.png";

class Carousel extends Component {
  state = {
    items: [
      {
        id: 0,
        title: "Make Teams for Tiago",
        subTitle: "Simple app to make soccer teams.",
        imgSrc: soccerteams,
        link: "https://maketeamsfortiago.netlify.com",
        selected: false
      },
      {
        id: 1,
        title: "OCredito",
        subTitle: "Homepage and Blog for OCredito",
        imgSrc: ocredito,
        link: "https://ocredito.pt",
        selected: false
      },
      {
        id: 2,
        title: "Saft Helper",
        subTitle: "Little helper for Saft files",
        imgSrc: safthelper,
        link: "https://github.com/slowdata/saft_helper",
        selected: false
      }
    ]
  };

  handleCardHover = id => {
    const { items } = this.state;
    const newItems = items.map(item => {
      item.selected = item.id !== id ? false : true;
      return item;
    });
    this.setState({ items: newItems });
  };

  makeItems = items => {
    return items.map(item => (
      <Card
        item={item}
        hover={e => this.handleCardHover(item.id, e)}
        key={item.id}
      />
    ));
  };

  render() {
    const { items } = this.state;
    return (
      <Container fluid={true} style={{ marginBottom: 50 }}>
        <Row className="justify-content-around">{this.makeItems(items)}</Row>
      </Container>
    );
  }
}

export default Carousel;
