import React from 'react';
import teamMembers from '../service/teamMember';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Teams = () => {
    return (
        <div id="teams" className="bg-gradient-to-b from-[#0FA4AF] via-[#AFDD] to-[#024950] min-h-screen py-16">
            <h1 className="text-5xl font-bold text-center text-slate-700 mb-10">
                <span className="text-[#FCBF49]">Meet</span> <span className="text-slate-900">Our Team</span>
            </h1>

            <div className="max-w-[90%] mx-auto flex flex-wrap justify-center gap-6">
                {teamMembers.map((member, i) => (
                    <div key={i} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-4">
                        <div className="bg-white flex flex-col items-center justify-center rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 p-6">
                            <img 
                                src={member.image} 
                                alt={member.name} 
                                className="w-36 h-36 object-cover rounded-full border-4 border-blue-500 shadow-md"
                            />
                            <h2 className="text-xl font-semibold mt-4 text-gray-900">{member.name}</h2>
                            <p className="text-gray-600 text-sm mb-4">{member.role}</p>
                            
                            <div className="flex gap-4 text-blue-600 text-2xl">
                                <a 
                                    href={`https://www.linkedin.com/in/${member.name.toLowerCase().replace(/\s+/g, '-')}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-800"
                                >
                                    <FaLinkedin />
                                </a>
                                <a 
                                    href={`https://github.com/${member.name.toLowerCase().replace(/\s+/g, '-')}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:text-gray-800"
                                >
                                    <FaGithub />
                                </a>
                            </div>

                            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-transform hover:scale-110">
                                View Profile
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Teams;