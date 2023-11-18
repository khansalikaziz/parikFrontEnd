import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/net.jpg";
import projImg2 from "../assets/img/music.png";
import projImg3 from "../assets/img/netflixpic.png";
import projImg4 from "../assets/img/NETLAN.png";
import projImg5 from "../assets/img/HLO.png";
import projImg5 from "../assets/img/AI.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Netflix Clone",
      description: "FakeNetflix",
      imgUrl: projImg1,
      link:"https://github.com/parikshitverma07/Netflixclone"
    },
    {
      title: "Music Player",
      description: "Listening Music",
      imgUrl: projImg2,
      link:"https://github.com/TechboyVerma/Music-Player--Master"
    },
    {
      title: "Netflix Clone Apk-UI",
      description: "Netflix Ui",
      imgUrl: projImg3,
      link:"https://github.com/TechboyVerma/Netflix-clone-apk"
    },
    {
      title: "Radom App Ui",
      description: "Ui",
      imgUrl: projImg4,
      link:"https://github.com/TechboyVerma/example_viewpager2"
    },
    {
      title: "Personal Portfolio",
      description: "Portfolio",
      imgUrl: projImg5,
      link:"https://github.com/TechboyVerma/Personal-Portfolio"
    },
    {
      title: "Voice Assistant",
      description: "Voice AI ASSISTANT ",
      imgUrl: projImg6,
      link:"https://github.com/TechboyVerma/My-projects"
    },
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div  className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>To be updated with new projects.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>To be updated with new projects.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
