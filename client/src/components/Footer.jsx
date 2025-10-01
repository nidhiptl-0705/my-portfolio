import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-white w-100">
      {/* Top Bar - Logo and Social Media */}
      <div className="bg-secondary py-3">
        <div className="container-fluid px-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center me-3" 
                     style={{ width: '45px', height: '45px' }}>
                  <i className="fas fa-user-graduate text-dark fs-5 fw-bold"></i>
                </div>
                <div>
                  <h5 className="text-white fw-bold mb-0">NIDHI PATEL</h5>
                  <p className="text-white mb-0 small">FSD(web)</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-end">
              <div className="d-flex gap-2 justify-content-end">
                {[
                  { icon: 'fab fa-facebook-f', href: '#', label: 'Facebook' },
                  { icon: 'fab fa-twitter', href: '#', label: 'Twitter' },
                  { icon: 'fab fa-github', href: '#', label: 'GitHub' },
                  { icon: 'fab fa-linkedin-in', href: '#', label: 'LinkedIn' },
                  { icon: 'fab fa-instagram', href: '#', label: 'Instagram' },
                  { icon: 'fab fa-youtube', href: '#', label: 'YouTube' }
                  
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="text-white text-decoration-none d-flex align-items-center justify-content-center rounded-circle"
                    style={{ 
                      width: '35px', 
                      height: '35px',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease'
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: 'rgba(255, 193, 7, 0.8)',
                      color: '#000'
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    aria-label={social.label}
                  >
                    <i className={`${social.icon} small`}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-dark py-5">
        <div className="container-fluid px-4">
          <motion.div
            className="row g-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Quick Links Column */}
            <div className="col-lg-4 col-md-6">
              <h6 className="fw-bold mb-4 text-white d-flex align-items-center">
                <i className="fas fa-link me-2 text-warning"></i>
                Quick Links
              </h6>
              <ul className="list-unstyled">
                {[
                  { name: 'Home', path: '/', icon: 'fas fa-chevron-right' },
                  { name: 'About Me', path: '/about', icon: 'fas fa-chevron-right' },
                  { name: 'Projects', path: '/projects', icon: 'fas fa-chevron-right' },
                  { name: 'Contact', path: '/contact', icon: 'fas fa-chevron-right' }
                ].map((link, index) => (
                  <motion.li
                    key={link.name}
                    className="mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <a
                      href={link.path}
                      className="text-white text-decoration-none d-flex align-items-center"
                      style={{ transition: 'all 0.3s ease' }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#ffc107';
                        e.target.style.transform = 'translateX(5px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = '#ffffff';
                        e.target.style.transform = 'translateX(0)';
                      }}
                    >
                      <i className={`${link.icon} me-2 text-warning small`}></i>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Us Column */}
            <div className="col-lg-4 col-md-6">
              <h6 className="fw-bold mb-4 text-white d-flex align-items-center">
                <i className="fas fa-address-card me-2 text-warning"></i>
                Contact Us
              </h6>
              <div className="space-y-3">
                <div className="d-flex align-items-start">
                  <div className="bg-warning bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center me-3 mt-1" 
                       style={{ width: '30px', height: '30px', minWidth: '30px' }}>
                    <i className="fas fa-map-marker-alt text-warning small"></i>
                  </div>
                  <div>
                    <p className="text-white mb-0 small">Vadodara Institute of Engineering</p>
                    <p className="text-white mb-0 small">Vadodara, Gujarat, India</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="bg-warning bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center me-3 mt-1" 
                       style={{ width: '30px', height: '30px', minWidth: '30px' }}>
                    <i className="fas fa-phone text-warning small"></i>
                  </div>
                  <p className="text-white mb-0 small">+91-8347-311-705</p>
                </div>
                <div className="d-flex align-items-center">
                  <div className="bg-warning bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center me-3 mt-3" 
                       style={{ width: '30px', height: '30px', minWidth: '30px' }}>
                    <i className="fas fa-envelope text-warning small"></i>
                  </div>
                  <p className="text-white mb-0 small">Patelnidhip007@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Remain Updated Column */}
            <div className="col-lg-4 col-md-6">
              <h6 className="fw-bold mb-4 text-white d-flex align-items-center">
                <i className="fas fa-bell me-2 text-warning"></i>
                Remain Updated
              </h6>
              <p className="text-white mb-3 small">
                Subscribe to get updates about my latest projects and achievements.
              </p>
              <div className="d-flex mb-3">
                <input
                  type="email"
                  className="form-control form-control-sm me-2"
                  placeholder="Your email address"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: 'white'
                  }}
                />
                <motion.button
                  className="btn btn-warning btn-sm px-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign up
                </motion.button>
              </div>
              <div className="d-flex gap-2">
                <span className="badge bg-secondary border-0 small me-1 text-white">React.js</span>
                <span className="badge bg-secondary border-0 small me-1 text-white">Node.js</span>
                <span className="badge bg-secondary border-0 small me-1 text-white">MongoDB</span>
                <span className="badge bg-secondary border-0 small text-white">Bootstrap 5</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-secondary py-3">
        <div className="container-fluid px-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="text-white mb-0 small">
                © {currentYear}. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-end">
              <div className="d-flex align-items-center justify-content-end">
                <p className="text-white mb-0 small me-3">
                  Designed by Nidhi Patel
                </p>
                <motion.button
                  onClick={scrollToTop}
                  className="btn btn-info btn-sm rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '35px', height: '35px' }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fas fa-arrow-up text-white small"></i>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
