import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    {/* Social Media Links */}
                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>Connect With Us</h3>
                        <div className={styles.socialLinks}>
                            <a href="#" className={styles.socialLink} aria-label="Facebook">
                                📘 Facebook
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Instagram">
                                📷 Instagram
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Twitter">
                                🐦 Twitter
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="GitHub">
                                💻 GitHub
                            </a>
                        </div>
                    </div>

                    {/* About Us Links */}
                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>About Us</h3>
                        <ul className={styles.linkList}>
                            <li><a href="#" className={styles.link}>Company History</a></li>
                            <li><a href="#" className={styles.link}>Meet the Team</a></li>
                            <li><a href="#" className={styles.link}>Employee Handbook</a></li>
                            <li><a href="#" className={styles.link}>Careers</a></li>
                        </ul>
                    </div>

                    {/* Our Services Links */}
                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>Our Services</h3>
                        <ul className={styles.linkList}>
                            <li><a href="#" className={styles.link}>Web Development</a></li>
                            <li><a href="#" className={styles.link}>Web Design</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.copyright}>
                    <p>&copy; {new Date().getFullYear()} Team Skills Academy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
