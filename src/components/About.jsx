import React from "react";

const About = () => {
  return (
    <div id="about" className="text-black bg-gradient-to-b  via-[#0FA4AF] from-[#0FA4AF] to-[#024950]  min-h-screen py-16 px-6 flex flex-col items-center">
      {/* Header Section */}
      <h1 className="text-5xl font-bold text-center text-slate-700 mb-10 relative">
  <span className="text-[#FCBF49] stroke-text">About</span> 
  <span className="text-slate-900 stroke-text"> CodeNtraa</span>
</h1>


      {/* Description */}
      <p className="text-black text-xl max-w-3xl text-center">
        Welcome to <b>CodeNtraa</b>, where innovation meets technology! We are
        passionate about creating digital solutions that transform ideas into
        reality. Whether you're a student looking for project guidance or a
        business seeking cutting-edge software, we are here to deliver
        excellence..
      </p>

      {/* Cards Section */}
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 mt-12 max-w-6xl text-black">
        {/* Card 1 */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center text-white border border-gray-400">
          <h2 className="text-2xl font-bold text-black">🚀 Innovation & Technology</h2>
          <p className="mt-3 text-gray-950">
            We craft unique solutions blending creativity with cutting-edge
            technology to create impact.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center text-white border border-gray-400">
          <h2 className="text-2xl font-bold text-black">💡 Turning Ideas into Reality</h2>
          <p className="mt-3 text-gray-950">
            We transform concepts into powerful digital experiences with
            precision and passion.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center text-white border border-gray-400">
          <h2 className="text-2xl font-bold text-black">🛡️ Reliable & Scalable</h2>
          <p className="mt-3 text-gray-950">
            Our solutions are secure, scalable, and designed to grow with you.
          </p>
        </div>

        {/* Card 4 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6  rounded-2xl shadow-lg text-center text-white border border-gray-400">
          <h2 className="text-2xl font-bold text-black">📚 Student & Business Solutions</h2>
          <p className="mt-3 text-gray-950">
            From academic projects to enterprise software, we cater to all
            needs.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white  bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center text-white border border-gray-400">
          <h2 className="text-2xl font-bold text-black">🎯 Our Commitment</h2>
          <p className="mt-3 text-gray-950">
            Quality, affordability, and timely delivery are at the heart of our
            services.
          </p>
        </div>

        {/* Card 6 */}
       {/* Card 6 */}
<div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center text-white border border-gray-400">
  <h2 className="text-2xl font-bold text-black">🚀 Future-Ready Solutions</h2>
  <p className="mt-3 text-gray-950">
    Innovating today for a smarter tomorrow with cutting-edge technology.
  </p>
</div>

       
      </div>

    
    </div>
  );
};

export default About;
