import React, { useState } from "react";
import { FiChevronDown, FiChevronLeft } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

function App() {
  const [showText, setShowText] = useState(false);
  const onClick = () => {
    setShowText((prev) => !prev);
  };
  const Text = () => (
    <div className="Container">
      <div className="Container1" onClick={onClick1}>
        <div className="Inside-Container1">
          How doues Parknameseperate
          <small className={showText ? "rotated1" : "rotate1"}>
            <FiChevronLeft />
          </small>
        </div>
        {showText1 ? <Text1 /> : null}
      </div>
      <div className="Container2" onClick={onClick2}>
        <div className="Inside-Container2">
          Is Parkname Parking actually free ?
          <small>
            <FiChevronLeft />
          </small>
        </div>
        {showText2 ? <Text2 /> : null}
      </div>
      <div className="Container3" onClick={onClick3}>
        <div className="Inside-Container3">
          What you do?
          <small>
            <FiChevronLeft />
          </small>
        </div>
        {showText3 ? <Text3 /> : null}
      </div>
      <div className="Container4" onClick={onClick4}>
        <div className="Inside-Container4">
          When was Parkname first founded?
          <small>
            <FiChevronLeft />
          </small>
        </div>
        {showText4 ? <Text4 /> : null}
      </div>
    </div>
  );
  const Text1 = () => (
    <div className="text1">
      Your domain are a valuable online property. As in any investment, you want
      the most efficient, easy way to make sure your property is going to be
      profitable. Do you own more than 1,000 domains? As a professional
      domainer, you will find everything you need through Parkname to generate
      maximum profit from your
    </div>
  );
  const Text2 = () => <div className="text2">Yes it's free</div>;
  const Text3 = () => <div className="text3">I don't know</div>;
  const Text4 = () => (
    <div className="text4">Well we need ask KosovoOutSource about that</div>
  );
  const [showText1, setShowText1] = useState(false);
  const onClick1 = () => {
    setShowText1((prev) => !prev);
  };
  const [showText2, setShowText2] = useState(false);
  const onClick2 = () => {
    setShowText2((prev) => !prev);
  };
  const [showText3, setShowText3] = useState(false);
  const onClick3 = () => {
    setShowText3((prev) => !prev);
  };
  const [showText4, setShowText4] = useState(false);
  const onClick4 = () => {
    setShowText4((prev) => !prev);
  };
  return (
    <div className="App">
      <div className="About-Us">
        <div className="test" onClick={onClick}>
          <div className="Icon-container">
            <AiOutlineUser className="icon" />
          </div>
          <div className="about-us">
            <small>
              About Us <br />
              <small className="grey">4 articles in this Topic</small>
            </small>
          </div>
          <small className={showText ? "rotated" : "rotate"}>
            <FiChevronDown />
          </small>
        </div>
        {showText ? <Text /> : null}
      </div>
    </div>
  );
}

export default App;
