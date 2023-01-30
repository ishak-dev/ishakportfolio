import React from "react";
import homeImg from "../img/homeImg.svg";
import "../style/home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-description-section">
          <h1>
            Welcome to my portfolio, Here you can find everything about me
            <span className="fullname"> Ishak Kazić</span>
          </h1>
        </div>
        <div className="home-img-section">
          <img className="home-img" src={homeImg} alt="homeImg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
