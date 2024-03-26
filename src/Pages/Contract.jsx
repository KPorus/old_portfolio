import React from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdEmail } from "react-icons/md";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";
import { toast } from "react-hot-toast";
const Contract = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4bvl0hw', 'template_2l8fq5i', form.current, 'nblF44V3r-vHl0U4M')
      .then((result) => {
          console.log(result.text);
          toast.success("Email sent success")
          form.reset()
      }, (error) => {
          console.log(error.text);
          toast.success("Email not sent")
      });
  };
  return (
    <div>
      <h1 className='text-center font-bold text-[green] uppercase text-3xl m-10 border-b-2'>
        Send Your Messege
      </h1>
      <div className='flex sm:flex-row flex-col'>
        <div className='lg:w-[25%]'>
          <div className=' p-8 rounded-lg text-center border border-emerald-600 mb-2'>
            <article>
              <MdEmail className='mx-auto text-xl text-[green]'></MdEmail>
              <h4>
                Email: <span>mdfardinkhan1952@gmail.com</span>
              </h4>
              <a
                href='mailto:mdfardinkhan1952@gmail.com'
                className='text-[green]'
                target='_blank'
                rel='noreferrer'>
                Send Email
              </a>
            </article>
          </div>

          <div className=' p-8 rounded-lg text-center border border-emerald-600 mb-2'>
            <article>
              <BsMessenger className='mx-auto text-xl text-[green]'></BsMessenger>
              <h4>
                Messenger: <span>Md. Fardin Khan</span>
              </h4>
              <a
                href='https://www.facebook.com/profile.php?id=100074017012643'
                target='_blank'
                rel='noreferrer'
                className='text-[green] '>
                Messege me
              </a>
            </article>
          </div>

          <div className=' p-8 rounded-lg text-center border border-emerald-600'>
            <article>
              <BsWhatsapp className='mx-auto text-xl text-[green]'></BsWhatsapp>
              <h4>
                Whatsapp: <span>+8801969509218</span>
              </h4>
              <a
                href='https://web.whatsapp.com/send?phone=+8801969509218'
                target='_blank'
                rel='noreferrer'
                className='text-[green]'>
                Whatsapp Me
              </a>
            </article>
          </div>
        </div>
        <div className='mx-20'>
          <form ref={form} onSubmit={sendEmail}>
            <div className='form-control lg:w-[200%]'>
              <label className='label'>
                <span className='label-text'>Name: </span>
              </label>
              <input
                type='text'
                name='name'
                placeholder='Enter your Name'
                className='input input-bordered w-full'
              />
            </div>
            <div className='form-control lg:w-[200%]'>
              <label className='label'>
                <span className='label-text'>Email: </span>
              </label>
              <input
                type='email'
                name='email'
                placeholder='Enter your mail'
                className='input input-bordered w-full'
              />
            </div>
            <div className='form-control lg:w-[200%]'>
              <label className='label'>
                <span className='label-text'>Message: </span>
              </label>
              <textarea
                name='message'
                className='textarea textarea-bordered h-24'
                placeholder='Your Message'></textarea>
            </div>
            <button
              type='submit'
              disabled
              className='btn bg-[green] uppercase mt-2'>
              Send Your message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contract;
