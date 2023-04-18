import * as React from "react";
import "./styles.css";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Project } from "./Project";
import first from "./images/1.jpg";
import second from "./images/2.jpg";
import third from "./images/3.jpg";
import fourth from "./images/4.jpg";
import fifth from "./images/5.jpg";
import sixth from "./images/6.jpg";
import seventh from "./images/7.jpg";
import eighth from "./images/8.jpg";
import ninth from "./images/9.jpg";
import tenth from "./images/10.jpg";

export default function App() {
  const images = [
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eighth,
    ninth,
    tenth
  ];
  const [index, setIndex] = React.useState(null);
  console.log(index);
  return (
    <div className="App">
      <div className="gallery">
        {images.map((image, idx) => {
          return (
            <Project
              img={image}
              idx={idx}
              index={index}
              setIndex={setIndex}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
}
