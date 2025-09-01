import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiCloud, FiTool, FiServer, FiGlobe, FiGitBranch, FiMonitor } from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: FiCode,
      skills: [
        { name: 'C#', percentage: 95 },
        { name: 'Go (Golang)', percentage: 85 },
        { name: 'TypeScript', percentage: 90 },
        { name: 'Dart (Flutter)', percentage: 85 },
        { name: 'Node.js', percentage: 80 },
      ]
    },
    {
      title: 'Game Development',
      icon: FiMonitor,
      skills: [
        { name: 'Unity3D', percentage: 95 },
        { name: 'Flutter Flame', percentage: 85 },
        { name: 'PixiJS', percentage: 80 },
        { name: 'Box2D', percentage: 75 },
        { name: 'AR/VR', percentage: 70 },
      ]
    },
    {
      title: 'Web Development',
      icon: FiGlobe,
      skills: [
        { name: 'Next.js', percentage: 85 },
        { name: 'React', percentage: 90 },
        { name: 'Tailwind CSS', percentage: 90 },
        { name: 'Responsive UI/UX', percentage: 85 },
      ]
    },
    {
      title: 'Databases & Storage',
      icon: FiDatabase,
      skills: [
        { name: 'PostgreSQL', percentage: 80 },
        { name: 'CockroachDB', percentage: 75 },
        { name: 'Supabase', percentage: 85 },
        { name: 'DynamoDB', percentage: 75 },
        { name: 'AWS S3', percentage: 85 },
        { name: 'Prisma ORM', percentage: 80 },
        { name: 'GORM', percentage: 75 },
      ]
    },
    {
      title: 'Server & Backend',
      icon: FiServer,
      skills: [
        { name: 'Multiplayer Server', percentage: 90 },
        { name: 'Nakama', percentage: 85 },
        { name: 'REST APIs', percentage: 90 },
        { name: 'Backend Architecture', percentage: 85 },
      ]
    },
    {
      title: 'APIs & SDKs',
      icon: FiCloud,
      skills: [
        { name: 'Firebase', percentage: 90 },
        { name: 'Analytics', percentage: 85 },
        { name: 'In-Game Ads', percentage: 90 },
        { name: 'Third-Party SDKs', percentage: 85 },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: FiTool,
      skills: [
        { name: 'Docker', percentage: 85 },
        { name: 'AWS', percentage: 80 },
        { name: 'DigitalOcean', percentage: 75 },
        { name: 'CI/CD', percentage: 80 },
        { name: 'Deployment Pipelines', percentage: 75 },
      ]
    },
    {
      title: 'Version Control & Collaboration',
      icon: FiGitBranch,
      skills: [
        { name: 'Git', percentage: 90 },
        { name: 'GitHub', percentage: 90 },
        { name: 'Bitbucket', percentage: 85 },
        { name: 'Project Management', percentage: 85 },
        { name: 'Asana & Slack', percentage: 80 },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                      <span className="text-textPrimary font-medium text-sm">{skill.name}</span>
                      <span className="text-secondary font-mono text-xs">{skill.percentage}%</span>
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
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Performance Optimization', 'Quality Assurance', 'Team Leadership', 'Agile Development',
              'Sprint Management', 'Code Review', 'Mentoring', 'Cross-functional Collaboration',
              'Unity Editor Tools', 'Addressable Assets', 'Configuration Systems', 'API Development',
              'Task Management', 'Dependency Injection', 'Async/Await', 'Unity UI', 'Physics Engines',
              'Real-time Systems', 'Microservices', 'Load Balancing',
              'Monitoring & Logging', 'Security Best Practices', 'Testing Strategies', 'Documentation'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-center p-3 bg-gray-950 bg-opacity-50 rounded-lg border border-gray-800 hover:border-secondary transition-all duration-300"
              >
                <span className="text-textSecondary text-xs font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 