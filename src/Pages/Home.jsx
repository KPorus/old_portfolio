import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Resume from "../asset/Resume.pdf";
import Pic from "../asset/20221130_163512.png"
import Social from "./Social";
import "../CSS/Style.css";
const Home = () => {
  return (
    <div>
      <div >
        <img className="sm:w-[20%] w-[50%] relative sm:left-[40%] left-[25%] mt-4 rounded-full overflow-hidden" src={Pic} alt="pic" />
      </div>
      <div className='contaner flex flex-col items-center justify-center relative top-[2rem]'>
        <div className='text-center text-xl font-bold'>
          <h1 className='py-4 text-5xl'>
            Hi{""}
            <br />I am {""}
            <span style={{ color: "green", fontWeight: "bold" }}>
              <Typewriter
                words={["Fardin Khan", "Front-End web developer"]}
                loop={1000}
                cursor
                cursorStyle='_'
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>
        <a
          href={Resume}
          download
          className='md:w-[25%] btn bg-transparent text-sm font-medium text-green-700 uppercase'>
          Download Resume
        </a>
        <Social></Social>
      </div>
    </div>
  );
};

export default Home;
