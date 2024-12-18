import {useNavigate} from "react-router-dom"
import { useEffect,useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'

const About = () => {
    const [fade, setFade] = useState(true)

    const navigate = useNavigate()
    
    const toggleFade = (value:string) =>{
        setFade(!fade)
        setTimeout(()=>{
            navigate(`/${value}`)
        },500)
    }
    
    useEffect(()=>{
        setTimeout(()=>{
            setFade(!fade)
        },10)
    },[])

    return (
      <div className={`${fade ? "fade-out" : "fade-in"}`}>
        <nav>
          <div id="navLinks">
            <div id="Home">
              <button onClick={() => toggleFade("")}>Home</button>
            </div>
            <div id="Links">
              <button className="activeLink">About</button>
              <button onClick={() => toggleFade("Projects")}>Projects</button>
              <button onClick={() => toggleFade("Contact")}>Contact</button>
            </div>
          </div>
          <div id="navMain">
            <h2>Here you can u can find all the main info about me:</h2>
          </div>
        </nav>
        <section>
          <article>
            <h2>Summary: </h2>
            <p>
              Experienced full-stack developer with a degree from Developers Institute in Tel Aviv. Skilled in front-end and back-end
              development. Achieved 2nd place in the first hackathon and 1st place in the second hackathon during DI bootcamp, showcasing
              strong problem-solving abilities and collaborative skills. Former esports enthusiast with a background in competitive gaming,
              demonstrating strategic thinking and dedication to excellence. Proven track record of successfully delivering projects on time
              and exceeding client expectations. Strong problem-solving abilities and excellent communication skills. Former director in the
              film industry with a passion for learning and staying updated on the latest technology trends. Eager to leverage my diverse
              background and technical expertise to contribute to your project.
            </p>
          </article>
          <article>
            <h2>My Skills</h2>
            <ul>
              <li>
                <b>Programming Languages:</b> JavaScript, Python, TypeScript
              </li>
              <li>
                <b>Web Development:</b> React.js, Node.js, Express.js, Redux.js, Redux Saga, Next.js, HTML, CSS, Tailwind CSS
              </li>
              <li>
                <b>Database Management:</b> MySQL, PostgreSQL, MangoDB, Drizzle ORM
              </li>
              <li>
                <b>Version Control:</b> Git, GitHub, Gitlab
              </li>
              <li>
                <b>Problem Solving:</b> Divide problems into smaller pieces, and even if you have millions of them, solving each one makes
                it fewer
              </li>
              <li>
                <b>Language:</b> Fluent english, Native Russian, Intermediate Hebrew{" "}
              </li>
            </ul>
          </article>
          <button onClick={() => navigate("/CV")}>Show CV</button>
        </section>
        <footer>
          <a href="https://github.com/flet1234" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon style={{ fontSize: "20px" }} icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/maksim-gold-453429139/" target="_blank" rel="noopener noreferrer">
            My Linkedin
          </a>
          <h6>&copy; {new Date().getFullYear()}</h6>
        </footer>
      </div>
    );
}

export default About