import React from "react";
import { Link } from "react-router-dom";
import List from "../../config/List";
import "./GridContainer.css";
import GridContainerEach from "./GridContainerEach";
const GridContainer = () => {
  return (
    <div className="GridContainer-main">
      <ul className="grid-container">
        {List.map((item) => {
          return (
            <GridContainerEach
              siteLink={item.siteLink}
              projectLinkGithub={item.projectLinkGithub}
              title={item.title}
              description={item.description}
              skill={item.skill}
              projectImage={item.projectImage}
            />
          );
        })}
      </ul>

      
      <Link to="/archive" className="intro-button archive-btn">
        <Link to="/archive">Archive</Link>
      </Link>
    </div>
  );
};

export default GridContainer;
