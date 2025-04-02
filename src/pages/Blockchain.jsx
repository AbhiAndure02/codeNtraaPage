import React, { useEffect } from 'react';
import Header from './PageHeader';
import { FaEthereum, FaBitcoin, FaLink, FaShieldAlt, FaExchangeAlt, FaChartLine } from 'react-icons/fa';
import { SiSolidity, SiBinance, SiPolkadot, SiChainlink, SiIpfs } from 'react-icons/si';
import ServiceTemplate from './ServiceTemplate';
import { BiSolidHardHat } from 'react-icons/bi';

const Blockchain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const services = [
    {
      icon: <FaEthereum className="text-4xl text-[#00AFB9]" />,
      title: "Smart Contract Development",
      description: "Secure, audited smart contracts for DeFi, NFTs, and blockchain applications.",
      tech: ["Solidity", "Vyper"]
    },
    {
      icon: <FaBitcoin className="text-4xl text-[#00AFB9]" />,
      title: "Cryptocurrency Solutions",
      description: "Custom token development and cryptocurrency integration services.",
      tech: ["ERC-20", "BEP-20"]
    },
    {
      icon: <FaLink className="text-4xl text-[#00AFB9]" />,
      title: "dApp Development",
      description: "Decentralized applications with Web3 integration and wallet connectivity.",
      tech: ["Web3.js", "Ethers.js"]
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#00AFB9]" />,
      title: "Blockchain Security",
      description: "Smart contract audits and penetration testing for blockchain projects.",
      tech: ["Auditing", "Pen Testing"]
    },
    {
      icon: <FaExchangeAlt className="text-4xl text-[#00AFB9]" />,
      title: "DEX Development",
      description: "Decentralized exchanges with automated market maker (AMM) protocols.",
      tech: ["Uniswap", "PancakeSwap"]
    },
    {
      icon: <FaChartLine className="text-4xl text-[#00AFB9]" />,
      title: "Blockchain Analytics",
      description: "On-chain data analysis and visualization tools for insights.",
      tech: ["The Graph", "Dune Analytics"]
    }
  ];

  const technologies = [
    { icon: <SiSolidity className="text-3xl" />, name: "Solidity" },
    { icon: <FaEthereum className="text-3xl" />, name: "Ethereum" },
    { icon: <SiBinance className="text-3xl" />, name: "Hyperledger" },
    { icon: <SiBinance className="text-3xl" />, name: "BNB Chain" },
    { icon: <SiPolkadot className="text-3xl" />, name: "Polkadot" },
    { icon: <SiChainlink className="text-3xl" />, name: "Chainlink" },
    { icon: <SiIpfs className="text-3xl" />,name: "IPFS storage"},
    { icon: <BiSolidHardHat className="text-3xl"/>, name: "Hardhat", category: "Dev Tools" }
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "Conceptualization",
      description: "Identify use case and blockchain feasibility"
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "Design system architecture and tokenomics"
    },
    {
      step: "03",
      title: "Smart Contract Dev",
      description: "Write and test contract logic"
    },
    {
      step: "04",
      title: "Security Audit",
      description: "Comprehensive code review and testing"
    },
    {
      step: "05",
      title: "Frontend Integration",
      description: "Connect dApp with blockchain network"
    },
    {
      step: "06",
      title: "Deployment & Maintenance",
      description: "Mainnet launch and ongoing support"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00AFB9] dark:text-white mb-4">
            Blockchain Development
          </h1>
          <p className="text-xl text-gray-600 dark:text-white max-w-3xl mx-auto">
            Decentralized solutions built on secure, transparent, and trustless blockchain technology
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Our Blockchain Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-[#075e54]"
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
                      className="text-xs px-2 py-1 rounded-full dark:bg-blue-100 text-[#075e54] darkck"
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
            Blockchain Technologies
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
            Blockchain Development Process
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
            Blockchain Implementations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "NFT Marketplace",
                result: "$2.4M in first-month trading volume",
                chain: "Ethereum"
              },
              {
                title: "DeFi Lending Platform",
                result: "$15M TVL within 3 months",
                chain: "BNB Chain"
              },
              {
                title: "Supply Chain Solution",
                result: "40% reduction in fraud cases",
                chain: "Hyperledger"
              }
            ].map((project, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-t-4 border-[#00AFB9] hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  <span className="font-bold text-[#00AFB9]">{project.result}</span>
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Blockchain: {project.chain}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#00AFB9] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Build on Blockchain?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Let's discuss how decentralized technology can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#00AFB9] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Start Your Project
            </button>
         
          </div>
        </section>
      </main>
      <ServiceTemplate />

    </div>
  );
};

export default Blockchain;