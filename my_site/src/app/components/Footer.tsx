const Footer = () => {
    return (
      <footer className="bg-background dark:bg-black p-5 w-full">
        <div className="flex justify-between text-secondBackground text-sm gap-4 text-secondBackground">
          <ul className="flex flex-col">
            <h3 className="font-semibold text-textColor dark:text-textDarkColor">Site links:</h3>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contacts">Contact</a>
            </li>
          </ul>
          <ul className="flex flex-col">
            <h3 className="font-semibold text-textColor dark:text-textDarkColor">Project links:</h3>
            <li>
              <a href="https://flextestcase.onrender.com/" target="_blank" rel="noreferrer">
                MoviePicker
              </a>
            </li>
            <li>
              <a href="https://hairdresserbooking.onrender.com" target="_blank" rel="noreferrer">
                Hairdresser booker
              </a>
            </li>
          </ul>
          <ul className="flex flex-col">
            <h3 className="font-semibold text-textColor dark:text-textDarkColor">Outer links:</h3>
            <li>
              <a href="https://www.linkedin.com/in/maksim-gold-453429139/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/flet1234" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <h4 className="flex justify-end text-textColor dark:text-textDarkColor">© 2024 Maksim Gold</h4>
      </footer>
    );
}
    
export default Footer;