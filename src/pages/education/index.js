import Head from 'next/head';
import { useTheme } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion';

const educationData = [
    {
        year: "2010",
        title: "10th Standerd",
        institute: "The Sapphire School",
        field: "Science and Mathematics",
        cgpa: "CGPA: 7.3",
    },
    {
        year: "2012",
        title: "12th Standerd",
        institute: "Mother Teresa H.S School",
        field: "Physics, Chemistry and Mathematics",
        cgpa: "CGPA: 6.0",
    },
    {
        year: "2016",
        title: "College",
        institute: "PQR University",
        field: "Computer Science",
        cgpa: "CGPA: 6.63",
        skills: ["Web Development", "UI/UX Design", "Database Management", "Javascript", "Angular"],
    },
];

export default function About() {
    const { isDarkMode } = useTheme();

    return (
        <>
            <Head>
                <title>About - Kamal Sharma</title>
                <meta name="description" content="Learn more about Kamal Sharma, a UI/UX designer and developer." />
            </Head>
            <div className={`flex flex-col w-full items-center justify-center p-8 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
                <div className="relative w-full max-w-3xl">
                    <div className={`absolute h-full border-l-2 ${isDarkMode ? 'border-gray-200' : 'border-gray-200'} left-16 transform -translate-x-1/2`} />

                    <div className="flex flex-col space-y-4">
                        {educationData.map((education, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.3 }}
                                className="flex items-start"
                            >
                                <div className={`text-lg font-bold pt-6 pr-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-800'}`}>{education.year}</div>
                                <div className={`h-12 mr-4`} />
                                <div className={`p-4 rounded ${isDarkMode ? 'bg-black' : 'bg-white'} flex-grow`}>
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-4xl pb-3 font-thin font-bold">{education.title}</h2>
                                        <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-800'}`}>{education.cgpa}</span>
                                    </div>
                                    <p className="text-sm">Institute: {education.institute}</p>
                                    <p className="text-sm">Field of Study: {education.field}</p>
                                    <div className="mt-2">
                                        {education.skills && <>
                                            <h3 className="font-bold">Skills:</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {education.skills.map((skill, skillIndex) => (
                                                    <span key={skillIndex} className={`border text-sm border-gray-300 rounded-md px-2 py-1 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </>}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
