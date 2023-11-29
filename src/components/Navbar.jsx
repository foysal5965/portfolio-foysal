import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav ]= useState(false)

    const handleNav =()=>{
        setNav(!nav)
    }
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center px-2 2xl:px-16 w-full h-full">
        <h1>foysal</h1>
        <div>
          <ul className="hidden md:flex">
            <Link href="/#main">
              <li className="ml-10 text-sm">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm">Projects</li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm">Contacts</li>
            </Link>
          </ul>
          <div className="md:hidden" onClick={handleNav}>
            <AiOutlineMenu size={40} />
          </div>
        </div>
      </div>

      <div className={!nav ? " md:hidden fixed w-full h-52 top-0": "fixed w-full h-52  bg-gray-300  left-[-100%]"}>
        <div className=" backdrop-filter backdrop-blur-lg p-10 ">
          <div className="flex w-full items-center justify-between">
            <h1>Foysal</h1>
            <div className="border rounded-md cursor-pointer hover:border-none">
              <AiOutlineClose onClick={handleNav} size={40} />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] py-4">
              Lets create somthing new together
            </p>
          </div>
          <div className="py-4 flex flex-col justify-center items-center">
            <ul>
                <Link href='/'><li className="text-sm py-4">Home</li></Link>
                <Link href='/'><li className="text-sm py-4">About</li></Link>
                <Link href='/'><li className="text-sm py-4">Skills</li></Link>
                <Link href='/'><li className="text-sm py-4">Projects</li></Link>
                <Link href='/'><li className="text-sm py-4">Contact</li></Link>
            </ul>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
