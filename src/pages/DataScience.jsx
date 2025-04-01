import React from 'react';
import Header from './PageHeader';
import { FaBrain, FaChartLine, FaRobot, FaDatabase, FaCode, FaCloud } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiPython, SiGooglecolab } from 'react-icons/si';
import ServiceTemplate from './ServiceTemplate';

const DataScience = () => {
  // Integrated services combining all three domains
  const integratedServices = [
    {
      icon: <FaBrain className="text-4xl text-[#00AFB9]" />,
      title: "AI-Powered Analytics",
      description: "Combine machine learning with data science to uncover deep insights from complex datasets.",
      domains: ["AI", "ML", "Data Science"]
    },
    {
      icon: <FaChartLine className="text-4xl text-[#00AFB9]" />,
      title: "Predictive Modeling",
      description: "Statistical models enhanced with ML algorithms for accurate future forecasting.",
      domains: ["ML", "Data Science"]
    },
    {
      icon: <FaRobot className="text-4xl text-[#00AFB9]" />,
      title: "Intelligent Automation",
      description: "AI systems that learn and adapt to automate complex business processes.",
      domains: ["AI", "ML"]
    },
    {
      icon: <FaDatabase className="text-4xl text-[#00AFB9]" />,
      title: "Data Pipeline Engineering",
      description: "End-to-end solutions for collecting, processing, and analyzing big data.",
      domains: ["Data Science", "ML"]
    },
    {
      icon: <FaCode className="text-4xl text-[#00AFB9]" />,
      title: "Custom AI Solutions",
      description: "Tailored AI implementations solving specific business challenges.",
      domains: ["AI", "ML"]
    },
    {
      icon: <FaCloud className="text-4xl text-[#00AFB9]" />,
      title: "Cloud AI Services",
      description: "Deploy scalable ML models on cloud infrastructure with MLOps.",
      domains: ["AI", "ML", "Data Science"]
    }
  ];

  // Unified technology stack
  const techStack = [
    { name: "Python", icon: <SiPython className="text-3xl" />, category: "Core" },
    { name: "TensorFlow", icon: <SiTensorflow className="text-3xl" />, category: "ML" },
    { name: "PyTorch", icon: <SiPytorch className="text-3xl" />, category: "DL" },
    { name: "Colab", icon: <SiGooglecolab className="text-3xl" />, category: "Tools" },
    { name: "Pandas", category: "Data" },
    { name: "Scikit-learn", category: "ML" },
    { name: "Keras", category: "DL" },
    { name: "Spark", category: "Big Data" }
  ];

  // Collaboration workflow
  const workflow = [
    {
      phase: " Data Foundation",
      description: "Data collection, cleaning, and preparation",
      involved: ["Data Science"]
    },
    {
      phase: " Feature Engineering",
      description: "Creating meaningful model inputs",
      involved: ["Data Science", "ML"]
    },
    {
      phase: " Model Development",
      description: "Building and training ML/AI models",
      involved: ["ML", "AI"]
    },
    {
      phase: " Validation",
      description: "Testing and optimizing performance",
      involved: ["Data Science", "ML"]
    },
    {
      phase: " Deployment",
      description: "Implementing in production systems",
      involved: ["AI", "ML"]
    },
    {
      phase: "  Continuous Learning",
      description: "Model retraining and improvement",
      involved: ["AI", "ML", "Data Science"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16 ">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            AI - ML - Data Science
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Integrated solutions where artificial intelligence, machine learning, and data science work together
          </p>
        </section>

        {/* Integrated Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Converged Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integratedServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#00AFB9]"
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
                  {service.domains.map((domain, i) => (
                    <span 
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200"
                    >
                      {domain}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Unified Technology Stack */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Unified Technology Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, index) => (
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

        {/* Collaboration Workflow */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Collaborative Workflow
          </h2>
          <div className="space-y-8">
            {workflow.map((step, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md relative pl-16"
              >
                <div className="absolute left-6 top-6 w-10 h-10 bg-[#00AFB9] rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 px-2">
                  {step.phase}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {step.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {step.involved.map((domain, i) => (
                    <span 
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200"
                    >
                      {domain}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Value Proposition */}
        <section className="mb-20 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
            The Power of Integration
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Enhanced Accuracy",
                description: "Data science ensures quality inputs for ML models leading to better AI outcomes"
              },
              {
                title: "Faster Insights",
                description: "ML accelerates pattern detection that would take humans months to identify"
              },
              {
                title: "Adaptive Systems",
                description: "AI components enable continuous improvement of solutions over time"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#00AFB9] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Build Intelligent Systems?
          </h2>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Leverage the combined power of AI, ML, and Data Science for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#00AFB9] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Start a Project
            </button>
          
          </div>
        </section>
      </main>
      <ServiceTemplate />

    </div>
  );
};



export default DataScience;