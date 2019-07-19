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
      title: "Always evolving",
      subTitle: `Bringing projects to a modern age`,
      text: "Checkout my projects below"
    },
    about: {
      title: "About me"
    },
    contact: {
      title: "Let's talk"
    },
    isHome: true
  };
  onHandleClick = path => {
    console.log(path.length);
    path.length > 1
      ? this.setState({ isHome: false })
      : this.setState({ isHome: true });
  };

  render() {
    const { headerLinks, home, about, contact, isHome } = this.state;
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
                    onClick={() => this.onHandleClick(hlink.path)}
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
        </Container>
        <Footer isHome={isHome} />
      </Router>
    );
  }
}

export default App;
