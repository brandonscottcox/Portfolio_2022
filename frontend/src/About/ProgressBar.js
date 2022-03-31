import * as React from 'react';
import "./About.css"

export default function ProgressBar({width, percent}) {
  

    return (
        <div className="container">
        <h1>Year progress</h1>
        <div className="progressbar-container">
          <div
            className="progressbar-complete"
            style={{ width: '10px' }}
          >
            <div className="progressbar-liquid"></div>
          </div>
          <span className="progress">%</span>
        </div>
      </div>
    )
}