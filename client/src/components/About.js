import React from "react";
import Img1 from "../img/img1.svg";
import Img2 from "../img/img2.svg";
import Img3 from "../img/img3.svg";
const About = () => {
  return (
    <div className="about-me">
      <div className="about-me-description">
        <h3>Who am i and what am i doing</h3>
        <p>
          Well as you maybe know kjdahskd asdgasg dasdg jkasgd jasgdvj asdvg
          jasvd asvdj asfd asfdj asfd kajsfdjavf kjdahskd asdgasg dasdg jkasgd
          jasgdvj asdvg jasvd asvdj asfd asfdj asfd kajsfdjavf kjdahskd asdgasg
          dasdg jkasgd jasgdvj asdvg jasvd asvdj asfd asfdj asfd kajsfdjavf
          kjdahskd asdgasg dasdg jkasgd jasgdvj asdvg jasvd asvdj asfd asfdj
          asfd kajsfdjavf kjdahskd asdgasg dasdg jkasgd jasgdvj asdvg jasvd
          asvdj asfd asfdj asfd kajsfdjavf kjdahskd asdgasg dasdg jkasgd jasgdvj
          asdvg jasvd asvdj asfd asfdj asfd kajsfdjavf kjdahskd asdgasg dasdg
          jkasgd jasgdvj asdvg jasvd asvdj asfd asfdj asfd kajsfdjavf kjdahskd
          asdgasg dasdg jkasgd jasgdvj asdvg jasvd asvdj asfd asfdj asfd
          kajsfdjavf kjdahskd asdgasg dasdg jkasgd jasgdvj asdvg jasvd asvdj
          asfd asfdj asfd kajsfdjavf kjdahskd asdgasg dasdg jkasgd jasgdvj asdvg
          jasvd asvdj asfd asfdj asfd kajsfdjavf kjdahskd asdgasg dasdg jkasgd
        </p>
        <button className="read-more-btn">View More</button>
      </div>
      <div>
        <div className="img-slides">
          <div className="first-img-slide">
            <img src={img1} alt="slide1" />
          </div>
          <div className="second-img-slide">
            <img src={img2} alt="slide2" />
            <img src={img3} alt="slide3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
