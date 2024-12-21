import ContactMessage from "./ContactMessage";

const Contacts = () => {

  return (
    <div className="bg-secondBackground w-full" id="contacts">
      <section className="flex flex-col justify-center p-2">
        <h1 className="text-3xl font-black text-background w-full border-b-2 border-background">Contacts</h1>
        <article className="text-background">
          <p>Telephone: +972-523-620-160</p>
          <p>Email: flet1908@gmail.com</p>
          <ContactMessage />
        </article>
      </section>
    </div>
  );
};

export default Contacts
