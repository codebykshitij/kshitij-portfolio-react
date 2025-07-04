import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const About: React.FC = () => {
  const { personal } = portfolioData;

  const stats = [
    { icon: Calendar, label: 'Years Experience', value: '1+' },
    { icon: Award, label: 'Projects Completed', value: '10+' },
    { icon: User, label: 'Happy Clients', value: '5+' },
    { icon: MapPin, label: 'Location', value: 'Indore' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about building impactful digital experiences with Java, Spring Boot & scalable backend systems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-3"></div>
              <img
                src="/images/about/kshitijazad.png?auto=compress&cs=tinysrgb&w=600"
                alt="Kshitij Azad"
                className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Hi, I'm {personal.name}
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {personal.bio}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community. I believe in writing clean, maintainable code 
              and creating solutions that not only work well but also provide exceptional user experiences.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors"
                >
                  <stat.icon className="w-6 h-6 text-blue-400 mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;