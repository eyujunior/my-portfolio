import AboutImage from "../assets/icons/about.svg";
const About = () => {
  return (
    <div>
      <h1 className="text-center text-xl md:text-2xl xl:text-5xl mb-8">
        <span className="font-extralight">Hi, I'm </span>
        <span className="font-medium">Eyobel</span>
      </h1>
      <div className="flex items-start justify-around flex-col md:flex-row">
        <img src={AboutImage} alt="About" className="w-full md:w-1/3" />
        <div className="w-full sm:w-3/4 md:w-1/3">
          <p className="mb-2 bg-primary/50 text-dark p-4 rounded-md">
            I am a frontend developer at Mookoob. I love building web products.
            Right now I'm working on a social media platform for businesses
            based in Belgium.
          </p>
          <p className="p-4">
            I am someone who loves to always learn new things, explore new
            technologies and become a better Developer and a better Person while
            enjoying life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
