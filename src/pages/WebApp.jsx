import React, { useEffect } from 'react';
import Header from './PageHeader';
import { FaCode, FaMobile, FaServer, FaPaintBrush, FaSearch, FaShieldAlt } from 'react-icons/fa';
import ServiceTemplate from './ServiceTemplate';

const WebApp = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  const services = [
    {
      icon: <FaCode className="text-4xl text-[#00AFB9]" />,
      title: "Custom Web Development",
      description: "Bespoke websites built with modern frameworks like React, Next.js, and Vue.js tailored to your business needs."
    },
    {
      icon: <FaMobile className="text-4xl text-[#00AFB9]" />,
      title: "Responsive Design",
      description: "Mobile-first approaches ensuring your site looks perfect on all devices from smartphones to desktops."
    },
    {
      icon: <FaServer className="text-4xl text-[#00AFB9]" />,
      title: "Backend Development",
      description: "Robust server-side solutions using Node.js, Django, or Laravel with optimized database architectures."
    },
    {
      icon: <FaPaintBrush className="text-4xl text-[#00AFB9]" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed to maximize user engagement and conversion rates."
    },
    {
      icon: <FaSearch className="text-4xl text-[#00AFB9]" />,
      title: "SEO Optimization",
      description: "Technical SEO implementations to ensure your site ranks high on search engines."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#00AFB9]" />,
      title: "Web Security",
      description: "Comprehensive security measures including SSL, firewalls, and vulnerability testing."
    }
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Fullstack" },
    { name: "Node.js", category: "Backend" },
    { name: "TypeScript", category: "Development" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "MongoDB", category: "Database" },
    { name: "GraphQL", category: "API" },
    { name: "AWS", category: "Cloud" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Web Development Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We build fast, secure, and scalable web applications that drive business growth.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Our Web Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
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
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Our Technology Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md flex items-center gap-2"
              >
                <span className="text-xs text-[#00AFB9]">{tech.category}</span>
                <span className="font-medium text-gray-800 dark:text-white">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Our Development Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Requirement analysis & planning" },
              { step: "02", title: "Design", desc: "Wireframing & prototyping" },
              { step: "03", title: "Development", desc: "Agile implementation" },
              { step: "04", title: "Deployment", desc: "Launch & maintenance" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 text-[#00AFB9]rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#00AFB9] font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#00AFB9] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
            Ready to Build Your Next Web Project?
          </h2>
          <p className="text-black dark:text-white  mb-6 max-w-2xl mx-auto">
            Let's discuss how we can create a powerful web presence for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Get a Free Quote
            </button>
            <button className="bg-transparent border-2 border-black dark:border-white dark:text-white  text-black font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-[#00AFB9] transition-colors duration-300">
              View Portfolio
            </button>
          </div>
        </section>
      </main>
      <ServiceTemplate />

    </div>
  );
};

export default WebApp;