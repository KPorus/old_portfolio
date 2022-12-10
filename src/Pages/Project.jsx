import React from "react";
import { BsGithub } from "react-icons/bs";
import { VscCircleFilled } from "react-icons/vsc";
import { BiGitRepoForked } from "react-icons/bi";
import { SiFirefoxbrowser } from "react-icons/si";
import "../CSS/Style.css";
const Project = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2  gap-14'>
      <div className='card lg:card-side shadow-xl border pc'>
        <div className='card-body'>
          <h1 className='card-title font-bold'>Learning Platform </h1>
          <h2>Feature:</h2>
          <ul>
            <li className='flex mr-2'>
              <VscCircleFilled className='text-[green] text-lg icon'></VscCircleFilled>
              User buy courses according thier demand
            </li>
            <li className='flex mr-2 items-center'>
              <VscCircleFilled className='text-[green] text-lg icon'></VscCircleFilled>
              Firebase Authentication
            </li>
            <li className='flex mr-2 items-center'>
              <VscCircleFilled className='text-[green] text-lg icon'></VscCircleFilled>
              Create user type of Web experience
            </li>
            <li className='flex items-center'>
              <VscCircleFilled className='text-[green] text-lg icon'></VscCircleFilled>
              types-friendly and JWT security, Mongo DB Database
            </li>
          </ul>
          <p>
            <span className='tec uppercase font-bold text-[green]'>
              Technology:
            </span>{" "}
            React, Tailwind, daisy UI, React –Dom, Mongo DB
          </p>

          <div className='card-actions'>
            <button className='btn btn-primary bg-transparent'>Html5</button>
            <button className='btn btn-primary bg-transparent'>CSS</button>
            <button className='btn btn-primary bg-transparent'>Daisy UI</button>
            <button className='btn btn-primary bg-transparent'>React</button>
            <button className='btn btn-primary bg-transparent'>
              React-Dom
            </button>
            <button className='btn btn-primary bg-transparent'>Mongo DB</button>
            <button className='btn btn-primary bg-transparent'>Firebase</button>
          </div>
          <div className="flex items-center">
          Client-code:
            <a
              href='https://github.com/KPorus/b610-learning-platform-client-side-KPorus'
              target='_blank'
              className='tec uppercase font-bold text-[green] text-3xl m-2'>
             <BsGithub />
            </a>
            Server code:
            <a
              href='https://github.com/KPorus/b610-lerning-platform-server-side-KPorus'
              target='_blank'
              className='tec uppercase font-bold text-[green] text-3xl m-2'>
               <BiGitRepoForked />
            </a>
            Live site:
            <a
              href='https://b610-learning-platform-client.web.app/'
              target='_blank'
              className='tec uppercase font-bold text-[green] text-3xl m-2'>
              <SiFirefoxbrowser/>
            </a>
          </div>
        </div>
      </div>

      <div className='card lg:card-side shadow-xl border pc'>
        <div className='card-body'>
          <h2 className='card-title'>Photography</h2>
          <h2>Feature:</h2>
          <ul>
            <li className='flex mr-2'>
              <VscCircleFilled className='text-[green] text-lg icon'></VscCircleFilled>
              Users can hire the photographer and provider reviews on the services
            </li>
            <li className='flex mr-2 items-center'>
              <VscCircleFilled className='text-[green] text-lg icon'></VscCircleFilled>
              Firebase Authentication
            </li>
            <li className='flex mr-2 items-center'>
              <VscCircleFilled className='text-[green] text-lg icon'></VscCircleFilled>
              Create user, admin & seller type of Web experience
            </li>
            <li className='flex items-center'>
              <VscCircleFilled className='text-[green] text-lg icon'></VscCircleFilled>
              Mobile-friendly and JWT security 
            </li>
          </ul>
          <p>
            <span className='tec uppercase font-bold text-[green]'>
              Technology:
            </span>{" "}
            React, Tailwind, daisy UI, React –Dom, Mongo DB
          </p>
          <div className='card-actions'>
            <button className='btn btn-primary bg-transparent'>Html5</button>
            <button className='btn btn-primary bg-transparent'>CSS</button>
            <button className='btn btn-primary bg-transparent'>Daisy UI</button>
            <button className='btn btn-primary bg-transparent'>React</button>
            <button className='btn btn-primary bg-transparent'>
              React-Dom
            </button>
            <button className='btn btn-primary bg-transparent'>Mongo DB</button>
            <button className='btn btn-primary bg-transparent'>Firebase</button>
          </div>
          <div className="flex items-center">
          Client-code:
            <a
              href='https://github.com/KPorus/b6a11-service-review-client-side-KPorus'
              target='_blank'
              className='tec uppercase font-bold text-[green] text-3xl m-2'>
             <BsGithub />
            </a>
            Server code:
            <a
              href='https://github.com/KPorus/b6a11-service-review-server-side-KPorus'
              target='_blank'
              className='tec uppercase font-bold text-[green] text-3xl m-2'>
               <BiGitRepoForked />
            </a>
            Live site:
            <a
              href='https://b6a11-service-review-client.web.app/'
              target='_blank'
              className='tec uppercase font-bold text-[green] text-3xl m-2'>
              <SiFirefoxbrowser/>
            </a>
          </div>
        </div>
      </div>

      <div className='card lg:card-side shadow-xl border pc'>
        <div className='card-body'>
          <h2 className='card-title'>Selecting Five player!</h2>
          <h2>Feature:</h2>
          <ul>
            <li className='flex mr-2'>
              <VscCircleFilled className='text-[green] text-2xl icon'></VscCircleFilled>
              Selecting five player and counting their cost 
            </li>
            <li className='flex mr-2 items-center'>
              <VscCircleFilled className='text-[green] text-lg icon'></VscCircleFilled>
              Netlify hosting
            </li>
          </ul>
          <p>
            <span className='tec uppercase font-bold text-[green]'>
              Technology:
            </span>{" "}
            vanila css, Html5, JavaScript
          </p>
          <div className='card-actions'>
            <button className='btn btn-primary bg-transparent'>Html5</button>
            <button className='btn btn-primary bg-transparent'>CSS</button>
            <button className='btn btn-primary bg-transparent'>JavaScript</button>
          </div>
          <div className="flex items-center">
          Client-code:
            <a
              href='https://github.com/KPorus/best-five-dom-assignment-KPorus'
              target='_blank'
              className='tec uppercase font-bold text-[green] text-3xl m-2'>
             <BsGithub />
            </a>
            Live site:
            <a
              href='https://sunny-elf-d1deb0.netlify.app/'
              target='_blank'
              className='tec uppercase font-bold text-[green] text-3xl m-2'>
              <SiFirefoxbrowser/>
            </a>
          </div>
        </div>
      </div>

      <div className='card lg:card-side shadow-xl border pc'>
        <div className='card-body'>
          <h2 className='card-title'>Quiz For developer</h2>
          <h2>Feature:</h2>
          <ul>
            <li className='flex mr-2'>
              <VscCircleFilled className='text-[green] text-2xl icon'></VscCircleFilled>
              Users can practice various quizzes and find the correct answer
            </li>
            <li className='flex mr-2'>
              <VscCircleFilled className='text-[green] text-2xl icon'></VscCircleFilled>
              Mobile friendly
            </li>
            <li className='flex mr-2 items-center'>
              <VscCircleFilled className='text-[green] text-lg icon'></VscCircleFilled>
              Netlify hosting
            </li>
          </ul>
          <p>
            <span className='tec uppercase font-bold text-[green]'>
              Technology:
            </span>{" "}
            vanila css, Html5, JavaScript,React,React-Dom,Sweet-Alert
          </p>
          <div className='card-actions'>
            <button className='btn btn-primary bg-transparent'>Html5</button>
            <button className='btn btn-primary bg-transparent'>CSS</button>
            <button className='btn btn-primary bg-transparent'>JavaScript</button>
            <button className='btn btn-primary bg-transparent'>React</button>
            <button className='btn btn-primary bg-transparent'>React-Dom</button>
          </div>
          <div className="flex items-center">
          Client-code:
            <a
              href='https://github.com/KPorus/b6-quiz-crackerz-KPorus'
              target='_blank'
              className='tec uppercase font-bold text-[green] text-3xl m-2'>
             <BsGithub />
            </a>
            Live site:
            <a
              href='https://deluxe-rugelach-512295.netlify.app/'
              target='_blank'
              className='tec uppercase font-bold text-[green] text-3xl m-2'>
              <SiFirefoxbrowser/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
