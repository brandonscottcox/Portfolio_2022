import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import "./Resume.css";
import ReactPDF from "./ReactPDF";
import Header2 from "../Header/Header2";
import { IconContext } from "react-icons";

export default function Resume() {
  const [zoomIn, setZoomIn] = useState(0);
  const [sidebar, setSidebar] = useState(false);

  const showZoomIn = () => setZoomIn(zoomIn >= 0 ? zoomIn + 1 : 0);
  const showZoomOut = () => setZoomIn(zoomIn <= 0 ? zoomIn -1 : 0);

  console.log(zoomIn)

  return (
    <>
      <div>
        {/* <div>
          <Header2 sidebar={sidebar} setSidebar={setSidebar} />
        </div> */}
        <div className={zoomIn > 0 ? "ZoomResumeBackground" : "ResumeBackground"}>
          <div className="ResumeBorder">
            <h1>Resume.</h1>
            <div className="ReactPDF">
              <IconContext.Provider value={{ color: "#fff", size: "30px" }}>
              <div className={zoomIn > 0 ? "ZoomInResumeUI" : zoomIn < 0 ? "ZoomOutResumeUI" : "ResumeUI"}>
                  <div className="border"></div>
                  <div className="ZoomUI">
                    <hr />
                    <button>
                      <AiIcons.AiOutlineZoomIn onClick={showZoomIn} />
                    </button>
                    <hr />
                    <button>
                      <AiIcons.AiOutlineZoomOut onClick={showZoomOut} />
                    </button>
                    <hr />
                  </div>
                  <div className="DownloadUI">
                    <hr />
                    <button>
                      <a href="../Resume.pdf" download>
                        <AiIcons.AiOutlineDownload />
                      </a>
                    </button>
                    <hr />
                  </div>
                </div>
              </IconContext.Provider>
              <ReactPDF zoom={zoomIn} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
