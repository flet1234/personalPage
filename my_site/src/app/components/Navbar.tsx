import MobileDropdown from "./MobileDropdown";
import Sun from "./Sun";

const Navbar = () => {
  return (
    <nav className="h-20 bg-sky-700">
      <div className="h-20 px-2 text-slate-200 dark:text-slate-300 flex items-center justify-between relative md:max-w-screen-md mx-auto">
        <div className="flex flex-col tracking-tight">
          <h1 className="text-2xl font-black">Maksim Gold</h1>
          <h2 className="text-lg font-bold ">Full Stack Developer</h2>
        </div>
        <Sun />
        <ul className="hidden md:flex space-x-5 text-xl mr-10">
          <li className="hover:scale-110 transform transition-all">
            <a href="#home">Home</a>
          </li>
          <li className="hover:scale-110 transform transition-all">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:scale-110 transform transition-all">
            <a href="#about">About</a>
          </li>
          <li className="hover:scale-110 transform transition-all">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:scale-110 transform transition-all">
            <a href="#contacts">Contact</a>
          </li>
        </ul>
        <MobileDropdown />
      </div>
    </nav>
  );
};

export default Navbar;
