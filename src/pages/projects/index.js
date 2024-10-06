// src/pages/projects.js
import Head from 'next/head';
import { useTheme } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projectData = [
    {
        title: "StatementAnything",
        description: "A blogging platform where users can write about anything they want, developed with AWS, PostgreSQL, Next.js, Tailwind CSS, and Prisma.",
        image: "/statementanything.png",
        technologies: ["AWS", "PostgreSQL", "Next.js", "Tailwind CSS", "Prisma"],
        link: "https://stealth-ai-six.vercel.app/"
    },
    {
        title: "OneStopDashboard",
        description: "Developed a universal dashboard for database management with multiple modules, featuring role-based access management and email validation.",
        image: "/dashboard.png",
        technologies: ["MERN", "Node.js", "Express.js", "MongoDB", "React.js"],
        link: "https://main--onestopdashboard.netlify.app/"
    },
    {
        title: "Travelano",
        description: "Designed and developed a travel application focusing on user experience and seamless navigation.",
        image: "/travelano.png",
        technologies: ["React", "CSS", "JavaScript"],
        link: "https://hereitskamal.github.io/travelano/"
    },
];

export default function Projects() {
    const { isDarkMode } = useTheme();
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardRef = useRef(null);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projectData.length) % projectData.length);
    };

    const handleTouchStart = (e) => {
        const touchStartX = e.touches[0].clientX;
        cardRef.current.dataset.touchStartX = touchStartX;
    };

    const handleTouchMove = (e) => {
        const touchStartX = parseFloat(cardRef.current.dataset.touchStartX);
        const touchEndX = e.touches[0].clientX;

        if (touchStartX - touchEndX > 50) {
            handleNext();
        } else if (touchEndX - touchStartX > 50) {
            handlePrev();
        }
    };

    return (
        <>
            <Head>
                <title>Projects - Kamal Sharma</title>
                <meta name="description" content="Explore the projects of Kamal Sharma." />
            </Head>
            <div className={`flex flex-col w-full items-center justify-center py-6 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
                <div className={`relative w-full overflow-hidden`}>
                    <div
                        ref={cardRef}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        className={`flex container mx-auto transition-transform duration-300`}
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {projectData.map((project, index) => (
                            <motion.div
                                key={index}
                                className={`flex-shrink-0 w-full p-6 rounded-lg flex ${isDarkMode ? 'bg-black' : 'bg-white'} transition-all`}
                            >
                                <div className="flex flex-col max-w-2xl">
                                    <h2 className={`text-5xl pb-4 font-thin ${isDarkMode ? 'text-white' : 'text-black'}`}>{project.title}</h2>
                                    <p className={`text ${isDarkMode ? 'text-gray-400' : 'text-gray-800'}`}>{project.description}</p>
                                    <div className="mt-4">
                                        <h3 className="text-xl">Technologies:</h3>
                                        <div className="flex flex-wrap mt-2">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span key={techIndex} className={`border ${isDarkMode ? 'border-gray-400 text-gray-400' : 'border-gray-800 text-gray-800'} px-3 py-1 rounded-full text-sm m-1`}>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={`mt-4 inline-flex items-center px-4 py-2 rounded text-green-500 hover:text-green-400`}>
                                        View Project
                                    </a>
                                </div>
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className={`rounded-lg my-4 ml-6`} 
                                    style={{
                                        height: '350px',
                                        width: index === 0 ? 'auto' : '100%',
                                        objectFit: index === 0 ? 'cover' : 'contain'
                                    }} 
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
                {currentIndex > 0 && (
                    <div
                        onClick={handlePrev}
                        className={`absolute left-0 top-1/2 cursor-pointer p-2 transition-opacity duration-200 ${isDarkMode ? 'text-white' : 'text-black'} overlay-screen opacity-40 hover:opacity-100`}
                    >
                        <FaChevronLeft size={56} />
                    </div>
                )}
                {currentIndex < projectData.length - 1 && (
                    <div
                        onClick={handleNext}
                        className={`absolute right-0 top-1/2 cursor-pointer p-1 transition-opacity duration-200 ${isDarkMode ? 'text-white' : 'text-black'} overlay-screen opacity-40 hover:opacity-100`}
                    >
                        <FaChevronRight size={56} style={{ strokeWidth: 2 }} />
                    </div>
                )}
            </div>
        </>
    );
}
