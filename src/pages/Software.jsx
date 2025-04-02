import React, { useEffect } from 'react';
import Header from './PageHeader';
import { FaCode, FaServer, FaCloud, FaShieldAlt, FaMobileAlt, FaCogs } from 'react-icons/fa';
import { SiJavascript, SiPython, SiRuby, SiDocker, SiDotnet, SiNodedotjs } from 'react-icons/si';
import ServiceTemplate from './ServiceTemplate';

const Software = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  const services = [
    {
      icon: <FaCode className="text-4xl text-[#00AFB9]" />,
      title: "Custom Software",
      description: "Tailored applications designed specifically for your business needs and workflows.",
      category: "Development"
    },
    {
      icon: <FaServer className="text-4xl text-[#00AFB9]" />,
      title: "Enterprise Systems",
      description: "Scalable solutions for large organizations with complex requirements.",
      category: "Enterprise"
    },
    {
      icon: <FaCloud className="text-4xl text-[#00AFB9]" />,
      title: "Cloud Applications",
      description: "Modern cloud-native applications built for scalability and reliability.",
      category: "Cloud"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#00AFB9]" />,
      title: "Security Solutions",
      description: "Secure software development with built-in protection against threats.",
      category: "Security"
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#00AFB9]" />,
      title: "Desktop & Mobile",
      description: "Cross-platform applications that work anywhere.",
      category: "Applications"
    },
    {
      icon: <FaCogs className="text-4xl text-[#00AFB9]" />,
      title: "System Integration",
      description: "Connecting disparate systems for seamless data flow.",
      category: "Integration"
    }
  ];

  const technologies = [
    { icon: <SiJavascript className="text-3xl" />, name: "JavaScript" },
    { icon: <SiPython className="text-3xl" />, name: "Python" },
    { icon: <SiDocker className="text-3xl" />, name: "Java" },
    { icon: <SiDocker className="text-3xl" />, name: "C#" },
    { icon: <SiRuby className="text-3xl" />, name: "Ruby" },
    { icon: <SiDocker className="text-3xl" />, name: "Docker" },
    { icon:<SiDotnet className="text-3xl" />, name: ".NET", category: "Framework" },
    {icon:<SiNodedotjs className="text-3xl"/>, name: "Node.js", category: "Runtime" }
  ];

  const developmentApproach = [
    {
      title: "Requirement Analysis",
      description: "Thorough understanding of your business objectives"
    },
    {
      title: "System Design",
      description: "Architecting robust and scalable solutions"
    },
    {
      title: "Agile Development",
      description: "Iterative development with continuous feedback"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing at every development stage"
    },
    {
      title: "Deployment",
      description: "Seamless implementation in your environment"
    },
    {
      title: "Support & Maintenance",
      description: "Ongoing updates and improvements"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Software Development Solutions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Building robust, scalable, and secure software tailored to your business needs
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Our Software Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-[#00AFB9]"
              >
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {service.description}
                </p>
                <span className="inline-block px-3 py-1 text-xs font-semibold text-[#00AFB9] dark:text-purple-200 bg-purple-100 dark:bg-purple-900 rounded-full">
                  {service.category}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Technology Expertise
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="flex flex-col items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md w-24 hover:shadow-lg transition-shadow"
              >
                {tech.icon && <div className="mb-2 text-[#00AFB9]">{tech.icon}</div>}
                <span className="font-medium text-gray-800 dark:text-white text-center text-sm">
                  {tech.name}
                </span>
                {tech.category && (
                  <span className="text-xs text-[#00AFB9] mt-1">{tech.category}</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Development Approach */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Our Development Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentApproach.map((step, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md relative pl-16"
              >
                <div className="absolute left-6 top-6 w-10 h-10 bg-[#00AFB9] rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Inventory Management System",
                result: "Reduced operational costs by 45%",
                industry: "Retail"
              },
              {
                title: "Healthcare Platform",
                result: "Improved patient processing time by 60%",
                industry: "Healthcare"
              },
              {
                title: "Financial Analytics Tool",
                result: "Increased reporting efficiency by 75%",
                industry: "Finance"
              }
            ].map((caseStudy, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-t-4 border-[#00AFB9] hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  <span className="font-bold text-[#00AFB9]">{caseStudy.result}</span>
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Industry: {caseStudy.industry}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#00AFB9] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Build Your Custom Software?
          </h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can create the perfect software solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Get Started
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors duration-300">
              View Case Studies
            </button>
          </div>
        </section>
      </main>
            <ServiceTemplate />
      
    </div>
  );
};

export default Software;