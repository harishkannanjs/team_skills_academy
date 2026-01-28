import { ThemeProvider } from './context/ThemeContext';
import MainNavbar from './components/MainNavbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Approach from './components/Approach/Approach';
import Advantage from './components/Advantage/Advantage';
import WhyUs from './components/WhyUs/WhyUs';
import Courses from './components/Courses/Courses';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
    return (
        <ThemeProvider>
            <div className="app">
                <MainNavbar />
                <main>
                    <Hero />
                    <About />
                    <Approach />
                    <Advantage />
                    <WhyUs />
                    <Courses />
                    <Contact />
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
