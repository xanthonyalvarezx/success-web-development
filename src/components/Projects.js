import React, { Component } from "react";

import "../Stylesheets/PreviousProjects.css";

class projects extends Component {
  render() {
    return (
      <>
        <header className="projectsHeader">
          <h1>Take a look at some projects the team has previously completed for other clients!</h1>
        </header>

        <ul id="projectList">
          <li>Project</li>

          <li>Project</li>

          <li>Project</li>

          <li>Project</li>
        </ul>
      </>
    );
  }
}
export default projects;
