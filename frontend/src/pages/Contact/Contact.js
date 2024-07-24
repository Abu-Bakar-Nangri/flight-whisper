import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import CSS from "./Contact.module.css";
import axios from "axios";
import img from "../../Images/contact.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LocationMap from "../Location";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleSubject = (e) => setSubject(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3699/api/users/UserFeedback", {
        name,
        email,
        subject,
        message,
      })
      .then((res) => toast.success("Query sent"))
      .catch((err) => toast.error("Error in sending query"));
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div>
      <div className={CSS["container-fluid"]}>
        <Header />
        <ToastContainer />
        <h1>Contact Us</h1>
        <p>
          <Link to={"/"} className={CSS["home-link"]}>
            <span>Home</span>
          </Link>
          <i className={`${CSS["arrow"]} fa-solid fa-arrow-right`}></i>
          <Link to={"/contact"} className={CSS["about-link"]}>
            <span>Contact Us</span>
          </Link>
        </p>
      </div>
      <div className="container">
        <div className={CSS.contactInfo}>
          <h2>Contact Information</h2>
          <p>
            <strong>Address:</strong> 123 Main Street, City, Country
          </p>
          <p>
            <strong>Phone Numbers:</strong> (123) 456-7890
          </p>
          <p>
            <strong>Email Addresses:</strong> support@company.com,
            sales@company.com
          </p>
        </div>

        <div className={CSS.hours}>
          <h2>Operating Hours</h2>
          <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p>Saturday: 10:00 AM - 3:00 PM</p>
          <p>Sunday: Closed</p>
        </div>

        <div className={CSS.map}>
          <h2>Our Location</h2>


          <LocationMap latitude={"31.4822"} longitude={"74.3346"} />
        </div>

        <div className={CSS.faq}>
          <h2>Frequently Asked Questions (FAQs)</h2>
          <div>
            <h3>How can I contact customer support?</h3>
            <p>You can reach us at (123) 456-7890 or support@company.com.</p>
          </div>
          <div>
            <h3>What are your business hours?</h3>
            <p>Our business hours are Monday to Friday, 9:00 AM - 5:00 PM.</p>
          </div>
        </div>

        <h1 className={CSS["contact-title"]}>Feedback Form</h1>
        <div className={CSS["contactus-container"]}>
          <div className={CSS["contactus-img"]}>
            <img className={CSS["img"]} src={img} alt="img" />
          </div>
          <div className={CSS["contactus-details"]}>
            <form onSubmit={handleFormSubmit}>
              <div className={CSS["contactus-name_email-container"]}>
                <div className={CSS["contactus-name-container"]}>
                  <label className={CSS["contactus-label"]} htmlFor="_fullName">
                    Full Name<span className={CSS["contactus-star"]}>*</span>
                  </label>
                  <input
                    className={CSS["contactus-name"]}
                    type="text"
                    id="_fullName"
                    name="_fullName"
                    onChange={handleName}
                    value={name}
                    placeholder={"Full Name"}
                    required
                  />
                </div>
                <div className={CSS["contactus-name-container"]}>
                  <label className={CSS["contactus-label"]} htmlFor="_email">
                    Email Address
                    <span className={CSS["contactus-star"]}>*</span>
                  </label>
                  <input
                    className={CSS["contactus-email"]}
                    type="email"
                    id="_email"
                    name="_email"
                    onChange={handleEmail}
                    value={email}
                    placeholder={"Email Address"}
                    required
                  />
                </div>
              </div>
              <div className={CSS["contactus-subject-container"]}>
                <label className={CSS["contactus-label"]} htmlFor="_subject">
                  Subject<span className={CSS["contactus-star"]}>*</span>
                </label>
                <input
                  className={CSS["contactus-subject"]}
                  type="text"
                  id="_subject"
                  name="_subject"
                  onChange={handleSubject}
                  value={subject}
                  placeholder={"Subject"}
                  required
                />
              </div>
              <div className={CSS["contactus-message-container"]}>
                <label className={CSS["contactus-label"]} htmlFor="_message">
                  Message<span className={CSS["contactus-star"]}>*</span>
                </label>
                <textarea
                  rows={3}
                  className={CSS["contactus-message"]}
                  id="_message"
                  name="_message"
                  onChange={handleMessage}
                  value={message}
                  placeholder={"Message"}
                  required
                ></textarea>
              </div>
              <button className={CSS["send-btn"]} type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
