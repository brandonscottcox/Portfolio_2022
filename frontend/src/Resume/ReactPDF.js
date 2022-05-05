import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./Resume.css";
import { useMediaQuery } from 'react-responsive'



export default function ReactPDF({zoom}) {
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 481px)' })



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
            {isDesktop && <Page height={zoom > 0 ? "2000" : zoom < 0 ? "570" : "800" } pageNumber={pageNumber} onLoadSuccess={removeTextLayerOffset} /> }
            {isMobile && <Page height={zoom > 0 ? "1000" : zoom < 0 ? "300" : "570" } pageNumber={pageNumber} onLoadSuccess={removeTextLayerOffset} /> }
          </Document>
      </div>
    );
  }
