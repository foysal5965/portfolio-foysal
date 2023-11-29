/* eslint-disable react/no-unescaped-entities */
import {BsLinkedin, BsFillPersonLinesFill} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import {BiLogoGmail} from 'react-icons/bi'
const Main = () => {
  return (
    <div id='main' className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
        <div>
          <p className="text-[18px] tracking-widest font-bold">
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
              Welcome Back
            </span>
            <span className="text-transparent  bg-clip-text bg-gradient-to-r from-pink-50 to-purple-600">
            
              To My Era
            </span>
            ,
            <span className="text-pink-200">
             
              Get Ready For Somthing Especial !!
            </span>
          </p>

          <p className="text-4xl py-2">
            <span className="">Hi I'm</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
              Foysal
            </span>
          </p>
          <p className="text-4xl text-purple-300 py-2">A Front End Developer</p>
          <p className="text-purple-300 py-4 max-w-[60%] m-auto">
            I'm front-end developer specializing in building (and occasionally
            desinging) exceptional digital expreriences. Currently, I'm focused
            on building responsive front-end web applications while learning
            back-end techhlogies
          </p>

          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-md shadow-purple-400 p-6 cursor-pointer hover:scale-100 ease-in duration-300'>
            <BsLinkedin size={20}/>
            </div>
            <div className='rounded-full shadow-md shadow-purple-400 p-6 cursor-pointer hover:scale-100 ease-in duration-300'>
            <AiOutlineGithub size={20}/>
            </div>
            <div className='rounded-full shadow-md shadow-purple-400 p-6 cursor-pointer hover:scale-100 ease-in duration-300'>
            <BiLogoGmail size={20}/>
            </div>
            <div className='rounded-full shadow-md shadow-purple-400 p-6 cursor-pointer hover:scale-100 ease-in duration-300'>
            <BsFillPersonLinesFill size={20}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
