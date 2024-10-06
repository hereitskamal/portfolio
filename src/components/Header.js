import Link from 'next/link';
import { useTheme } from '../contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <header className={`p-4 py-2 ${isDarkMode ? 'bg-black' : 'bg-gray-100'} transition-colors duration-300`}>
            <nav className="container mx-auto flex justify-between items-center">
                <h1 className={`text-4xl font-thin ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    <Link href="/">Portfolio</Link>
                </h1>
                <button 
                    onClick={toggleTheme} 
                    className={`rounded transition-colors duration-300 ${isDarkMode ? 'text-yellow-500 hover:text-yellow-400' : 'text-gray-800 hover:text-gray-600'}`}
                    aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                    {isDarkMode ? (
                        <FaSun size={24} />
                    ) : (
                        <FaMoon size={24} />
                    )}
                </button>
            </nav>
        </header>
    );
};

export default Header;
