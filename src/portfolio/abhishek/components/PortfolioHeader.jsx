import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons from react-icons
import { Link } from 'react-scroll';

const PortfolioHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gray-900/80 border-t border-gray-800 text-gray-200 backdrop-blur-md shadow-sm fixed w-full z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Left side - Logo */}
                <div className="flex items-center">
                    <Link to='home1' smooth={true} offset={-80} className="text-2xl font-bold text-gray-200 hover:text-indigo-600 transition-colors">
                        {/* Replace with your logo */}
                        <span className="text-indigo-600">Port</span>folio
                    </Link>
                </div>

                {/* Right side - Navigation (Desktop) */}
                <nav className="hidden md:flex space-x-8">
                    <Link to='home1' smooth={true} offset={-80} className="text-gray-300 hover:text-indigo-600 font-medium transition-colors relative group">
                        Home
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link to='about1' smooth={true} offset={-80} className="text-gray-300 hover:text-indigo-600 font-medium transition-colors relative group">
                        About
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link to="skill1" smooth={true} offset={-80} className="text-gray-300 hover:text-indigo-600 font-medium transition-colors relative group">
                        Skills
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link to='project1' smooth={true} offset={-80} className="text-gray-300 hover:text-indigo-600 font-medium transition-colors relative group">
                        Projects
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
                    </Link>

                    <Link to='contact1' smooth={true} offset={-80} className="text-gray-300 hover:text-indigo-600 font-medium transition-colors relative group">
                        Contact
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
                    </Link>
                </nav>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-700 shadow-lg">
                    <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
                        <Link to='home1' smooth={true} offset={-80}
                            className="text-gray-100 hover:text-indigo-600 py-2 font-medium transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link to='about1' smooth={true} offset={-80}
                            href="#skills"
                            className="text-gray-100 hover:text-indigo-600 py-2 font-medium transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link to='skill1' smooth={true} offset={-80}
                            className="text-gray-100 hover:text-indigo-600 py-2 font-medium transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            skills
                        </Link>
                        <Link to='project1' smooth={true} offset={-80}
                            href="#about"
                            className="text-gray-100 hover:text-indigo-600 py-2 font-medium transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Projects
                        </Link>
                        <Link
                            to='contact1' smooth={true} offset={-80}
                            className="text-gray-100 hover:text-indigo-600 py-2 font-medium transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default PortfolioHeader;