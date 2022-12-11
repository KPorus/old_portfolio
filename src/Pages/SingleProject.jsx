import React from "react";
import { BiGitRepoForked } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { SiFirefoxbrowser } from "react-icons/si";
import { VscCircleFilled } from "react-icons/vsc";
import { useLoaderData } from "react-router-dom";

const SingleProject = () => {
  let project = useLoaderData();
  let [one] = project;
  console.log(one);
  let {
    title,
    details,
    TECHNOLOGY,
    skills,
    feature,
    live,
    cient,
    server,
    img,
  } = one;
  return (
    <div className='hero min-h-screen mt-8'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <img src={img} className='max-w-sm rounded-lg shadow-2xl' />
        <div>
          <h1 className='text-5xl font-bold text-[green] uppercase'>{title}</h1>
          <p className='py-6'><span className="text-[green] font-semibold">Explain:</span> {details}</p>

          <span className="text-[green] font-semibold">Feature:</span>
          <ul>
            {feature.map((feature) => (
              <li className='flex mr-2'>
                <VscCircleFilled className='text-[green] text-lg icon'></VscCircleFilled>
                {feature}
              </li>
            ))}
          </ul>

          <p>
            <span className='tec uppercase font-bold text-[green]'>
              Technology:
            </span>{" "}
            {TECHNOLOGY + " "}
          </p>
          <div className='card-actions'>
            {skills.map((skill) => (
              <button className='btn btn-primary bg-transparent'>
                {skill}
              </button>
            ))}
          </div>
          <div className='flex items-center'>
            Client-code:
            <a
              href={cient}
              target='_blank'
              className='tec uppercase font-bold text-[green] text-3xl m-2'>
              <BsGithub />
            </a>
            {server && (
              <div className='flex items-center'>
                Server code:
                <a
                  href={server}
                  target='_blank'
                  className='tec uppercase font-bold text-[green] text-3xl m-2'>
                  <BiGitRepoForked />
                </a>
              </div>
            )}
            Live site:
            <a
              href={live}
              target='_blank'
              className='tec uppercase font-bold text-[green] text-3xl m-2'>
              <SiFirefoxbrowser />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
