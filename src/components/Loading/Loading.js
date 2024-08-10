// components/Loading.js
import React from "react";
import "./Loading.css"; // Import the CSS file for styling
import { Helmet } from "react-helmet";

const Loading = () => {
  return (
    <>
      <Helmet>
        <title>MediaThings</title>
        <meta name="description" content="This is a description of my page" />
        <meta name="keywords" content="React, Helmet, Meta Tags" />
      </Helmet>
      <div id="loading-container">
        <img src="/logo1.png" alt="Loading..." id="loading-logo" />

        <div className="container">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>

        {/* <h1 className="loading-text">Loading.....</h1> */}
        <br />
      </div>
    </>
  );
};

export default Loading;
