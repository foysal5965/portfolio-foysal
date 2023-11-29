import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import emailjs from 'emailjs-com';
import { toast } from "react-toastify";
const Contact = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3ox3ozu",
        "template_91a6dlu",
        e.target,
        "qpTQARizmOm9baAUK"
      )
      .then(
        (response) => {
          toast('Message is successfully send', { hideProgressBar: true, autoClose: 2000, type: 'success' })
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
      e.target.reset()
  };
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4"></h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <h2 className="py-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
                  GET IN TOUCH
                </h2>
                <p className="py-8">Front-End Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/clint-briley-50056920a/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/fireclint"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>

                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <Link href="/resume">
                    <>
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <BsFillPersonLinesFill />
                      </div>
                    </>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto lg:p-4">
            <div className="p-4">
              <p className="text-end text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
                LEAVE A MASSAGE
              </p>
              <form  onSubmit={sendMail}
                className="py-8"
                action="https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 ">Name</label>
                    <input  value={name} onChange={(e) => setName(e.target.value)}
                      className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                      type="text"
                      name="user_name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 ">
                      Phone Number
                    </label>
                    <input 
                      className="border-2 rounded-lg p-3 flex  text-black"
                      type="text"
                      name="phone_number"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)}
                    className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                    type="email"
                    name="user_email"
                  />
                </div>
                <div className="flex flex-col py-2"></div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)}
                    className="border-4 rounded-lg p-3 hover:border-purple-500 text-black  "
                    rows="10"
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full p-4  mt-4">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <>
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[#5651e5]"
                  size={30}
                />
              </div>
            </>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
