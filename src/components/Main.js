import Tiles from "./Tiles";
import { useState, useEffect } from "react";
function Main() {
  const puppies = [
    "https://frontendeval.com/images/puppy-1.jpeg",
    "https://frontendeval.com/images/puppy-2.jpeg",
    "https://frontendeval.com/images/puppy-3.jpeg",
    "https://frontendeval.com/images/puppy-4.jpeg",
    "https://frontendeval.com/images/puppy-5.jpeg",
    "https://frontendeval.com/images/puppy-6.jpeg",
    "https://frontendeval.com/images/puppy-7.jpeg",
    "https://frontendeval.com/images/puppy-8.jpeg",
    "https://frontendeval.com/images/puppy-9.jpeg",
    "https://frontendeval.com/images/puppy-10.jpeg",
    "https://frontendeval.com/images/puppy-11.jpeg",
    "https://frontendeval.com/images/puppy-12.jpeg",
  ];

  const kittens = [
    "https://frontendeval.com/images/kitten-1.jpeg",
    "https://frontendeval.com/images/kitten-2.jpeg",
    "https://frontendeval.com/images/kitten-3.jpeg",
    "https://frontendeval.com/images/kitten-4.jpeg",
    "https://frontendeval.com/images/kitten-5.jpeg",
    "https://frontendeval.com/images/kitten-6.jpeg",
    "https://frontendeval.com/images/kitten-7.jpeg",
    "https://frontendeval.com/images/kitten-8.jpeg",
    "https://frontendeval.com/images/kitten-9.jpeg",
    "https://frontendeval.com/images/kitten-10.jpeg",
    "https://frontendeval.com/images/kitten-11.jpeg",
    "https://frontendeval.com/images/kitten-12.jpeg",
  ];

  const [display, setDisplay] = useState();

  function clickedImg(event) {
    setDisplay((prevDisplay) => event.target.src);
  }

  console.log(display);
  return (
    <div className="container">
      <div className="button-container">
        <button className="button-pause">Paws</button>
      </div>

      <div>
        <Tiles animal={puppies} clickedImg={clickedImg} />
        <Tiles animal={kittens} clickedImg={clickedImg} />
      </div>
      <div className="enlarged-container">
        {display ? (
          <img className="enlarged-image" src={`${display}`} alt="animal pic" />
        ) : null}
      </div>
    </div>
  );
}

export default Main;
