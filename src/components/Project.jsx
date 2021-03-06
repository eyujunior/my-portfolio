import Soccer from "../assets/img/sportdata.png";
import Manage from "../assets/img/manage.JPG";
import Danny from "../assets/img/danny.JPG";
import Easy from "../assets/img/easy.png";
import Cocktail from "../assets/img/cocktail.jpg";
const Project = () => {
  return (
    <section id="work" className="">
      <div className="project-container">
        <div className="flex items-start md:space-x-4 space-y-6 mb-8 md:mb-24 flex-col lg:flex-row">
          <div className="left">
            <h1 className="text-2xl md:text-4xl font-title mb-4 font-bold capitalize">
              BigLeagues
            </h1>
            <div className="flex items-center space-x-2 mb-4 flex-wrap space-y-2">
              <span className="px-4 py-2 rounded-md bg-tagLight">React</span>
              <span className="px-4 py-2 rounded-md bg-tagLight">Css</span>
              <span className="px-4 py-2 rounded-md bg-tagLight">API</span>
            </div>
            <p className="text-base mb-6 leading-relaxed capitalize">
              BigLeagues is a react web app that shows standing, top scorers &
              previous matches for english premier league and serie A in the
              last 10 days.It uses an api to get the data and displays it in a
              nice way.
            </p>

            <div className="flex space-x-4 justify-center lg:justify-start">
              <button className="px-6 py-2 bg-primary text-white border border-primary text-base rounded-md">
                <a
                  href="https://eyu-soccer.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </button>

              <button className="px-6 py-2 bg-transparent text-secondary border border-current text-base rounded-md">
                <a
                  href="https://github.com/eyujunior/Soccer"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </button>
            </div>
          </div>
          <div className="right">
            <img src={Soccer} alt="danny design" className="w-full shadow-lg" />
          </div>
        </div>

        <div className="flex mb-8 md:mb-24 md:flex-row-reverse flex-col">
          <div className="left md:ml-24">
            <h1 className="text-2xl md:text-4xl font-title mb-4 font-bold capitalize">
              Danny photography Studio
            </h1>
            <div className="flex items-center space-x-2 mb-4 flex-wrap space-y-2">
              <span className="px-4 py-2 rounded-md bg-tagLight">Html</span>
              <span className="px-4 py-2 rounded-md bg-tagLight">Scss</span>
              <span className="px-4 py-2 rounded-md bg-tagLight">GSAP</span>
            </div>
            <p className="text-base mb-6 leading-relaxed capitalize">
              Danny studio is a professional photo and video service based in
              Addis Ababa, Ethiopia.This is a Landing page for there website.
            </p>

            <div className="flex space-x-4 justify-center lg:justify-start mb-6">
              <button className="px-6 py-2 bg-primary text-white border border-primary text-base rounded-md">
                <a
                  href="https://eyujunior.github.io/Danny-photography/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </button>

              <button className="px-6 py-2 bg-transparent text-secondary border border-current text-base rounded-md">
                <a
                  href="https://github.com/eyujunior/Danny-photography"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </button>
            </div>
          </div>
          <div className="right">
            <img
              src={Danny}
              alt="danny design"
              className="w-full shadow-2xl min-h-full"
            />
          </div>
        </div>

        {/* Third */}
        <div className="flex items-start md:space-x-4 space-y-6 mb-8 md:mb-24 flex-col lg:flex-row">
          <div className="left">
            <h1 className="text-2xl md:text-4xl font-title mb-4 font-bold capitalize">
              Cocktail Recipes
            </h1>
            <div className="flex items-center space-x-2 mb-4 flex-wrap space-y-2">
              <span className="px-4 py-2 rounded-md bg-tagLight">React</span>
              <span className="px-4 py-2 rounded-md bg-tagLight">Tailwind</span>
              <span className="px-4 py-2 rounded-md bg-tagLight">
                Redux Toolkit
              </span>
              <span className="px-4 py-2 rounded-md bg-tagLight">API</span>
            </div>
            <p className="text-base mb-6 leading-relaxed capitalize">
              This web app Built using react, tailwind, and redux toolkit that
              uses the
              <a href="https://www.thecocktaildb.com/api.php">
                The Cocktail DB
              </a>
              Api to fetch cocktail recipes. It has the features for users to
              search their favourite drinks and save it on there localstorage
            </p>

            <div className="flex space-x-4 justify-center lg:justify-start">
              <button className="px-6 py-2 bg-primary text-white border border-primary text-base rounded-md">
                <a
                  href="https://eyu-cocktail.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </button>

              <button className="px-6 py-2 bg-transparent text-secondary border border-current text-base rounded-md">
                <a
                  href="https://github.com/eyujunior/cocktail"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </button>
            </div>
          </div>
          <div className="right">
            <img
              src={Cocktail}
              alt="danny design"
              className="w-full shadow-lg"
            />
          </div>
        </div>

        <div className="flex mb-8 md:mb-24 md:flex-row-reverse flex-col">
          <div className="left md:ml-24">
            <h1 className="text-2xl md:text-4xl font-title mb-4 font-bold capitalize">
              Manage Landing
            </h1>
            <div className="flex items-center space-x-2 mb-4 flex-wrap space-y-2">
              <span className="px-4 py-2 rounded-md bg-tagLight">React</span>
              <span className="px-4 py-2 rounded-md bg-tagLight">Css</span>
            </div>
            <p className="text-base mb-6 leading-relaxed capitalize">
              This website is a challenge from front-end mentors.it main focus
              was to make it responsive and demonstrate my skill of taking any
              design and making it live in the browser.
            </p>

            <div className="flex space-x-4 justify-center lg:justify-start mb-6">
              <button className="px-6 py-2 bg-primary text-white border border-primary text-base rounded-md">
                <a
                  href="https://eyujunior.github.io/manage-landing-page/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </button>

              <button className="px-6 py-2 bg-transparent text-secondary border border-current text-base rounded-md">
                <a
                  href="https://github.com/eyujunior/manage-landing-page"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </button>
            </div>
          </div>
          <div className="right">
            <img
              src={Manage}
              alt="danny design"
              className="w-full shadow-2xl min-h-full"
            />
          </div>
        </div>
        <div className="flex items-start md:space-x-4 space-y-6 mb-8 md:mb-24 flex-col lg:flex-row">
          <div className="left">
            <h1 className="text-2xl md:text-4xl font-title mb-4 font-bold capitalize">
              Perfect Score website
            </h1>
            <div className="flex items-center space-x-2 mb-4 flex-wrap space-y-2">
              <span className="px-4 py-2 rounded-md bg-tagLight">Html</span>
              <span className="px-4 py-2 rounded-md bg-tagLight">Scss</span>
            </div>
            <p className="text-base mb-6 leading-relaxed capitalize">
              a Frontend mentors Challenge I did with focus on getting Perfect
              Score on Google Lighthouse test for (Accessibility, performance,
              best practice and SEO)
            </p>

            <div className="flex space-x-4 justify-center lg:justify-start">
              <button className="px-6 py-2 bg-primary text-white border border-primary text-base rounded-md">
                <a
                  href="https://eyu-easy-bank.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </button>

              <button className="px-6 py-2 bg-transparent text-secondary border border-current text-base rounded-md">
                <a
                  href="https://github.com/eyujunior/easy-bank"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </button>
            </div>
          </div>
          <div className="right">
            <img src={Easy} alt="danny design" className="w-full shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
