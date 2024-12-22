import ButtonLink from "./ButtonLink";

const Project = ({
  name,
  description,
  text,
  githubLink,
  demoLink,
  type
}: {
  name: string;
  description: string;
  text: string;
  githubLink: string;
  demoLink: string;
  type: "blue" | "white";
}) => {
  return (
    <div className="flex flex-col py-2 text-textColor border-b-2 border-secondBackground border-dashed last:border-0">
      <div className="flex gap-4 items-center justify-between">
        <h2 className="text-xl font-bold text-secondBackground">{name}</h2>
        <div className="flex gap-4">
          <ButtonLink name={"Github"} link={githubLink} type={type} />
          <ButtonLink name={"Demo"} link={demoLink} type={type} />
        </div>
      </div>
      <h3 className="text-md font-semibold">{description}</h3>
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default Project;
