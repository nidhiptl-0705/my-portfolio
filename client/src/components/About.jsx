import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const educationData = [
    {
      degree: "Bachelor of Information Technology",
      institution: "Vadodara institue of Engineering",
      year: "2024 - Continue",
      description: "Focusing on software development, database management, and web technologies."
    },
    {
      degree: "Diploma in Software Development",
      institution: "Sardar vallabhbhai patel institute of technology",
      year: "2022 - 2024",
      description: "Specialized in web Devlopment, Science and Mathematics."
    }
  ];

  const interests = [
    "Web Development",
    "Mobile App Development",
    "Database Design",
    "UI/UX Design",
    "Machine Learning",
    "Cybersecurity"
  ];

  return (
    <div className="about-page py-5" style={{ marginTop: '76px' }}>
      <div className="container">
        {/* Header Section */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="display-4 fw-bold mb-3">About Me</h1>
          <p className="lead text-muted">Get to know me better</p>
        </motion.div>

        <motion.div
          className="row g-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Personal Info */}
          <motion.div className="col-lg-6" variants={itemVariants}>
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h3 className="card-title fw-bold mb-4 text-primary">
                  <i className="fas fa-user me-2"></i>
                  Personal Information
                </h3>
                <div className="row g-3">
                  <div className="col-6">
                    <strong>Name:</strong>
                    <p className="text-muted mb-0">Patel Nidhi</p>
                  </div>
                  <div className="col-6">
                    <strong>Field:</strong>
                    <p className="text-muted mb-0">Information Technology</p>
                  </div>
                  <div className="col-6">
                    <strong>Location:</strong>
                    <p className="text-muted mb-0">Vadodara, India</p>
                  </div>
                  <div className="col-6">
                    <strong>Status:</strong>
                    <p className="text-muted mb-0">Student</p>
                  </div>
                </div>
                <hr />
                <p className="text-light">
                  I am a passionate Information Technology student with a keen interest 
                  in modern web technologies and software development. I love learning 
                  new technologies and applying them to solve real-world problems.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div className="col-lg-6" variants={itemVariants}>
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h3 className="card-title fw-bold mb-4 text-success">
                  <i className="fas fa-graduation-cap me-2"></i>
                  Education
                </h3>
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h5 className="fw-bold mb-1">{edu.degree}</h5>
                      <span className="badge bg-primary">{edu.year}</span>
                    </div>
                    <h6 className="text-muted mb-2">{edu.institution}</h6>
                    <p className="text-muted mb-0 small">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills & Interests */}
          <motion.div className="col-12" variants={itemVariants}>
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h3 className="card-title fw-bold mb-4 text-warning">
                  <i className="fas fa-lightbulb me-2"></i>
                  Areas of Interest
                </h3>
                <div className="row">
                  <div className="col-md-6">
                    <h5 className="fw-bold mb-3">Technical Skills</h5>
                    <div className="row g-2">
                      {['Frontend Development', 'Backend Development', 'Database Management', 'API Development'].map((skill, index) => (
                        <motion.div
                          key={index}
                          className="col-6"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <div className="d-flex align-items-center">
                            <i className="fas fa-check-circle text-success me-2"></i>
                            <span className="small">{skill}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h5 className="fw-bold mb-3">Interests</h5>
                    <div className="d-flex flex-wrap gap-2">
                      {interests.map((interest, index) => (
                        <motion.span
                          key={index}
                          className="badge bg-light text-dark border"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          {interest}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
