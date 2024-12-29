import HeaderAnimation from "./HeaderAnimations";

const Contacts = () => {
  return (
    <div className="bg-secondBackground w-full" id="contacts">
      <section className="flex flex-col justify-center py-2 px-4 md:max-w-screen-md mx-auto">
        <h1 className="text-3xl font-black text-background w-full dark:text-slate-300">
          <HeaderAnimation name="Contacts" borderColor="background" />
        </h1>
        <article className="text-background dark:text-slate-300 mt-2">
          <p>Telephone: +972-523-620-160</p>
          <p>Email: flet1908@gmail.com</p>
        </article>
      </section>
    </div>
  );
};

export default Contacts;
