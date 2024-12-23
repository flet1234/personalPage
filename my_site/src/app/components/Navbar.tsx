import MobileDropdown from "./MobileDropdown";
import Sun from "./Sun";

const Navbar = () => {
  return (
    <nav className="h-20 flex bg-sky-700 justify-between items-center px-2 text-slate-200">
      <div className="flex items-center">
        <div className="flex flex-col w-full">
          <h1 className="text-2xl font-black">Maksim Gold</h1>
          <h2 className="text-lg font-bold">Full Stack Developer</h2>
        </div>
        <Sun />
      </div>
      <ul className="hidden lg:flex space-x-10 text-xl ">
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
      <MobileDropdown />
    </nav>
  );
};

export default Navbar;
