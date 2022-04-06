import React, { useState } from "react";
import Header from "../Header/Header";

function Projects() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <div>
        <Header sidebar={sidebar} setSidebar={setSidebar} />
      </div>
      <div>Projects</div>
    </>
  );
}

export default Projects;
