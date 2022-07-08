import React from "react";

import Html from "../assets/icons/html.svg";
import Css from "../assets/icons/css.svg";
import js from "../assets/icons/js.svg";
import sass from "../assets/icons/sass.svg";
import vscode from "../assets/icons/vscode.svg";
import vue from "../assets/icons/vue.svg";
import git from "../assets/icons/git.svg";
import github from "../assets/icons/github.svg";
import xd from "../assets/icons/xd.svg";
import tailwind from "../assets/icons/tailwind.svg";
import reactIcon from "../assets/icons/react.svg";

const Skills = () => {
  return (
    <div className="skill-container mx-auto mb-12 md:mb-24">
      <div className="py-2 shadow-xl flex items-center justify-center h-32 rounded-md">
        <img src={Html} alt="logo" className="h-14 w-14 md:h-20 md:w-20" />
      </div>
      <div className="px-4 py-2 shadow-xl flex items-center justify-center h-32 rounded-md">
        <img src={Css} alt="logo" className="h-14 w-14 md:h-20 md:w-20" />
      </div>
      <div className="px-4 py-2 shadow-xl flex items-center justify-center h-32 rounded-md">
        <img src={js} alt="logo" className="h-14 w-14 md:h-20 md:w-20" />
      </div>
      <div className="px-4 py-2 shadow-xl flex items-center justify-center h-32 rounded-md">
        <img src={reactIcon} alt="logo" className="h-14 w-14 md:h-20 md:w-20" />
      </div>
      <div className="px-4 py-2 shadow-xl flex items-center justify-center h-32 rounded-md">
        <img src={sass} alt="logo" className="h-14 w-14 md:h-20 md:w-20" />
      </div>
      <div className="px-4 py-2 shadow-xl flex items-center justify-center h-32 rounded-md">
        <img src={tailwind} alt="logo" className="h-14 w-14 md:h-20 md:w-20" />
      </div>
      <div className="px-4 py-2 shadow-xl flex items-center justify-center h-32 rounded-md">
        <img src={vue} alt="logo" className="h-14 w-14 md:h-20 md:w-20" />
      </div>
      <div className="px-4 py-2 shadow-xl flex items-center justify-center h-32 rounded-md">
        <img src={xd} alt="logo" className="h-14 w-14 md:h-20 md:w-20" />
      </div>
      <div className="px-4 py-2 shadow-xl flex items-center justify-center h-32 rounded-md">
        <img src={vscode} alt="logo" className="h-14 w-14 md:h-20 md:w-20" />
      </div>
      <div className="px-4 py-2 shadow-xl flex items-center justify-center h-32 rounded-md">
        <img src={git} alt="logo" className="h-14 w-14 md:h-20 md:w-20" />
      </div>
      <div className="px-4 py-2 shadow-xl flex items-center justify-center h-32 rounded-md">
        <img src={github} alt="logo" className="h-14 w-14 md:h-20 md:w-20" />
      </div>
    </div>
  );
};

export default Skills;
