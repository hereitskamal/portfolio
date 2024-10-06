import Head from 'next/head';
import { useTheme } from '../../contexts/ThemeContext';

export default function About() {
    const { isDarkMode } = useTheme();

    return (
        <>
            <Head>
                <title>About - Kamal Sharma</title>
                <meta name="description" content="Learn more about Kamal Sharma, a ReactJS Developer." />
            </Head>
            <div className={`flex flex-col w-full items-center justify-center p-8 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
                <h1 className="text-4xl font-bold pb-4 text-center">About Me</h1>
                <p className="text text-center max-w-2xl">
                    I'm Kamal Sharma, a passionate ReactJS Developer based in Bengaluru, Karnataka, India. With a strong foundation in computer science and hands-on experience in web development, I focus on creating engaging and user-friendly applications. My journey has equipped me with a diverse skill set, including proficiency in various technologies such as React, Node.js, and database management. I thrive on solving complex problems and continuously seek opportunities to learn and grow in the tech industry, while also enjoying collaboration and creativity in every project I undertake.
                </p>
            </div>
        </>
    );
}
