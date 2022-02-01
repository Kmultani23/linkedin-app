import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Linked in sues programmer for cloning their app", `he said \"it was worth it\" - 59 comments`)}
      {newsArticle("Always improving ","I love to learn")}
      {newsArticle("In need of a laywer", "send help - me ")}
      {newsArticle("React is the best", " - 8000 readers")}
      {newsArticle("Is Redux too good?", "heres what programmers think")}
      {newsArticle("You should hire me!", "Top news - 1,000,000 readers")}
    </div>
  );
}

export default Widgets;