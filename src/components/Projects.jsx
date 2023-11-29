/* eslint-disable react/jsx-key */
import crypto from "../../public/assets/projects/crypto.jpg";
import ProjectCard from "./ProjectsCard";
const Projects = () => {
  const projects = [
    {
      project_name: "crypto",
      githubLink: "ldsfsd",
      backgroundPicture: crypto,
      pictures: "dfgfd",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nulla quod facere ab quam corporis eveniet perferendis facilis quidem? Est a amet enim ad reprehenderit, tempore aut sed velit vel modi ratione, sint ab doloribus exercitationem iusto sit repudiandae magnam esse quaerat perspiciatis. Quod labore, earum amet a recusandae repudiandae.",
    },
  ];
  return (
    <div id="projects" className="">
      <div className="max-w-[1240px] mx-auto px-2 py-8">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
{
  projects.map((project)=><ProjectCard project={project}></ProjectCard>)
}
        </div>
      </div>
    </div>
  );
};

export default Projects;
