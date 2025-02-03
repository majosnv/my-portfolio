import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Projekt 1",
      description: "Popis projektu 1.",
      image: "https://via.placeholder.com/400",
    },
    {
      title: "Projekt 2",
      description: "Popis projektu 2.",
      image: "https://via.placeholder.com/400",
    },
    {
      title: "Projekt 3",
      description: "Popis projektu 3.",
      image: "https://via.placeholder.com/400",
    },
  ];

  return (
    <section id="projects" className="bg-primary py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-secondary text-4xl font-bold text-center mb-8">Projekty</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-secondary p-6 rounded-lg shadow-lg">
              <img src={project.image} alt={project.title} className="mb-4 rounded-lg" />
              <h3 className="text-primary text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-primary">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;