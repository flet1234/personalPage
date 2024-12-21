const Footer = () => {
    return (
      <footer className="h-24 flex bg-background justify-between items-center px-20 text-slate-200 p-2">
        <div className="flex text-secondBackground text-sm">
          <ul className="flex flex-col">
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
        </div>
      </footer>
    );
}
    
export default Footer;