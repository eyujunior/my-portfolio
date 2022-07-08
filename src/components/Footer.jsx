import { Link } from "react-router-dom";
import MessageImg from "../assets/img/message.png";

const Footer = () => {
  return (
    <div className="bg-primary relative h-56 w-screen">
      <img
        src={MessageImg}
        alt="message"
        className="absolute pos-top w-48 h-48 hidden lg:block"
      />
      <div className="flex items-center justify-center flex-col h-full">
        <h2 className="text-white font-title text-2xl sm:text-4xl capitalize mb-8 text-center">
          want to know more about me
        </h2>
        <div className="flex space-x-4">
          <Link to="/About">
            <button className="px-6 py-2 bg-white text-primary border border-primary text-base rounded-md ">
              About Me
            </button>
          </Link>
          <Link to="/contact">
            <button className="px-6 py-2 bg-transparent text-white  border-current text-base rounded-md border">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
