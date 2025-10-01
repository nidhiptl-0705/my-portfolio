import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: 'fas fa-home' },
    { path: '/about', label: 'About', icon: 'fas fa-user' },
    { path: '/projects', label: 'Projects', icon: 'fas fa-code' },
    { path: '/contact', label: 'Contact', icon: 'fas fa-envelope' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav 
      className="navbar navbar-expand-lg fixed-top"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        {/* Enhanced Brand Section */}
        <motion.div
          className="d-flex align-items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link className="navbar-brand d-flex align-items-center text-white fw-bold" to="/">
            <img
              src="/np.png"
              alt="Nidhi Patel Logo"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
              className="me-2"
              style={{ width: '45px', height: '45px', objectFit: 'contain' }}
            />
            <div>
              <span className="fs-4 d-block">NIDHI PATEL</span>
              <span className="fs-6 fw-normal text-white-50 d-block">IT Portfolio</span>
            </div>
          </Link>
        </motion.div>

        {/* Mobile Toggle Button */}
        <motion.button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="navbar-toggler-icon text-white"></span>
        </motion.button>

        {/* Navigation Menu */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navItems.map((item, index) => (
              <motion.li 
                key={item.path}
                className="nav-item me-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  className={`nav-link d-flex align-items-center position-relative ${
                    isActive(item.path) ? 'active fw-bold' : ''
                  }`}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  style={{
                    color: isActive(item.path) ? '#ffffff' : 'rgba(255, 255, 255, 0.8)',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    backgroundColor: isActive(item.path) ? 'rgba(255, 255, 255, 0.15)' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(item.path)) {
                      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.color = '#ffffff';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(item.path)) {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                    }
                  }}
                >
                  <i className={`${item.icon} me-2`} style={{ width: '16px' }}></i>
                  {item.label}
                  
                  {/* Active Indicator */}
                  {isActive(item.path) && (
                    <motion.div
                      className="position-absolute"
                      layoutId="activeIndicator"
                      style={{
                        bottom: '8px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '20px',
                        height: '3px',
                        background: '#ffffff',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}
            
            {/* Download CV Button */}
            <motion.li 
              className="nav-item"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.a
                href="/api/cv"
                className="btn btn-warning btn-sm fw-bold px-3 py-2"
                style={{
                  borderRadius: '25px',
                  boxShadow: '0 4px 15px rgba(255, 193, 7, 0.3)',
                  border: 'none'
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 6px 20px rgba(255, 193, 7, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                download
              >
                <i className="fas fa-download me-2"></i>
                Download CV
              </motion.a>
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
