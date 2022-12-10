import React from "react";
import { Typewriter } from "react-simple-typewriter";
import pic from "../asset/20221130_163512.png";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { IoMdMailUnread } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
const About = () => {
  return (
    <div>
      <div className='hero min-h-screen mx-auto'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <img
            src={pic}
            alt='about'
            className='rounded-lg shadow-2xl max-w-sm sm:w-[35%] w-[50%]'
          />
          <div>
            <h1 className='text-5xl font-bold uppercase'>
              About{" "}
              <span style={{ color: "green", fontWeight: "bold" }}>
                <Typewriter
                  words={["myself"]}
                  loop={1}
                  cursor
                  cursorStyle='_'
                  typeSpeed={110}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className='py-6'>
              I am a skilled in Front-End Web Developer with knowledge in
              React.js, Node.js, Express.js, Google Authentication, MongoDB,
              JavaScript, HTML, CSS, Bootstrap, Tailwind and mobile responsive
              web development.
            </p>
            <ul>
              <li className='flex items-center gap-2 font-medium'>
                <BsFillTelephoneForwardFill className='text-[green] text-xl' />
                Phone: <span className='text-[green]'>+8801969509218</span>
              </li>
              <li className='flex items-center gap-2 font-medium'>
                <IoMdMailUnread className='text-xl text-[green]'></IoMdMailUnread>
                Email:{" "}
                <span className='text-[green]'>mdfardinkhan1952@gmail.com</span>
              </li>
              <li className='flex items-center gap-2 font-medium'>
                <FaLocationArrow className='text-xl text-[green]'></FaLocationArrow>
                Adress: <span className='text-[green]'>Mirpur-1, Dhaka</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
