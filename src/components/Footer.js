import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdDownload, MdEmail, MdPhone } from 'react-icons/md';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
    const { isDarkMode } = useTheme();

    return (
        <footer className={`py-6 ${isDarkMode ? 'bg-black text-white' : 'bg-gray-100 text-black'}`}>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className='flex flex-col md:flex-row items-start md:items-center'>
                    <div className="flex space-x-4 pr-4 mb-4 md:mb-0">
                        <a
                            href="https://github.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400 transition duration-300"
                        >
                            <FaGithub size={36} />
                        </a>
                        <a
                            href="https://linkedin.com/in/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400 transition duration-300"
                        >
                            <FaLinkedin size={36} />
                        </a>
                        <a
                            href="https://twitter.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400 transition duration-300"
                        >
                            <FaTwitter size={36} />
                        </a>
                        <a
                            href="https://instagram.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400 transition duration-300"
                        >
                            <FaInstagram size={36} />
                        </a>
                    </div>

                    <div className="flex flex-col text-sm px-4 border-l border-white">
                        <p className="flex items-center">
                            <MdEmail className="mr-2" size={20} />
                            Email: <a href="mailto:itskamalofficial@gmail.com" className="text-indigo-600 hover:text-indigo-500">itskamalofficial@gmail.com</a>
                        </p>
                        <p className="flex items-center">
                            <MdPhone className="mr-2" size={20} />
                            Mobile: <span className="text-indigo-600">9754177313</span>
                        </p>
                    </div>
                </div>
                
                <a
                    href="/path/to/your/resume.pdf"
                    download
                    className="flex items-center text-indigo-600 hover:text-indigo-500 mt-2 md:mt-0"
                >
                    <MdDownload className="mr-2" size={20} />
                    Download Resume
                </a>
            </div>
        </footer>
    );
};

export default Footer;
