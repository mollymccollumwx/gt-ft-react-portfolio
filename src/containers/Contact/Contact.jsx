import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Image from "../../Assets/images/email.svg";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container-flex">
      <Navbar />
      <h1 className="title has-text-centered mt-5">Say hi! I'd love you hear from you. </h1>

      

      <div className="columns is-centered mt-5">
          <div className="column is-5">
          <img id="contact-image" src={Image}></img>
          </div>
        <div className="column is-5">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="email"
                placeholder="Email input"
                value="hello@"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            
          </div>


          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea className="textarea" placeholder="Textarea"></textarea>
            </div>
          </div>
          <button className="button is-info is-medium mr-2">
                  Submit
                </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
