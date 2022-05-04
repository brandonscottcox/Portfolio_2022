import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

export default function ReactPDF({zoom}) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    pdfjs.GlobalWorkerOptions.workerSrc= `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
      setPageNumber(1);
    }
  
    function removeTextLayerOffset() {
      const textLayers = document.querySelectorAll(
        ".react-pdf__Page__textContent"
      );
      textLayers.forEach((layer) => {
        const { style } = layer;
        style.top = "0";
        style.left = "0";
        style.transform = ""
      });
    }
  
    return (
      <div>
          <Document file="/Resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            <Page height={zoom ? "2000" : "800"} pageNumber={pageNumber} onLoadSuccess={removeTextLayerOffset} />
          </Document>
      </div>
    );
  }
