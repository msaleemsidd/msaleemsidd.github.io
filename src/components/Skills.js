import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiCloud, FiTool } from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: FiCode,
      skills: [
        { name: 'C#', percentage: 95 },
        { name: 'Flutter', percentage: 85 },
        { name: 'TypeScript', percentage: 80 },
        { name: 'Go', percentage: 75 },
        { name: 'Unity3D', percentage: 95 },
      ]
    },
    {
      title: 'Game Development',
      icon: FiDatabase,
      skills: [
        { name: 'Unity3D', percentage: 95 },
        { name: 'Flutter Flame', percentage: 85 },
        { name: 'PIXIJS', percentage: 80 },
        { name: 'Box2D', percentage: 75 },
        { name: 'AR/VR', percentage: 70 },
      ]
    },
    {
      title: 'APIs & SDKs',
      icon: FiCloud,
      skills: [
        { name: 'Third-Party Plugins', percentage: 90 },
        { name: 'Game Analytics', percentage: 85 },
        { name: 'In-Game Ads', percentage: 90 },
        { name: 'Firebase', percentage: 85 },
        { name: 'Nakama', percentage: 80 },
      ]
    },
    {
      title: 'Cloud & Tools',
      icon: FiTool,
      skills: [
        { name: 'Docker', percentage: 85 },
        { name: 'AWS S3', percentage: 80 },
        { name: 'Git/Bitbucket', percentage: 90 },
        { name: 'Asana/Slack', percentage: 85 },
        { name: 'Digital Ocean', percentage: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">
            My <span className="text-secondary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-secondary">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-textPrimary">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-textPrimary font-medium">{skill.name}</span>
                      <span className="text-secondary font-mono text-sm">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-950 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.5 }}
                        viewport={{ once: true }}
                        className="h-2 bg-secondary rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-textPrimary text-center mb-8">
            Additional Skills & Technologies
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Multiplayer Development', 'Server Deployment', 'Cloud Integration', 'Performance Optimization', 'Quality Assurance', 'Team Leadership',
              'Agile Development', 'Sprint Management', 'Code Review', 'Mentoring', 'Project Management', 'Cross-functional Collaboration',
              'Unity Editor Tools', 'Node.js Development', 'TypeScript', 'Addressable Assets', 'Configuration Systems', 'API Development',
              'Task Management', 'Dependency Injection', 'Async/Await', 'Unity UI', 'Physics Engines', 'Third-party SDKs'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-gray-950 bg-opacity-50 rounded-lg border border-gray-800 hover:border-secondary transition-all duration-300"
              >
                <span className="text-textSecondary text-sm font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 