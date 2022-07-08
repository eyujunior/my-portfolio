import contactLight from "../assets/icons/contact-light.svg";
import Dots from "../assets/img/Dots.png";
const Contact = () => {
  return (
    <div className="md:mb-20 relative">
      <img
        src={Dots}
        alt="shape"
        className="absolute top-1/3 z-[-1] right-[-3rem]"
      />
      <h1 className="text-center text-xl md:text-2xl xl:text-5xl mb-6 md:mb-10">
        <span className="font-extralight">Get in </span>
        <span className="font-medium">Touch</span>
      </h1>
      <div className="flex items-start justify-evenly flex-col space-y-8 md:space-y-0 md:flex-row">
        <form className="flex items-center justify-between flex-col space-y-4">
          <input
            type="text"
            className="rounded-md capitalize shadow-lg border w-full border-gray-300 outline-none "
            placeholder="name"
          />
          <input
            type="text"
            className="rounded-md capitalize shadow-lg border w-full border-gray-300 outline-none "
            placeholder="Email"
          />
          <textarea
            className="rounded-md capitalize shadow-lg border w-full border-gray-300 outline-none "
            placeholder="message"
            rows="5"
            cols="25"
          ></textarea>
        </form>
        <img src={contactLight} alt="contact" className=" w-full md:w-1/3" />
      </div>
    </div>
  );
};

export default Contact;
