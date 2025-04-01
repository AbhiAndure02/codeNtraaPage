import img2 from "../assets/it.webp";
import img3 from "../assets/blockchain.jpg";
import img4 from "../assets/ds.jpg";
import img5 from "../assets/web.jpg";
import img7 from "../assets/sofware.webp";
import img8 from "../assets/app.jpg"; // Fixed the file extension typo

const services = [
  {
    title: "Web Development Service",
    link: "/webapp", // Added `/` to make it a valid route
    image: img5,
    description: "Responsive and dynamic web application development solutions.",
  },
  {
    title: "App Development Service",
    link: "/mobileapp", // Corrected the path
    image: img8,
    description: "Empower your business with smart, scalable, and innovative app solutions.",
  },
  {
    title: "Software Development",
    link: "/software",
    image: img7,
    description: "We provide cutting-edge software solutions tailored to your needs for businesses and individuals.",
  },
  {
    title: "IT Service",
    link: "/itservice",
    image: img2,
    description: "Comprehensive IT services for business growth and digital transformation.",
  },
  {
    title: "Blockchain Service",
    link: "/blockchain",
    image: img3,
    description: "Blockchain is a secure, transparent, and decentralized way to store and share data.",
  },
  {
    title: "Data Science & AIML Service",
    link: "/ds",
    image: img4,
    description: "Data-driven decision making with Artificial Intelligence and Machine Learning.",
  },
];

export default services;
