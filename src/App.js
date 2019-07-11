import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

class App extends Component {
  state = {
    title: "Ricardo Dias",
    headerLinks: [
      { title: "Home", path: "/" },
      { title: "About", path: "/about" },
      { title: "Contact", path: "/contact" }
    ],
    home: {
      title: "Be Relentless",
      subTitle: "Modern projects that make a difference",
      text: "Checkout my projects below"
    },
    about: {
      title: "About me"
    },
    contact: {
      title: "Let's talk"
    }
  };

  render() {
    const { headerLinks, home, about, contact } = this.state;
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>{this.state.title}</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                {headerLinks.map(hlink => (
                  <Link
                    className="nav-link"
                    key={hlink.title.toLowerCase()}
                    to={hlink.path}
                  >
                    {hlink.title}
                  </Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div>
            <Route path="/" exact render={() => <HomePage {...home} />} />
            <Route path="/about" render={() => <AboutPage {...about} />} />
            <Route
              path="/contact"
              component={() => <ContactPage {...contact} />}
            />
          </div>
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
