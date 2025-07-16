import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '', // Subject is in the form but not used by backend yet
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null); // To show success/error messages

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'saleemsiddiqui1996@gmail.com',
      href: 'mailto:saleemsiddiqui1996@gmail.com'
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+92 315-249-6309',
      href: 'tel:+923152496309'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Karachi, Pakistan',
      href: '#'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null); // Clear previous messages

    try {
      const response = await fetch('http://localhost:5000/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          // Note: Your backend currently only logs name, email, message.
          // If you want to log subject, you'll need to update your backend's logToSheet function.
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage({ type: 'success', text: data.message });
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form on success
      } else {
        setSubmitMessage({ type: 'error', text: data.error || 'Something went wrong.' });
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage({ type: 'error', text: 'Network error. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">
            Get In <span className="text-secondary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-textPrimary mb-6">
                Let's talk about everything!
              </h3>
              <p className="text-body">
                Don't like forms? Send me an email directly at{' '}
                <a
                  href="mailto:saleemsiddiqui1996@gmail.com"
                  className="text-secondary hover:underline"
                >
                  saleemsiddiqui1996@gmail.com
                </a>
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 card bg-opacity-30 hover:border-secondary transition-all duration-300"
                >
                  <div className="text-secondary">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-textPrimary font-medium">{info.title}</h4>
                    <p className="text-textSecondary">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-textPrimary mb-4">
                Follow me on social media
              </h4>
              <div className="flex space-x-4">
                {[
                  { name: 'GitHub', href: 'https://github.com/msaleemsidd', color: 'hover:text-gray-400' },
                  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/saleemsiddiqui96/', color: 'hover:text-blue-400' },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-textSecondary ${social.color} transition-colors duration-300`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card bg-opacity-30"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-textPrimary font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-950 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-lg text-textPrimary placeholder-textSecondary focus:border-secondary focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-textPrimary font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-950 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-lg text-textPrimary placeholder-textSecondary focus:border-secondary focus:outline-none transition-colors duration-300"
                    placeholder="abc@xyz.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-textPrimary font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-950 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-lg text-textPrimary placeholder-textSecondary focus:border-secondary focus:outline-none transition-colors duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-textPrimary font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-950 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-lg text-textPrimary placeholder-textSecondary focus:border-secondary focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>

              {submitMessage && (
                <div className={`p-3 rounded-lg text-center ${submitMessage.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                  {submitMessage.text}
                </div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;