import React from "react";
import { Helmet } from "react-helmet-async";
import p1 from "../../images/f.jpg";
const About = () => {
  return (
    <div className=" container">
      <Helmet>
        <title>About - Trainer</title>
      </Helmet>
      <div>
        <h1 className="text-center fs-2 fw-bold">About Me</h1>
        <img className="w-25" src={p1} alt="about me images" />
        <p>
         <strong> Professional Journey :</strong> More than 07 years, I am working as a Trainer
          with well-reputed National and International organization, for
          example, 10minschools, Bangladesh Garments Manufacturers and Exporters
          Association (BGMEA), International Labor Organization (ILO),
          International Training Centre (ITC). Moreover, I am also severing as a
          National Training Framework builder for developing a2i project which
          incorporates by TVET (i4.0 concept) Singapore Polytechnic as well as
          TEMASEK FOUNDATION.{" "}
        </p>
        <p>Goal now: <strong>Honest and dedicated Web development Trainer or Coach</strong></p>
      </div>
    </div>
  );
};

export default About;
