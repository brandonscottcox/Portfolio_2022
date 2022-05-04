import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import "./Resume.css";
import ReactPDF from "./ReactPDF";

export default function Resume() {
  const [zoom, setZoom] = useState(false);

  const showZoom = () => setZoom(!zoom);

  return (
    <>
      <div>
        {/* <div>
          <Header sidebar={sidebar} setSidebar={setSidebar} />
        </div> */}
        <div className="ResumeBackground">
          <div className="ResumeBorder">
            <h1>Resume.</h1>
            <div className="ReactPDF">
              <ReactPDF zoom={zoom} />
              <AiIcons.AiOutlineZoomIn onClick={showZoom} />
              <a href="../Resume.pdf" download>
                <AiIcons.AiOutlineDownload />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
