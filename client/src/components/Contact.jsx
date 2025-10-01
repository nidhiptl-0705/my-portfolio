import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post('/api/contact', formData);
      if (response.data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
    hidden: { opacity: 0, y: 30 },
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
    <div className="contact-page py-5" style={{ marginTop: '76px' }}>
      <div className="container">
        <motion.div
          className="row justify-content-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="col-lg-8">
            {/* Header */}
            <motion.div
              className="text-center mb-5"
              variants={itemVariants}
            >
              <h1 className="display-4 fw-bold mb-3">Get In Touch</h1>
              <p className="lead text-muted">
                I'd love to hear from you! Feel free to reach out for collaborations, 
                opportunities, or just to say hello.
              </p>
            </motion.div>

            <div className="row g-5">
              {/* Contact Form */}
              <motion.div className="col-lg-8" variants={itemVariants}>
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h3 className="card-title fw-bold mb-4">
                      <i className="fas fa-envelope me-2 text-primary"></i>
                      Send Message
                    </h3>

                    {submitStatus === 'success' && (
                      <motion.div
                        className="alert alert-success alert-dismissible fade show"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <i className="fas fa-check-circle me-2"></i>
                        Thank you! Your message has been sent successfully.
                        <button
                          type="button"
                          className="btn-close"
                          onClick={() => setSubmitStatus(null)}
                        ></button>
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        className="alert alert-danger alert-dismissible fade show"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <i className="fas fa-exclamation-circle me-2"></i>
                        Sorry! There was an error sending your message. Please try again.
                        <button
                          type="button"
                          className="btn-close"
                          onClick={() => setSubmitStatus(null)}
                        ></button>
                      </motion.div>
                    )}

                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label fw-bold">
                          Full Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-bold">
                          Email Address <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Enter your email address"
                        />
                      </div>

                      <div className="mb-4">
                        <label htmlFor="message" className="form-label fw-bold">
                          Message <span className="text-danger">*</span>
                        </label>
                        <textarea
                          className="form-control form-control-lg"
                          id="message"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Tell me about your project or inquiry..."
                        ></textarea>
                      </div>

                      <motion.button
                        type="submit"
                        className="btn btn-primary btn-lg w-100"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-paper-plane me-2"></i>
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </form>
                  </div>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div className="col-lg-4" variants={itemVariants}>
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h3 className="card-title fw-bold mb-4">
                      <i className="fas fa-info-circle me-2 text-primary"></i>
                      Contact Info
                    </h3>

                    <div className="mb-4">
                      <h6 className="fw-bold mb-2">
                        <i className="fas fa-envelope me-2 text-muted"></i>
                        Email
                      </h6>
                      <p className="text-muted mb-0">patelnidhip007@gmail.com</p>
                    </div>

                    <div className="mb-4">
                      <h6 className="fw-bold mb-2">
                        <i className="fas fa-map-marker-alt me-2 text-muted"></i>
                        Location
                      </h6>
                      <p className="text-muted mb-0">Vadodara, Gujarat, India</p>
                    </div>

                    <div className="mb-4">
                      <h6 className="fw-bold mb-2">
                        <i className="fas fa-clock me-2 text-muted"></i>
                        Response Time
                      </h6>
                      <p className="text-center text-white mb-0">Within 24 hours</p>
                    </div>

                    <hr />

                    <h6 className="fw-bold mb-3">Connect With Me</h6>
                    <div className="d-flex gap-2">
                      <motion.a
                        href="#"
                        className="btn btn-outline-primary btn-sm"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <i className="fab fa-linkedin"></i>
                      </motion.a>
                      <motion.a
                        href="#"
                        className="btn btn-outline-dark btn-sm"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <i className="fab fa-github"></i>
                      </motion.a>
                      <motion.a
                        href="#"
                        className="btn btn-outline-info btn-sm"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <i className="fab fa-twitter"></i>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
