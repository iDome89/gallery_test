import React from "react";
import proj1 from "./images/11.jpg";
import proj2 from "./images/12.jpg";
import classNames from "classnames";

export const Project = (props) => {
  const { img, setIndex, idx, index } = props;

  const onImageClick = (id) => {
    setIndex(id);
  };

  return (
    <div
      className={classNames(
        "project-container",
        index === idx && "project-open"
      )}
    >
      <img
        className={index === idx ? "sub-grid-image" : "default-img"}
        src={img}
        alt={`pic-${idx}`}
        onClick={
          index !== idx ? () => onImageClick(idx) : () => onImageClick(null)
        }
      />
      {index === idx && (
        <>
          <img className="sub-grid-image" src={proj1} alt="proj1" />
          <img className="sub-grid-image" src={proj2} alt="proj2" />
        </>
      )}
    </div>
  );
};
