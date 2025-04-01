import React from 'react';
import Header from './PageHeader';
import { FaServer, FaCloud, FaShieldAlt, FaCode, FaNetworkWired, FaMobileAlt } from 'react-icons/fa';
import ServiceTemplate from './ServiceTemplate';

const ItService = () => {
  const services = [
    {
      icon: <FaServer className="text-4xl text-[#00AFB9]" />,
      title: "Server Management",
      description: "Comprehensive server solutions including setup, maintenance, and 24/7 monitoring to ensure optimal performance."
    },
    {
      icon: <FaCloud className="text-4xl text-[#00AFB9]" />,
      title: "Cloud Solutions",
      description: "Migration, deployment, and management of cloud infrastructure across AWS, Azure, and Google Cloud."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#00AFB9]" />,
      title: "Cybersecurity",
      description: "End-to-end security solutions including vulnerability assessments, penetration testing, and threat monitoring."
    },
    {
      icon: <FaCode className="text-4xl text-[#00AFB9]" />,
      title: "Custom Software",
      description: "Tailored software development to meet your specific business requirements and workflows."
    },
    {
      icon: <FaNetworkWired className="text-4xl text-[#00AFB9]" />,
      title: "Network Infrastructure",
      description: "Design, implementation, and optimization of secure and scalable network architectures."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#00AFB9]" />,
      title: "Mobile Development",
      description: "Cross-platform mobile applications built with React Native or Flutter for maximum reach."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Our IT Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technology solutions tailored to drive your business forward in the digital landscape.
          </p>
        </section>

        {/* Services Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="bg-[#00AFB9] rounded-xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our experts are ready to discuss your project requirements and provide customized solutions.
          </p>
          <button className="bg-white text-[#00AFB9] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
            Get a Free Consultation
          </button>
        </section>
      </main>

      {/* Footer would go here */}
      <ServiceTemplate />

    </div>
  );
};

export default ItService;