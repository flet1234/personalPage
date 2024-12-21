import About from "./components/About";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <About />
      <Skills/>
      <Projects />
      <Contacts/>
    </main>
  );
}
