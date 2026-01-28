import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Header.module.css';

const Header: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <h1>Team Skills Academy</h1>
                </div>

                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li>
                            <button onClick={() => scrollToSection('home')} className={styles.navLink}>
                                Home
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('about')} className={styles.navLink}>
                                About
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('why-tsa')} className={styles.navLink}>
                                WhyTSA
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('courses')} className={styles.navLink}>
                                Courses
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('contact')} className={styles.navLink}>
                                Contact
                            </button>
                        </li>
                    </ul>
                </nav>

                <button
                    onClick={toggleTheme}
                    className={styles.themeToggle}
                    aria-label="Toggle theme"
                >
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>
            </div>
        </header>
    );
};

export default Header;
