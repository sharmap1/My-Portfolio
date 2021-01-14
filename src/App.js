import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Error from "./pages/Error";
import { Row, Container, Col } from "react-bootstrap";
import Portpage from "./pages/Portpage";
import NavbarAbout from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Router>
              <NavbarAbout />
              <Switch>
                <Route exact path="/" component={Home}>
                  <Home />
                </Route>
                <Route exact path="/about" component={About}>
                  <About />
                </Route>
                <Route exact path="/portpage" component={Portpage}>
                  <Portpage />
                </Route>
                <Route path="/users">
                  <Error />
                </Route>
              </Switch>
            </Router>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
