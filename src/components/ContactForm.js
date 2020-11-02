import React from "react";
import { Button, Form, TextArea } from 'semantic-ui-react'

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (

      <Form
        id='contact-form'
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xeqpkqnl"
        method="POST"
      >
        <div id='formInputs'>
          <label>Email:</label>
          <input type="email" name="email" />
          <label>Message:</label>
          <TextArea placeholder='Give us a breif description of what you are looking for in a webpage. ' type="text" name="message" /><br />
          {status === "SUCCESS" ? <p>Thanks!</p> : <Button content='Submit' type='submit' primary />}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </div>
      </Form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}