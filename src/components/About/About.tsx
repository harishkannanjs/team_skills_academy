import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>About TEAM Skill Academy</h2>

                <p className={styles.profileText}>
                    TEAM Skill Academy is a new and innovative training center, driven by a team of industry
                    experts with over 20 years of experience in Technical and Soft Skill training to the leading Industries.
                </p>

                <div className={styles.highlights}>
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>🏆</div>
                        <h4 className={styles.cardTitle}>20+ Years of Expertise</h4>
                        <p className={styles.cardText}>
                            Leveraging two decades of industry leadership to deliver world-class technical and professional development.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>🛠️</div>
                        <h4 className={styles.cardTitle}>Holistic Skill Mastery</h4>
                        <p className={styles.cardText}>
                            A specialized blend of cutting-edge technical training and essential soft skills tailored for modern industry demands.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>🚀</div>
                        <h4 className={styles.cardTitle}>Innovation-Driven</h4>
                        <p className={styles.cardText}>
                            Empowering teams through modern, result-oriented methodologies designed by experts who have shaped leading industries.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
