import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiBriefcase } from 'react-icons/fi';

const About = () => {
  const personalInfo = [
    { icon: FiCalendar, label: 'Birthday', value: '1996' },
    { icon: FiMapPin, label: 'Location', value: 'Karachi, Pakistan' },
    { icon: FiBriefcase, label: 'Experience', value: '7+ Years' },
  ];

  const skills = [
    'Unity3D', 'C#', 'Flutter', 'TypeScript', 'Go', 'Flutter Flame', 'PIXIJS', 'Box2D',
    'Firebase', 'Game Analytics', 'Docker', 'AWS', 'Nakama', 'Git', 'Bitbucket', 'Multiplayer', 'AR/VR',
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">
            About <span className="text-secondary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image and Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-96 h-96 rounded-lg mx-auto relative overflow-hidden">
                <img 
                  src="/MyPhoto.jpg" 
                  alt="Saleem Siddiqui" 
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gray-950 bg-opacity-10"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-lg">7+</span>
              </div>
            </div>

            {/* Personal Info */}
            <div className="space-y-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="text-secondary">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <span className="text-textSecondary">{info.label}: </span>
                    <span className="text-textPrimary font-medium">{info.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-textPrimary">
              A passionate Game Developer with extensive experience
            </h3>
            
            <div className="space-y-4 text-body">
              <p>
                I am a passionate and dedicated Game Developer with over 7 years of experience 
                in developing, maintaining, and improving game applications using Unity3D and related technologies. 
                I specialize in idle clickers, hyper-casual games, multiplayer games, and integration of third-party plugins.
              </p>
              <p>
                My journey in game development began with Unity and has expanded to include Flutter Flame, 
                PIXIJS, and Box2D. I've worked on various projects ranging from hyper-casual games to 
                complex multiplayer experiences with server deployment and cloud integration.
              </p>
              <p>
                I believe in delivering high-performance, quality-driven game applications and seeking 
                opportunities to bring innovation and creativity to game development.
              </p>
            </div>

            {/* Skills Tags */}
            <div>
              <h4 className="text-lg font-semibold text-textPrimary mb-4">
                Technical Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-secondary bg-opacity-10 text-secondary rounded-full text-sm font-medium border border-secondary border-opacity-30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Download CV Button */}
            <a href="https://docs.google.com/document/d/1Ortgj91p9afvXMVNzSCTMImKctSNAtbRh1g2ctpl7us/edit?usp=sharing" className="btn-primary mt-6 inline-block" target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 