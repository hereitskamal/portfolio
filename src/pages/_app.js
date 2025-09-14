import { ThemeProvider } from "../contexts/ThemeContext";
import "../styles/globals.css";
import Layout from "./layout/Layout";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      {/* Apply font variable at root */}
      <div className={poppins.variable}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
