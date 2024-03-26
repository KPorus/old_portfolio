import React from 'react';
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
const Social = () => {
    return (
      <div className='text-2xl m-4 text-[green] flex items-center gap-4'>
        <a
          href='https://www.linkedin.com/in/fardinkhan121199/'
          target='_blank'
          rel='noreferrer'
          className='p-1'>
          <BsLinkedin></BsLinkedin>
        </a>
        <a
          href='https://github.com/KPorus'
          target='_blank'
          rel='noreferrer'
          className='p-1'>
          <BsGithub />
        </a>
        <a
          href='https://www.facebook.com/profile.php?id=100074017012643'
          target='_blank'
          rel='noreferrer'>
          <BsFacebook />
        </a>
      </div>
    );
};

export default Social;