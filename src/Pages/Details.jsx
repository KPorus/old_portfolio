import React from "react";
import "../CSS/Style.css";
import { BsGithub } from "react-icons/bs";
import { VscCircleFilled } from "react-icons/vsc";
import { BiGitRepoForked } from "react-icons/bi";
import { SiFirefoxbrowser } from "react-icons/si";
import { Link } from "react-router-dom";
const Details = ({ items }) => {
  console.log(items);
  let { title, skills, feature, cient, live, server,TECHNOLOGY, _id } = items;
  return (
    <div className='card lg:card-side shadow-xl border pc'>
      <div className='card-body'>
        <h1 className='card-title font-bold'>{title} </h1>
        <h2>Feature:</h2>
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
          {TECHNOLOGY +" "} 
        </p>

        <div className='card-actions'>
          {skills.map((skill) => (
            <button className='btn btn-primary bg-transparent'>{skill}</button>
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
            <div className="flex items-center">
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
      <Link to={`/SingleProject/${_id}`} className="btn bg-[green] text-white font-bold uppercase text-lg">
        View More
      </Link>
      </div>
    </div>
  );
};

export default Details;
