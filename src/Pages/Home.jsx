import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Resume from "../asset/Resume.pdf";
import Pic from "../asset/profile.png";
import Social from "./Social";
const Home = () => {
  return (
    <div>
      <div>
        <img
          className='sm:w-[20%] w-[60%] relative sm:left-[40%] left-[20%] mt-4 rounded-full overflow-hidden'
          src={Pic}
          alt='pic'
        />
      </div>
      <div className='contaner flex flex-col items-center justify-center relative top-[2rem]'>
        <div className='text-center text-xl font-bold'>
          <h1 className='py-4 sm:text-5xl text-3xl'>
            Hi{""}
            <br />I am {""}
            <span style={{ color: "green", fontWeight: "bold" }}>
              <Typewriter
                words={[
                  "Fardin Khan",
                  "Front-End web developer",
                  "React Developer",
                  "Mern Stack developer",
                ]}
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
          href='https://drive.google.com/file/d/17padBa3CAgMHHPzHnaLVVUHDfeCWcxfi/view?usp=sharing'
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
