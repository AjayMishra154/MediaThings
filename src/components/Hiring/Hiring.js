// src/components/Hiring.js
import "./index.css";
import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Hiring = () => {
  return (
    <>
      <div>
        {/* Other sections here */}
        <section id="hiring" className="hiring">
          <div className="centered-div">
            <h3 className="center-align">Join Our Team at MediaThings</h3>
            <p className="aboutDescript">
              With a wide range of services at MediaThings, you’ll have the
              opportunity to work on diverse and challenging projects that will
              enhance your skills and experience. If you are looking to be part
              of a dynamic and creative team, we invite you to explore the
              exciting career opportunities at MediaThings. Email your CV to us
              at letsconnect@mediathings.in
            </p>
          </div>
        </section>
        {/* Other sections here */}
      </div>
    </>
  );
};
export default Hiring;
