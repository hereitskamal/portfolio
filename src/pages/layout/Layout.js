import { useTheme } from "../../contexts/ThemeContext";

const Layout = ({ children }) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`flex flex-col min-h-screen justify-center items-center ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <main className="w-full">
        {children}
      </main>
    </div>
  );
};

export default Layout;
