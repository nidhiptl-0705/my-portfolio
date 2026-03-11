import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const handleCVDownload = () => {
    window.open('/Nidhi-Patel-CV.html', '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center min-vh-100 bg-gradient-primary" style={{ color: '#C21E56' }}>
        <div className="container">
          <motion.div
            className="row align-items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="col-lg-6" variants={itemVariants}>
              <motion.h1
                className="display-3 fw-bold mb-4"
                whileHover={{ scale: 1.02 }}
              >
                Hi, I'm <span style={{ color: '#EEC0C8' }}> Patel Nidhi</span>
              </motion.h1>
              <motion.h2 className="h3 mb-4" style={{ color: '#C21E56' }} variants={itemVariants}>
                Information Technology Student
              </motion.h2>
              <motion.p className="lead mb-4" variants={itemVariants}>
                Passionate about technology and innovation. I love creating solutions
                that make a difference in people's lives through code and creativity.
              </motion.p>

              <motion.div className="d-flex flex-wrap gap-3" variants={itemVariants}>
                <motion.button
                  className="btn btn-light btn-lg px-4 py-2 fw-bold"
                  style={{ color: '#FF69B4', border: 'none' }}
                  onClick={handleCVDownload}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📄 Download CV
                </motion.button>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/projects" className="btn btn-outline-light btn-lg px-4 py-2" style={{ borderColor: '#C21E56', color: '#C21E56' }}>
                    View My Work
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div className="col-lg-6 text-center" variants={itemVariants}>
              <motion.div
                className="hero-image-container position-relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="hero-photo-wrapper position-relative">
                  <motion.div
                    className="hero-photo rounded-circle overflow-hidden mx-auto shadow-lg"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <img
                      src="/nidhi.png"
                      alt="Patel Nidhi"
                      className="d-block w-100 h-100 object-fit-cover"
                      style={{ objectPosition: 'center' }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section py-5 bg-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2 className="display-5 fw-bold mb-3">Technical Skills</h2>
            <p className="lead text-muted">Technologies I work with</p>
          </motion.div>

          <div className="row g-4">
            {[
              { name: 'React.js', icon: '⚛️', level: 85 },
              { name: 'Node.js', icon: '🟢', level: 80 },
              { name: 'Express.js', icon: '🚀', level: 75 },
              { name: 'MongoDB', icon: '🍃', level: 70 },
              { name: 'Bootstrap 5', icon: '🎨', level: 90 },
              { name: 'JavaScript', icon: '📜', level: 85 }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="col-md-6 col-lg-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="skill-icon mb-3">
                      <span className="display-6">{skill.icon}</span>
                    </div>
                    <h5 className="card-title fw-bold">{skill.name}</h5>
                    <div class="progress mt-3" style={{ height: '8px', backgroundColor: '#fff0f3' }}>
                      <motion.div
                        className="progress-bar"
                        style={{ backgroundColor: '#FF69B4' }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                    <small className="text-muted mt-2 d-block">{skill.level}%</small>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
