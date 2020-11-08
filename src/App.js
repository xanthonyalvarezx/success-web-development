import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./Stylesheets/App.css";
import { Button, Icon } from "semantic-ui-react";
import Main from "./pages/Main";
import PreviousProjects from "./pages/PreviousProjects";

import Nav from "./components/Nav";
import MeetUS from "./pages/meetUs";
import Contact from "./pages/ContactPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Nav />

          <Switch>
            <Route exact path="/" component={Main} />

            <Route path="/Contact" component={Contact} />

            <Route path="/Previous-Projects" component={PreviousProjects} />

            <Route path="/Meet-us" component={MeetUS} />
          </Switch>
        </Router>
        <footer>
          <div id="socialButtons">
            <Button color="facebook">
              <Icon name="facebook" />
              <a
                href="https://www.facebook.com/Success-Web-Development-106136581297061/?notif_id=1603832810863896&notif_t=page_fan&ref=notif"
                target="blank"
              >
                FaceBook
              </a>
            </Button>
            <Button color="instagram">
              <Icon name="instagram" />
              <a href="https://www.instagram.com/successwebdevelopment/" target="blank">
                Instagram
              </a>
            </Button>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
