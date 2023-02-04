import React from "react";
import Img1 from "../img/img1.svg";
import Img2 from "../img/img2.svg";
import Img3 from "../img/img3.svg";
import "../style/aboutme.css";
const About = () => {
  return (
    <div className="about-me">
      <div className="about-me-description">
        <h1>Who am i and what am i doing</h1>
        <p>
          My journey with software development starts in High school for
          Electrical Engineering which i enrolled in 2016. Through my education
          in high school, I learned the basic concepts of programming languages.
          The first big step which I made for my web Development education was
          enrolling at Html&Css course. After that course I continued exploring
          web development, so I enrolled in a Wordpress course. This gives me
          good basic knowledge. The first bigger project for me was ordering
          food, made in C# and mysql. This is a high school project. After high
          school I continued with my web development steps and IT career, so I
          enrolled at International Burch University, IT department. I love
          competitions, especially hackathons. In 2020. I was part of a
          hackathon organized by Prointer. Also, I was a competitor in
          hackathons organized by Best Mostar in 2021 and 2022, and in a
          hackathon by ZenDev in 2022. In 2021. My team won the Social Impact
          Award for an ecology project (the application is currently in
          development); this competition was organized in cooperation with the
          Mozaik Foundation. In that year I became a BH Futures Foundation
          junior scholar, and a year later, I was promoted to senior scholar. BH
          Futures Foundation, through webinars and meetings provides me with
          really good general knowledge like time organization, body health,
          time management and economy... In the covid-19 period I tried to make
          good use of time, so I took JavaScript on Udemy. During my time at the
          university, I learned a bunch of new things and worked on different
          projects. Among those projects my favorite is a web shop for
          motorcycles using PHP, JQuery, MySQL. The Subject that I liked a lot
          is Algorithms and Data Structures, we deployed these algorithms using
          Java. Also database deployment seems fun to me, I have deployed
          different databases using MongoDB and MySQL. Beside that I continued
          to work on my skills, so I learned how to work with react, currently,
          I'm working on my backend skills using spring boot. The IT team at BH
          Futures Foundation recognizes my work, and I'm currently a volunteer
          in their team.
        </p>
        {
          //<button className="read-more-btn">View More</button>
        }
      </div>

      <div className="img-slides">
        <div className="first-img-slide">
          <img src={Img1} alt="slide1" className="slide-img-1 img" />
        </div>
        <div className="second-img-slide">
          <img src={Img2} alt="slide2" className="slide-img-2 img" />
          <img src={Img3} alt="slide3" className="slide-img-3 img" />
        </div>
      </div>
    </div>
  );
};

export default About;
