import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({project}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full  rounded-xl group  hover:bg-gradient-to-t from-[#252287] to-[#d3d3d8] cursor-pointer shadow-xl transition duration-300 hover:scale-y-105'>
    <Image className='rounded-xl group-hover:opacity-10' src={project.backgroundPicture} alt='/' /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[0%] translate-x-[-0%] translate-y-[-0%] animate-fade-up animate-once animate-duration-500 animate-delay-100'>
        <h3 className='text-2xl text-white tracking-wider text-center'></h3>
        <p className='pb-4 pt-2 text-white text-center'></p>
        <Link href='/'>
            <p className='text-center py-3 rounded-lg  text-white font-bold text-lg cursor-pointer'>{project.details}</p>
        </Link>
    </div>
 </div>
  )
};

export default ProjectCard;
