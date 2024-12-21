import { sendEmail } from "../api/route";

const ContactMessage = () => {

  async function submitText(formData: FormData) {
    "use server";

    const rawFormData = {
      message: formData.get("message")
    };

    if (!rawFormData.message) {
      return alert("Please enter a message");
    }

    sendEmail(rawFormData.message as string);
  }


    return (
        <form action={submitText} className="flex flex-col gap-2">
            <label htmlFor="message">Leave me a message:</label>
            <textarea rows={4} cols={1} placeholder="Max message length is 500" id="message" maxLength={500} name="message" className="text-textColor bg-background rounded resize-y"/>
            <button type="submit" className="p-2 text-sm rounded-lg border-background border-2 w-fit self-end">Send</button>
        </form> 
    );
}
    
export default ContactMessage