// import { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   FaGithub,
//   FaExternalLinkAlt,
//   FaReact,
//   FaNodeJs,
// } from "react-icons/fa";

// function Projects() {


//   const projects = [
//     {
//       title: "DreamPlanner",
//       description:
//         "An event management web application where users can explore events, view event details, and book events.",
//       tech: "MERN Stack",
//       features: [
//         "Event listing",
//         "Event details",
//         "User registration & login",
//         "Event booking",
//         "MongoDB database",
//       ],
//       github: "https://github.com/muitpradum/React_Project-DreamPlanner",
//       live: "#",
//     },
    // {
    //   title: "Indeed Learning",
    //   description:
    //     "A learning management system where students can access courses, assignments, tasks, and learning materials.",
    //   tech: "Django",
    //   features: [
    //     "Student management",
    //     "Teacher management",
    //     "Assignments",
    //     "Tasks",
    //     "Learning materials",
    //   ],
    //   github: "https://github.com/muitpradum/Indeed-learning",
    //   live: "#",
    // },
//     {
//       title: "MERN CRUD Application",
//       description:
//         "A full-stack CRUD application developed using React, Node.js, Express.js and MongoDB.",
//       tech: "React + Node + MongoDB",
//       features: [
//         "Create users",
//         "View users",
//         "Update users",
//         "Delete users",
//         "REST API integration",
//       ],
//       github: "#",
//       live: "#",
//     },
//   ];

//   return (
//     <section className=" bg-[#FFFFE0] py-6 px-6">
//       <div className="max-w-6xl mx-auto">

//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900">
//             My Projects
//           </h1>

//           <p className="text-gray-600 mt-3">
//             Some of the projects I have worked on
//           </p>
//         </div>

//         {/* Projects */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden
//                          hover:-translate-y-2 transition duration-300"
//             >
//               {/* Project Header */}
//               <div className="bg-gray-900 text-white p-6">
//                 <div className="flex items-center gap-3">
//                   <FaReact className="text-3xl" />

//                   <h2 className="text-2xl !text-white font-bold">
//                     {project.title}
//                   </h2>
//                 </div>

//                 <p className="text-white-300 mt-2">
//                   {project.tech}
//                 </p>
//               </div>

//               {/* Project Content */}
//               <div className="p-6">

//                 <p className=" text-left text-gray-600 mb-5">
//                   {project.description}
//                 </p>

//                 <h3 className="font-semibold text-gray-900 mb-2">
//                   Key Features
//                 </h3>

//                 <ul className="list-disc text-left list-inside text-gray-600 space-y-1">
//                   {project.features.map((feature, i) => (
//                     <li key={i}>{feature}</li>
//                   ))}
//                 </ul>

//                 {/* Buttons */}
//                 <div className="flex gap-3 mt-6">

//                   <a
//                     href={project.github}
//                     className="flex items-center gap-2 bg-blue-900
//                                text-white px-4 py-2 rounded-lg
//                                hover:bg-gray-700"
//                   >
//                     <FaGithub />
//                     GitHub
//                   </a>

//                   <a
//                     href={project.live}
//                     className="flex items-center gap-2 bg-white-500
//                                text-black px-4 py-2 rounded-lg border
//                                hover:text-blue-600"
//                   >
//                     <FaExternalLinkAlt />
//                     Live Demo
//                   </a>

//                 </div>
//               </div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;

import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
} from "react-icons/fa";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/projects"
      );

      setProjects(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError("Unable to load projects");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center bg-[#FFFFE0]">
        <h2 className="text-2xl font-semibold">
          Loading Projects...
        </h2>
      </div>
    );
  }

  return (
    <section className=" bg-[#FFFFE0] py-6 px-6">

      <div className="max-w-8xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            My Projects
          </h1>

          <div className="w-40 h-1 bg-blue-500 mx-auto mt-1"></div>

          <div className="m-5"><p className="text-gray-600 mt-3">
            Some of the projects I have worked on
          </p></div>
        </div>

        {/* Error */}
        {error && (
          <p className="text-center text-red-500 mb-6">
            {error}
          </p>
        )}

        {/* Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white rounded-2xl shadow-lg
                         overflow-hidden hover:-translate-y-2
                         transition duration-300"
            >

              {/* Image */}
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-58 object-cover"
                />
              ) : (
                <div className="h-48 bg-gray-900
                                flex items-center justify-center">
                  <FaReact className="text-white text-6xl" />
                </div>
              )}

              {/* Content */}
              <div className="p-6">

                <h2 className=" text-left text-2xl font-bold text-gray-900">
                  {project.title}
                </h2>

                <p className=" text-left text-gray-600 mt-3">
                  {project.description}
                </p>
                <h3 className=" text-left font-semibold text-gray-900 mb-2">
                  Key Features
                </h3>

                <ul className="list-disc text-left list-inside text-gray-600 space-y-1">
                  {project.features?.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-pink-700 !text-white
                                 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-6">

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2
                                 bg-gray-900 text-white
                                 px-4 py-2 rounded-lg
                                 hover:bg-gray-700"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2
                                 bg-gray-700 text-white
                                 px-4 py-2 rounded-lg
                                 hover:bg-pink-600"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}

                </div>

              </div>
            </div>
          ))}

        </div>

        {/* No projects */}
        {projects.length === 0 && !error && (
          <p className="text-center text-gray-600">
            No projects found.
          </p>
        )}

      </div>
    </section>
  );
}

export default Projects;