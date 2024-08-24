import { PageTitle } from "../../components";
import Form from "./components/Form";

const ContactUs = () => {
  return (
    <div className="flex flex-col pt-10 md:pt-32">
      <PageTitle title="Contact Us" sub="Home &gt; Contact Us" />
      <Form />
    </div>
  );
};

export default ContactUs;
