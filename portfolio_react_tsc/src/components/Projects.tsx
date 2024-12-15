import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  const [fade, setFade] = useState(true);

  const navigate = useNavigate();

  const toggleFade = (value: string) => {
    setFade(!fade);
    setTimeout(() => {
      navigate(`/${value}`);
    }, 500);
  };

  useEffect(() => {
    setTimeout(() => {
      setFade(!fade);
    }, 10);
  }, []);

  return (
    <div className={`${fade ? "fade-out" : "fade-in"}`}>
      <nav>
        <div id="navLinks">
          <div id="Home">
            <button onClick={() => toggleFade("")}>Home</button>
          </div>
          <div id="Links">
            <button onClick={() => toggleFade("About")}>About</button>
            <button className="activeLink">Projects</button>
            <button onClick={() => toggleFade("Contact")}>Contact</button>
          </div>
        </div>
        <div id="navMain">
          <h1>My demo projects</h1>
          <h4>Please be patient, some of them need 1-2 minutes because of cold server start</h4>
        </div>
      </nav>
      <div className="project_container">
        <div className="project">
          <h1>MoviePicker</h1>
          <h3>Developed a front-end web application for browsing popular movies and marking favorites.</h3>{" "}
          <a href="https://github.com/flet1234/FlexTestCase" target="_blank">
            Github
          </a>{" "}
          <a href="https://flextestcase.onrender.com/" target="_blank">
            Demo
          </a>
          <p>
            Implemented frontend using JavaScript, React, Redux and Redux Saga on Vite, ensuring a fast and responsive user interface. For a
            backend i used The Movie Database API, to get all the data about movies.
          </p>
        </div>
        <div className="project">
          <h1>Hairdresser booker</h1>
          <h3>Created a web application that organizes the workdays of hairdressers or salons.</h3>{" "}
          <a href="https://github.com/flet1234/hairdresserBooking/" target="_blank">
            Github
          </a>{" "}
          <a href="https://hairdresserbooking.onrender.com" target="_blank">
            Demo
          </a>
          <p>
            Developed backend using TypeScript, Node.js, and PostgreSQL, resulting in a robust and scalable server-side infrastructure.
            Implemented frontend using TypeScript, React, and Redux on Vite, ensuring a fast and responsive user interface.
          </p>
        </div>
      </div>
      <footer>
        <a href="https://github.com/flet1234" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon style={{ fontSize: "20px" }} icon={faGithub} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          My Linkedin
        </a>
        <h6>&copy; {new Date().getFullYear()}</h6>
      </footer>
    </div>
  );
};

export default Projects;
