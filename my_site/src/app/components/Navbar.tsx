import Sun from "./Sun";

const Navbar = () => {
  return (
    <nav className="h-24 flex bg-sky-700 justify-between items-center px-20 text-slate-200">
      <div>
        <h1 className="text-5xl font-black">Maksim Gold</h1>
        <h2 className="text-xl font-black">Full Stack Developer</h2>
      </div>
      <Sun />
      <ul className="flex space-x-10 text-xl">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
