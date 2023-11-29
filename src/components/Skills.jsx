import Image from "next/image";
import mongodb from "../../public/assets/skills/mongo.png";
import firebase from "../../public/assets/skills/firebase.png";
import css from "../../public/assets/skills/css.png";
import aws from "../../public/assets/skills/aws.png";
import html from "../../public/assets/skills/html.png";
import javascript from "../../public/assets/skills/javascript.png";
import nextjs from "../../public/assets/skills/nextjs.png";
import node from "../../public/assets/skills/node.png";
import react from "../../public/assets/skills/react.png";
import tailwind from "../../public/assets/skills/tailwind.png";
const Skills = () => {
  return (
    <div id="skills" className="">
      <div>
        <p className="text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 ">
          My Skills
        </p>
        <div className="flex flex-wrap gap-3  items-center justify-center mx-5  py-2">
          
          <Image
            src={html}
            alt="skills"
            width={100}
            height={100}
            className="rounded-full shadow-md shadow-purple-400 p-6 cursor-pointer hover:scale-100 ease-in duration-300 mx-6 my-2 "
          />
          <Image
            src={css}
            alt="skills"
            width={100}
            height={100}
            className="rounded-full shadow-md shadow-purple-400 p-6 cursor-pointer hover:scale-100 ease-in duration-300 mx-6 my-2"
          />
          <Image
            src={tailwind}
            alt="skills"
            width={100}
            height={100}
            className="rounded-full shadow-md shadow-purple-400 p-6 cursor-pointer hover:scale-100 ease-in duration-300 mx-6 my-2"
          />
          <Image
            src={javascript}
            alt="skills"
            width={100}
            height={100}
            className="rounded-full shadow-md shadow-purple-400 p-6 cursor-pointer hover:scale-100 ease-in duration-300 mx-6 my-2"
          />
          <Image
            src={react}
            alt="skills"
            width={100}
            height={100}
            className="rounded-full shadow-md shadow-purple-400 p-6 cursor-pointer hover:scale-100 ease-in duration-300 mx-6 my-2"
          />
          <Image
            src={nextjs}
            alt="skills"
            width={100}
            height={100}
            className="rounded-full shadow-md shadow-purple-400 p-6 cursor-pointer hover:scale-100 ease-in duration-300 mx-6 my-2"
          />
          <Image
            src={node}
            alt="skills"
            width={100}
            height={100}
            className="rounded-full shadow-md shadow-purple-400 p-6 cursor-pointer hover:scale-100 ease-in duration-300 mx-6 my-2"
          />
          <Image
            src={mongodb}
            alt="skills"
            width={100}
            height={100}
            className="rounded-full shadow-md shadow-purple-400 p-6 cursor-pointer hover:scale-100 ease-in duration-300 mx-6 my-2"
          />
          <Image
            src={firebase}
            alt="skills"
            width={100}
            height={100}
            className="rounded-full shadow-md shadow-purple-400 p-6 cursor-pointer hover:scale-100 ease-in duration-300 mx-6 my-2"
          />
          <Image
            src={aws}
            alt="skills"
            width={100}
            height={100}
            className="rounded-full shadow-md shadow-purple-400 p-6 cursor-pointer hover:scale-100 ease-in duration-300 mx-6 my-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
