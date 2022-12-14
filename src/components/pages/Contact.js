import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
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
  render() {
    const { status } = this.state;
    return (
      <div className="formStyle" id="contactSect">
        <div className="containerForm" id="contact">
          <h3 className="contact text-center">Please Drop a Message</h3>
          <form
            className="contact-form"
            onSubmit={this.submitForm}
            action="https://formspree.io/f/xayzwylz"
            method="POST"
          >
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName1"
                name="name"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                name="email"
                placeholder="email@gmail.com"
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="12"
              />
            </div>
            {status === "SUCCESS" ? (
              <p className="success">Thank you for sending me a message!</p>
            ) : (
              <button className="contactBtn">Submit</button>
            )}
            {status === "ERROR" && (
              <p className="failure">
                Ooops! There was an error. Please fill out all the fields and
                try again.
              </p>
            )}
          </form>
          <div className="contactInfo text-center">
            <span>Email: </span>
            <a href="mailto:emilee.wimmer@gmail.com">emilee.wimmer@gmail.com</a>
        
            <div className="social-links">
              <span>
                <a
                  href="https://github.com/EMMWIMM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github fa-3x"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/emilee-anderson-7b8048239"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin fa-2x"></i>
                </a>
              </span>
              {/* <span>Download my resume:</span><a class="resume" href="AlexResume.pdf" target="_blank"><button><i
                  class="fa fa-download"></i></button></a> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
