import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Attandance Management System",
      description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      image: "🛒",
      github: "https://github.com/NidhiPatel123/Attandance-Management-System",
      live: "https://github.com/NidhiPatel123/Attandance-Management-System",    
      category: "Full-Stack"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A responsive task management application with drag-and-drop functionality, user authentication, and real-time updates.",
      technologies: ["React", "Firebase", "CSS3", "JavaScript"],
      image: "📋",
      github: "#",
      live: "#",
      category: "Frontend"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that displays current weather conditions and forecasts using external APIs and interactive charts.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Chart.js", "Weather API"],
      image: "🌤️",
      github: "https://github.com/NidhiPatel123/Weather-Dashboard",
      live: "https://github.com/NidhiPatel123/Weather-Dashboard",
      category: "Frontend-API"
    },

    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Bootstrap 5, featuring smooth animations and modern design.",
      technologies: ["React", "Bootstrap 5", "Framer Motion", "CSS3"],
      image: "🎨",
      github: "https://github.com/NidhiPatel123/Portfolio-Website",
      live: "https://github.com/NidhiPatel123/Portfolio-Website",
      category: "Frontend"
    },
    {
      id: 6,
      title: "Smart Medicine Reminder System",
      description: "RESTful API development with authentication, data validation, and comprehensive documentation using Swagger.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
      image: "🔌",
      github: "https://github.com/NidhiPatel123/Smart-Medicine-Reminder-System",
      live: "https://github.com/NidhiPatel123/Smart-Medicine-Reminder-System",
      category: "Backend"
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
                className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
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
                <div className="card-body p-4">
                  <div className="text-center mb-3">
                    <div className="project-icon display-4 mb-3">
                      {project.image}
                    </div>
                    <span className="badge bg-primary mb-2">{project.category}</span>
                  </div>
                  
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
                      className="btn btn-primary btn-sm flex-fill"
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
                className="btn btn-primary btn-lg px-4"
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
