import { useTheme } from "../../contexts/ThemeContext";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Layout = ({ children }) => {
    const { isDarkMode } = useTheme();

    return (
        <div className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <Header />
            <main className="flex flex-1 justify-center">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
