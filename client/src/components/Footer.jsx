import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-100" style={{ backgroundColor: '#212529', color: '#C21E56' }}>
      {/* Top Bar - Logo and Social Media */}
      <div className="py-3" style={{ backgroundColor: '#EEC0C8' }}>
        <div className="container-fluid px-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <div className="rounded-circle d-flex align-items-center justify-content-center me-3 overflow-hidden" 
                     style={{ width: '45px', height: '45px', backgroundColor: '#FF69B4' }}>
                  <img 
                    src="/np.png" 
                    alt="Logo" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      mixBlendMode: 'multiply'
                    }}
                  />
                </div>
                <div>
                  <h5 className="text-dark fw-bold mb-0">NIDHI PATEL</h5>
                  <p className="text-dark mb-0 small">FSD(web)</p>
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
                    className="text-decoration-none d-flex align-items-center justify-content-center rounded-circle"
                    style={{ 
                      width: '35px', 
                      height: '35px',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: '#C21E56',
                      transition: 'all 0.3s ease'
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: '#FF69B4',
                      color: '#fff'
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
              <h6 className="fw-bold mb-4 d-flex align-items-center" style={{ color: '#C21E56' }}>
                <i className="fas fa-link me-2" style={{ color: '#FF69B4' }}></i>
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
                      className="text-decoration-none d-flex align-items-center"
                      style={{ transition: 'all 0.3s ease', color: '#C21E56' }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#FF69B4';
                        e.target.style.transform = 'translateX(5px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = '#C21E56';
                        e.target.style.transform = 'translateX(0)';
                      }}
                    >
                      <i className={`${link.icon} me-2 small`} style={{ color: '#FF69B4' }}></i>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Us Column */}
            <div className="col-lg-4 col-md-6">
              <h6 className="fw-bold mb-4 d-flex align-items-center" style={{ color: '#C21E56' }}>
                <i className="fas fa-address-card me-2" style={{ color: '#FF69B4' }}></i>
                Contact Us
              </h6>
              <div className="space-y-3">
                <div className="d-flex align-items-start">
                  <div className="rounded-circle d-flex align-items-center justify-content-center me-3 mt-1" 
                       style={{ width: '30px', height: '30px', minWidth: '30px', backgroundColor: 'rgba(255, 105, 180, 0.2)' }}>
                    <i className="fas fa-map-marker-alt small" style={{ color: '#FF69B4' }}></i>
                  </div>
                  <div>
                    <p className="mb-0 small" style={{ color: '#C21E56' }}>Vadodara Institute of Engineering</p>
                    <p className="mb-0 small" style={{ color: '#C21E56' }}>Vadodara, Gujarat, India</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="rounded-circle d-flex align-items-center justify-content-center me-3 mt-1" 
                       style={{ width: '30px', height: '30px', minWidth: '30px', backgroundColor: 'rgba(255, 105, 180, 0.2)' }}>
                    <i className="fas fa-phone small" style={{ color: '#FF69B4' }}></i>
                  </div>
                  <p className="mb-0 small" style={{ color: '#C21E56' }}>+91-8347-311-705</p>
                </div>
                <div className="d-flex align-items-center">
                  <div className="rounded-circle d-flex align-items-center justify-content-center me-3 mt-3" 
                       style={{ width: '30px', height: '30px', minWidth: '30px', backgroundColor: 'rgba(255, 105, 180, 0.2)' }}>
                    <i className="fas fa-envelope small" style={{ color: '#FF69B4' }}></i>
                  </div>
                  <p className="mb-0 small" style={{ color: '#C21E56' }}>Patelnidhip007@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Remain Updated Column */}
            <div className="col-lg-4 col-md-6">
              <h6 className="fw-bold mb-4 d-flex align-items-center" style={{ color: '#C21E56' }}>
                <i className="fas fa-bell me-2" style={{ color: '#FF69B4' }}></i>
                Remain Updated
              </h6>
              <p className="mb-3 small" style={{ color: '#C21E56' }}>
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
                    color: '#C21E56'
                  }}
                />
                <motion.button
                  className="btn btn-sm px-3"
                  style={{ backgroundColor: '#FF69B4', color: 'white' }}
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
      <div className="py-3" style={{ backgroundColor: '#EEC0C8' }}>
        <div className="container-fluid px-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="text-dark mb-0 small">
                © {currentYear}. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-end">
              <div className="d-flex align-items-center justify-content-end">
                <p className="text-dark mb-0 small me-3">
                  Designed by Nidhi Patel
                </p>
                <motion.button
                  onClick={scrollToTop}
                  className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '35px', height: '35px', backgroundColor: '#FF69B4', color: '#C21E56' }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fas fa-arrow-up small"></i>
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
