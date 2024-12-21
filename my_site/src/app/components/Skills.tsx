const Skills = () => {
  return (
    <div className="bg-secondBackground w-full">
      <section className="flex flex-col justify-center p-2" id="skills">
        <h1 className="text-3xl font-black text-background w-full border-b-2 border-background">Skills</h1>
        <article className="text-background text-sm">
          <p>
            <span className="font-semibold">Programming Languages:</span> JavaScript, Python, TypeScript.
          </p>
          <p>
            <span className="font-semibold">Web Development:</span>React.js, Node.js, Express.js, Redux.js, Redux Saga, Next.js, HTML, CSS,
            Tailwind CSS.
          </p>
          <p>
            <span className="font-semibold">Database Management:</span>MySQL, PostgreSQL, MangoDB, Drizzle ORM.
          </p>
          <p>
            <span className="font-semibold">Version Control:</span>Git, GitHub, Gitlab
          </p>
          <p>
            <span className="font-semibold">Languages:</span>Fluent english, Native Russian, Intermediate Hebrew
          </p>
        </article>
      </section>
    </div>
  );
};

export default Skills;
