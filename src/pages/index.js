import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import TypingEffect from '../contexts/TypingEffect';

export default function Home() {
    const { isDarkMode } = useTheme();
    const [activeTab, setActiveTab] = useState('About');
    const router = useRouter();

    const tabs = [
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Education', href: '/education' },
        { name: 'Experience', href: '/experience' },
    ];

    const tabContents = {
        About: {
            text: 'Curious about who I am? Discover my journey and what fuels my passion for design and development!',
            buttonText: 'Uncover My Story',
            buttonLink: '/about',
        },
        Projects: {
            text: 'Ready to see some magic? Dive into my portfolio and explore the projects that showcase my skills!',
            buttonText: 'Explore My Creations',
            buttonLink: '/projects',
        },
        Education: {
            text: 'Here’s a glimpse of my academic journey. From high school to college, I’ve embraced learning with enthusiasm!',
            buttonText: 'View My Education',
            buttonLink: '/education',
        },
        Experience: {
            text: 'Want to know what I’ve been up to? Check out my experiences and see how I can bring value to your team!',
            buttonText: 'Discover My Journey',
            buttonLink: '/experience',
        },
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const contentVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    };

    const words = ['Design Systems', 'Web Development', 'User-Centric', 'Creative Solutions', 'Responsive Design', 'Interactive Experiences'];

    return (
        <motion.div
            className={`flex flex-col w-full ${isDarkMode ? 'bg-black' : 'bg-white'} text-white transition-colors duration-300 overflow-hidden`}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="container pt-16 mx-auto flex items-center justify-center flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start w-full">
                    {/* Text Section */}
                    <motion.div
                        className="flex flex-col justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p className={`text-xl pb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Hello,</p>
                        <h2 className={`text-6xl pb-4 font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>I'm Kamal</h2>
                        <h3 className={`text-2xl font-light ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>CODER && DESIGNER</h3>
                        <TypingEffect
                            words={words}
                            speed={200}
                            clearSpeed={1000}
                            className={isDarkMode ? 'text-gray-300' : 'text-black'}
                        />
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                        className="flex items-center justify-center"
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className={`relative w-64 h-64 rounded-full ${isDarkMode ? 'bg-white' : 'bg-indigo-400'} flex items-center justify-center`}>
                            <Image
                                src="/kamal.png"
                                alt="Kamal"
                                width={224}
                                height={224}
                                className="absolute w-64 rounded-b-full z-10"
                                style={{ top: '-58px' }}
                            />
                        </div>
                    </motion.div>

                    {/* Tab Menu Section */}
                    <div className="flex flex-col">
                        <div className={`flex mb-2`}>
                            {tabs.map((tab) => (
                                <div
                                    key={tab.name}
                                    onClick={() => setActiveTab(tab.name)}
                                    className={`cursor-pointer py-2 px-4 md:px-6 text-center transition duration-300 ${activeTab === tab.name
                                        ? isDarkMode ? 'text-white font-bold border-b-2 border-white' : 'text-black font-bold border-b-2 border-black'
                                        : isDarkMode ? 'text-gray-300 hover:text-white border-b-2 border-gray-600' : 'text-gray-800 hover:text-black border-b-2 border-gray-300'
                                        }`}
                                >
                                    {tab.name}
                                </div>
                            ))}
                        </div>

                        <motion.div
                            key={activeTab}
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            className={`p-4 py-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}
                        >
                            <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>{activeTab} Content</h3>
                            <p>{tabContents[activeTab].text}</p>
                            <a
                                onClick={() => router.push(tabContents[activeTab].buttonLink)}
                                className={`mt-4 inline-block px-4 py-2 border rounded transition duration-300 cursor-pointer 
                                    ${isDarkMode
                                        ? 'border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white'
                                        : 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
                                    }`}
                            >
                                {tabContents[activeTab].buttonText}
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
