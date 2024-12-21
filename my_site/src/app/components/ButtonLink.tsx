const ButtonLink = ({ name, link, type }: { name: string; link: string; type: string }) => {
  return (
    <button
      className={`p-2 rounded-lg text-sm ${
        type === "blue" ? "text-background bg-secondBackground hover:bg-sky-800" : "text-secondBackground bg-background hover:bg-slate-300"
      } transition duration-300 ease-in-out`}
    >
      <a href={link} target="_blank">
        {name}
      </a>
    </button>
  );
};

export default ButtonLink;
