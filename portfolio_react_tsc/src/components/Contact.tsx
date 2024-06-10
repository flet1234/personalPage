import {useNavigate} from "react-router-dom"
import { useEffect,useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'

const Contact = () => {

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
        <div className={`${fade ? 'fade-out' : 'fade-in' }`}>
            <nav>
                <div id="navLinks">
                    <div id="Home">
                        <button onClick={()=>toggleFade('')}>Home</button>
                    </div>
                    <div id="Links">
                        <button onClick={()=>toggleFade('About')}>About</button>
                        <button onClick={()=>toggleFade('Projects')}>Projects</button>
                        <button className="activeLink">Contact</button>
                    </div>
                </div>
                <div id="navMain">
                    <h1>Contact page</h1>
                </div>
            </nav>
            <div className="container">
                <h1>Contact me: </h1>
                    <div className="form-group">
                        <p>Telephone: +972-523-620-160</p>
                    </div>
                    <div className="form-group">
                        <p>Email: flet1908@gmail.com</p>
                    </div>
                    <div className="form-group">
                        <p>City: Haifa, Yoqneam Illit </p>
                    </div>
            </div>
            <footer>
                <a href="https://github.com/flet1234" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon style={{fontSize:'20px'
                }} icon={faGithub}/>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">My Linkedin</a>
                <h6>&copy; {new Date().getFullYear()}</h6>
            </footer>
        </div>
    )
}

export default Contact