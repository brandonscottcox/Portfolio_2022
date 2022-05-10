import React, { useState } from "react";
import "../Scrollbar.css";
import "./Contact.css";
import GoogleMap from "./GoogleMaps/GoogleMap";

export default function Contact() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <div className="ContactBackground">
        <div className="ContactPadding">
          <div className="ContactFlex">
            <div>
              <GoogleMap />
            </div>
            <div className="ContactTextBorder">
              <div className="ContactPosition">
                <div className="ContactText">
                  <h1>Contact</h1>
                  <div className="ContactTextP">
                    <p>
                      I'm currently looking for future projects and clients.
                    </p>
                    <p>Interested in getting in touch?</p>
                  </div>
                  <div className="buttonFlex">
                    <a target="_blank" href="mailto:brandonscottcox@gmail.com">
                      <button>Email Me</button>
                    </a>
                  </div>
                  <div className="phoneFlex1">
                    <div className="phoneText">
                      <p>Phone: </p>
                    </div>
                    <div className="emailText">
                      <p>Email: </p>
                    </div>
                  </div>
                  <div className="phoneFlex2">
                    <div>
                      <p>+1-303-775-3638</p>
                    </div>
                    <div>
                      <p>brandonscottcox@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
