import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Resume from "../asset/Resume.pdf";
const Home = () => {
  return (
    <dv className='contaner flex flex-col items-center justify-center relative top-[10rem]'>
      <div className='text-center text-xl font-bold'>
        <h1 className='py-4 text-5xl'>
          Hi{""}
          <br />
          I am {""}
          <span style={{ color: "green", fontWeight: "bold" }}>
            <Typewriter
              words={["Fardin Khan","Front-End web developer"]}
              loop={5}
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
          className='w-[25%] btn text-sm font-medium text-green-700'>
          Download Resume
        </a>
    </dv>
  );
};

export default Home;
