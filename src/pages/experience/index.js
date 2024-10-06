import Head from 'next/head';
import { useTheme } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const experienceData = [
    {
        company: "Insignia Consultancy Solution",
        position: "ReactJS Developer",
        startDate: "June 2024",
        endDate: "Present",
        responsibilities: [
            "Designed and implemented e-commerce website features.",
            "Maintained database management systems and resolved performance issues.",
            "Enhanced database performance for improved system efficiency.",
            "Created a Storybook library for consistent UI component development.",
            "Collaborated with design teams to improve user interface designs.",
            "Conducted code reviews to ensure quality standards.",
            "Developed unit tests to validate application functionality."
        ],
        skills: ["ReactJS", "JavaScript", "Storybook", "E-commerce Development"]
    },
    {
        company: "Pictournic",
        position: "MERN Stack Developer",
        startDate: "January 2024",
        endDate: "June 2024",
        responsibilities: [
            "Architected a comprehensive database system using the MERN stack.",
            "Developed frontend and backend components for seamless integration.",
            "Created responsive user interfaces with React.js for enhanced user experience.",
            "Implemented server-side logic and API integrations with Node.js.",
            "Ensured scalable and secure system infrastructure.",
            "Integrated OAuth 2.0 for secure user authentication.",
            "Leveraged AWS S3 for efficient cloud storage solutions."
        ],
        skills: ["MERN Stack", "Node.js", "Express.js", "MongoDB", "ReactJS", "AWS S3", "OAuth 2.0", "Leaflet.js"]
    },
    {
        company: "VJ Smart Living",
        position: "Front-end Developer",
        startDate: "February 2022",
        endDate: "December 2023",
        responsibilities: [
            "Developed a workflow management system for remote appliance access.",
            "Implemented CRM features to manage customer relationships effectively.",
            "Streamlined operations to enhance customer service experiences.",
            "Facilitated communication channels for service requests.",
            "Designed and developed user-friendly interfaces with HTML/CSS.",
            "Collaborated with backend teams for smooth data integration.",
            "Conducted user testing to gather feedback for continuous improvement."
        ],
        skills: ["HTML", "CSS", "JavaScript", "CRM Development"]
    },
];

export default function WorkExperience() {
    const { isDarkMode } = useTheme();
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardRef = useRef(null);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % experienceData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + experienceData.length) % experienceData.length);
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
                <title>Work Experience - Kamal Sharma</title>
                <meta name="description" content="Explore the work experience of Kamal Sharma, a ReactJS Developer." />
            </Head>
            <div className={`flex flex-col w-full items-center justify-center py-6 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
                <div className="container mx-auto p-6">
                    <div className="flex justify-between mt-8">
                        <div className="flex flex-col">
                            <h4 className={`text-5xl font-semibold text-green-500`}>10+</h4>
                            <span className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Projects Completed</span>
                        </div>
                        <div className="flex flex-col">
                            <h4 className={`text-5xl font-semibold text-green-500`}>40%</h4>
                            <span className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Reduction in Coding</span>
                        </div>
                        <div className="flex flex-col">
                            <h4 className={`text-5xl font-semibold text-green-500`}>3</h4>
                            <span className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Lead Projects</span>
                        </div>
                    </div>
                </div>
                <div className={`relative w-full overflow-hidden`}>
                    <div
                        ref={cardRef}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        className={`flex container mx-auto transition-transform duration-300 `}
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {experienceData.map((experience, index) => (
                            <motion.div
                                key={index}
                                className={`flex-shrink-0 w-full p-6 rounded-lg ${isDarkMode ? 'bg-black' : 'bg-white'} transition-all`}
                            >
                                <div className="flex flex-col max-w-2xl">
                                    <h2 className={`text-5xl font-thin ${isDarkMode ? 'text-white' : 'text-black'}`}>{experience.position}</h2>
                                    <span className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-800'}`}>{experience.company}</span>
                                    <div className={`pt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-800'}`}>
                                        ( {experience.startDate} - {experience.endDate} )
                                    </div>
                                    <div className={`mt-2  ${isDarkMode ? 'text-gray-400' : 'text-gray-800'}`}>
                                        <h3 className="text-xl">Responsibilities:</h3>
                                        <ul className="list-disc pl-5 text-sm">
                                            {experience.responsibilities.map((responsibility, respIndex) => (
                                                <li key={respIndex}>{responsibility}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="font-bold">Skills:</h3>
                                        <div className="flex flex-wrap mt-2">
                                            {experience.skills.map((skill, skillIndex) => (
                                                <span key={skillIndex} className={`border ${isDarkMode ? 'border-gray-400 text-gray-400' : 'border-gray-800 text-gray-800'} px-3 py-1 rounded-full text-sm m-1`}>
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                {currentIndex > 0 && (
                    <div
                        onClick={handlePrev}
                        className={`absolute left-0 top-1/2 cursor-pointer p-2 transition-opacity duration-200 ${isDarkMode ? 'text-white' : 'text-black'} opacity-20 hover:opacity-100`}
                    >
                        <FaChevronLeft size={56} />
                    </div>
                )}
                {currentIndex < experienceData.length - 1 && (
                    <div
                        onClick={handleNext}
                        className={`absolute right-0 top-1/2 cursor-pointer p-1 transition-opacity duration-200 ${isDarkMode ? 'text-white' : 'text-black'} opacity-20 hover:opacity-100`}
                    >
                        <FaChevronRight size={56} style={{ strokeWidth: 2 }} />
                    </div>
                )}


            </div>
        </>
    );
}
