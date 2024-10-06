
import { ThemeProvider } from '../contexts/ThemeContext';
import '../styles/globals.css';
import Layout from './layout/Layout';

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

export default MyApp;
