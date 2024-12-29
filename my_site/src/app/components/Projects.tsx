import HeaderAnimation from "./HeaderAnimations";
import Project from "./Project";

const Projects = () => {
  return (
    <section className="flex flex-col justify-center py-2 px-4 md:max-w-screen-md mx-auto" id="projects">
      <h1 className="text-3xl font-black text-secondBackground w-full">
        <HeaderAnimation name="Projects" borderColor="secondBackground" />
      </h1>
      <article className="flex flex-col gap-2 md:flex-row md:flex-wrap md:gap-4 md:justify-around">
        <Project
          name={"MoviePicker"}
          description={"Developed a front-end web application for browsing popular movies and marking favorites."}
          text={
            "Implemented frontend using JavaScript, React, Redux and Redux Saga on Vite, ensuring a fast and responsive user interface. For a backend i used The Movie Database API, to get all the data about movies."
          }
          githubLink={"https://github.com/flet1234/FlexTestCase"}
          demoLink={"https://flextestcase.onrender.com/"}
          type={"blue"}
        />
        <Project
          name={"Hairdresser booker"}
          description={"Created a web application that organizes the workdays of hairdressers or salons."}
          text={
            "Developed backend using TypeScript, Node.js, and PostgreSQL, resulting in a robust and scalable server-side infrastructure. Implemented frontend using TypeScript, React, and Redux on Vite, ensuring a fast and responsive user interface."
          }
          githubLink={"https://github.com/flet1234/hairdresserBooking"}
          demoLink={"https://hairdresserbooking.onrender.com"}
          type={"blue"}
        />
      </article>
    </section>
  );
};

export default Projects;
