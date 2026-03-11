import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Attandance Management System",
      description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication,sallary count,admin & employee dashboard ,Attendance,.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      image: "attendance.png",
      github: "https://github.com/nidhiptl-0705/vercel-frontend",
      live: "https://vercel-frontend-tau-ten.vercel.app/login",
      category: "Full-Stack"
    },
    {
      id: 2,
      title: "Movie-book system",
      description: "A movie ticket booking application with seat selection functionality, user login, and real-time updates,event,upcoming shows.",
      technologies: ["React", "node.js", "tailwind css", "express", "mongodb"],
      image: "movie-book.png",
      github: "https://github.com/nidhiptl-0705/onlinepass",
      live: "",
      category: "Full-Stack"
    },
    {
      id: 3,
      title: "Calculator",
      description: "A weather application that displays current weather conditions and forecasts using external APIs and interactive charts.",
      technologies: ["tailwind css", "JavaScript", "node.js", "react+vite"],
      image: "calculator.png",
      github: "https://github.com/nidhiptl-0705/calculator",
      live: "https://github.com/nidhiptl-0705/calculator",
      category: "Frontend"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Bootstrap 5, featuring smooth animations and modern design.",
      technologies: ["React", "vite", "Framer Motion", "tailwind css"],
      image: "portfolio.png",
      github: "https://github.com/nidhiptl-0705/my-portfolio",
      live: "https://github.com/nidhiptl-0705/my-portfolio",
      category: "Frontend & Backend"
    },
    {
      id: 6,
      title: "POT's website",
      description: "POT's website is a website for a therapist who provides therapy services to patients.",
      technologies: ["Node.js", "Express", "MongoDB", "react+vite", "tailwind.css"],
      image: "pot.png",
      github: "https://github.com/nidhiptl-0705/POT",
      live: "https://ot-frontend-nine.vercel.app/",
      category: "Full-Stack"
    }
  ];

  const categories = ["All", "Frontend", "Backend", "Full-Stack"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="projects-page py-5" style={{ marginTop: '76px' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="display-4 fw-bold mb-3">My Projects</h1>
          <p className="lead text-muted">Here are some of the projects I've worked on</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="btn-group" role="group">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                type="button"
                className="btn"
                style={{
                  backgroundColor: selectedCategory === category ? '#FF69B4' : 'transparent',
                  color: selectedCategory === category ? '#ffffff' : '#FF69B4',
                  border: '1px solid #FF69B4',
                  margin: '0 5px'
                }}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="col-lg-6 col-xl-4"
              variants={itemVariants}
            >
              <motion.div
                className="card h-100 border-0 shadow-sm project-card"
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="card-header position-relative p-0 overflow-hidden" style={{ height: '200px', backgroundColor: '#fff0f3' }}>
                  <div className="project-icon d-flex align-items-center justify-content-center h-100">
                    {project.image.endsWith('.png') ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="img-fluid w-100 h-100 object-fit-cover"
                        style={{ transition: 'transform 0.5s ease' }}
                      />
                    ) : (
                      <span className="display-4">{project.image}</span>
                    )}
                  </div>
                  <span className="badge position-absolute top-0 end-0 m-3" style={{ backgroundColor: '#FF69B4' }}>{project.category}</span>
                </div>
                <div className="card-body p-4">

                  <h5 className="card-title fw-bold mb-3">{project.title}</h5>
                  <p className="card-text text-muted mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h6 className="fw-bold mb-2">Technologies Used:</h6>
                    <div className="d-flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="badge bg-light text-dark border small"
                          whileHover={{ scale: 1.1 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: techIndex * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="d-flex gap-2">
                    <motion.a
                      href={project.github}
                      className="btn btn-outline-dark btn-sm flex-fill"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="fab fa-github me-1"></i>
                      Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="btn btn-sm flex-fill"
                      style={{ backgroundColor: '#FF69B4', color: '#C21E56' }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="fas fa-external-link-alt me-1"></i>
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="card border-0 bg-light">
            <div className="card-body p-5">
              <h3 className="fw-bold mb-3">Interested in working together?</h3>
              <p className="text-muted mb-4">
                I'm always open to discussing new opportunities and exciting projects.
              </p>
              <motion.a
                href="/contact"
                className="btn btn-lg px-4"
                style={{ backgroundColor: '#FF69B4', color: '#C21E56' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
