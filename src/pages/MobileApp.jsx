import React, { useEffect } from 'react';
import Header from './PageHeader';
import { FaMobileAlt, FaReact, FaApple, FaAndroid, FaSync, FaShieldAlt } from 'react-icons/fa';
import { SiFlutter, SiFirebase, SiKotlin, SiSwift, SiGoogle, SiApple, SiAndroid } from 'react-icons/si';
import ServiceTemplate from './ServiceTemplate';

const MobileApp = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  const services = [
    {
      icon: <FaMobileAlt className="text-4xl text-[#00AFB9]" />,
      title: "Cross-Platform Apps",
      description: "Build once, deploy everywhere with React Native and Flutter for iOS and Android.",
      tech: ["React Native", "Flutter"]
    },
    {
      icon: <FaApple className="text-4xl text-[#00AFB9]" />,
      title: "iOS Development",
      description: "Native iOS apps built with Swift using modern Apple frameworks and design principles.",
      tech: ["Swift", "SwiftUI"]
    },
    {
      icon: <FaAndroid className="text-4xl text-[#00AFB9]" />,
      title: "Android Development",
      description: "High-performance Android apps using Kotlin and Jetpack Compose.",
      tech: ["Kotlin", "Jetpack"]
    },
    {
      icon: <FaSync className="text-4xl text-[#00AFB9]" />,
      title: "App Modernization",
      description: "Update legacy mobile apps with modern architectures and features.",
      tech: ["Migration", "Redesign"]
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#00AFB9]" />,
      title: "App Security",
      description: "Comprehensive security audits and hardening for mobile applications.",
      tech: ["OWASP", "Encryption"]
    },
    {
      icon: <FaReact className="text-4xl text-[#00AFB9]" />,
      title: "Progressive Web Apps",
      description: "Web apps that feel native with offline capabilities and push notifications.",
      tech: ["PWA", "Service Workers"]
    }
  ];

  const technologies = [
    { icon: <SiFlutter className="text-3xl" />, name: "Flutter" },
    { icon: <FaReact className="text-3xl" />, name: "React Native" },
    { icon: <SiSwift className="text-3xl" />, name: "Swift" },
    { icon: <SiKotlin className="text-3xl" />, name: "Kotlin" },
    { icon: <SiFirebase className="text-3xl" />, name: "Firebase" },
    { icon: <SiGoogle className="text-3xl" />, name: "Google Cloud Platform" },
    { icon: <SiApple className="text-3xl" />, name: "Apple App Store" },
    { icon: <SiAndroid className="text-3xl" />, name: "Google Play Store" },
 
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "Strategy & Planning",
      description: "Define requirements and technical approach"
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Create intuitive user interfaces and experiences"
    },
    {
      step: "03",
      title: "Development",
      description: "Agile implementation with weekly builds"
    },
    {
      step: "04",
      title: "Quality Assurance",
      description: "Rigorous testing across devices and OS versions"
    },
    {
      step: "05",
      title: "Deployment",
      description: "App store submission and launch"
    },
    {
      step: "06",
      title: "Maintenance",
      description: "Updates, improvements, and support"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Mobile App Development
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Building innovative mobile experiences for iOS, Android, and cross-platform solutions
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Our Mobile Development Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-blue-500"
              >
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-xs px-2 py-1 rounded-full  bg-[#00AFB9] dark:text-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Our Technology Stack
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

        {/* Development Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentProcess.map((step, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md relative"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#00AFB9] rounded-full flex items-center justify-center text-white font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 pl-6">
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
                title: "E-Commerce App",
                result: "Increased conversions by 35%",
                platform: "iOS & Android"
              },
              {
                title: "Health & Fitness",
                result: "500K+ downloads in first year",
                platform: "Cross-platform"
              },
              {
                title: "Enterprise Solution",
                result: "Reduced operational costs by 40%",
                platform: "Android Tablet"
              }
            ].map((caseStudy, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-t-4 border-blue-500 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  <span className="font-bold text-[#00AFB9]">{caseStudy.result}</span>
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Platform: {caseStudy.platform}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#00AFB9] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can create a powerful mobile presence for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#00AFB9] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Get a Free Quote
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300">
              View Portfolio
            </button>
          </div>
        </section>
      </main>
      <ServiceTemplate />
    </div>
  );
};

export default MobileApp;