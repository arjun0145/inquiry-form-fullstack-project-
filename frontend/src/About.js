import React from "react";
import "./About.css";
import { Container, Alert } from "react-bootstrap";

function About() {
  return (
    <div>
      <Container>
        <Alert className="text-center mt-3 bg-primary text-light">
          {" "}<b>          Here is About Our Vision And Motivation</b>
        </Alert>
      </Container>
      <Container  className="bg-info mt-5">
        <p id="mainpara">
          <Container className='mt-5'>
            <br />
          <h3 id="why" align="center">
            {" "}
            WHY US
          </h3>
          
          Our single – minded devotion to deliver result oriented customized
          services that are scalable, value driven and highly competitive – both
          in terms of cost and expertise. We review and improvise our services
          to offer you solution that meet your needs strive for your success by
          staying abreast with the latest technology. Our programmes are
          designed as per the industry requirement and keeping in mind the
          placement opportunities and self-employment. We encourage you to think
          imaginatively & recognize your speed, innovativeness, creativity &
          pioneering zeal. Innovation in technology, training, staffing and
          Consulting.
          <br />

          </Container>

          <Container className='mt-3'>
          <h3 id="history" align="center">
            HISTORY
          </h3>
          Universal Informatics is an ISO 9001:2008 Certified, process driven IT
          Services Company, offering a wide range of end-to-end services in the
          IT. Our Services range from Designing, Development, Training, and
          Customize Corporate Solutions. Universal Informatics is a recognized
          leader in Training and Software Development industry. With a vision of
          creating a competitive advantage with Software and becoming the most
          valued partner of our clients, we deliver high quality Business
          Management Solutions.
          <br />
          </Container>

          <Container className='mt-3'>
          <h3 id="mission" align="center">
            {" "}
            MISSION & VISION
          </h3>
          We foster career building by creating opportunities that demand
          learning, thinking and innovation from each one of us. Through
          expression of transparency and commitment towards work & our work
          team, we successfully seek to create an excellent environment within &
          across the company. To bring into focus the application oriented
          training. To provide right training for the right placementWe seek to
          play a key role in the direction and deployment of the technology and
          know how for the benefit of mankind. We have pool of industry
          experienced faculty members who are well qualified and have in-depth
          understanding and extensive knowledge about various issues. Their
          exhaustive industry experience and immense expertise regarding various
          realms have enabled the students in developing an improved perceptive
          regarding the applications in the allied fields. Our faculty guides
          the students through various technical aspects, their practical
          applications as well as recent up gradations which enable them to
          sensibly develop their understanding and skills in varied industry.
          </Container>
        </p>
       
      </Container>
    </div>
  );
}

export default About;
