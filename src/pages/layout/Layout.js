import { useTheme } from "../../contexts/ThemeContext";

const Layout = ({ children }) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`flex flex-col min-h-screen justify-center items-center transition-colors duration-300 ${
        isDarkMode ? "bg-[#0a0a0a]" : "bg-white"
      }`}
    >
      <main className="w-full">
        {children}
      </main>
    </div>
  );
};

export default Layout;
