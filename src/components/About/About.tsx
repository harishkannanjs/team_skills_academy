import React from 'react';
import styles from './About.module.css';
import { NewCard } from '../ui/new-card';

const About: React.FC = () => {
    const highlights = [
        {
            icon: "🏆",
            title: "20+ Years of Expertise",
            text: "Leveraging two decades of industry leadership to deliver world-class technical and professional development.",
            badge: "Expertise"
        },
        {
            icon: "🛠️",
            title: "Holistic Skill Mastery",
            text: "A specialized blend of cutting-edge technical training and essential soft skills tailored for modern industry demands.",
            badge: "Skills"
        },
        {
            icon: "🚀",
            title: "Innovation-Driven",
            text: "Empowering teams through modern, result-oriented methodologies designed by experts who have shaped leading industries.",
            badge: "Innovation"
        }
    ];

    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>About TEAM Skill Academy</h2>

                <p className={styles.profileText}>
                    TEAM Skill Academy is a new and innovative training center, driven by a team of industry
                    experts with over 20 years of experience in Technical and Soft Skill training to the leading Industries.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {highlights.map((item, index) => (
                        <NewCard
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            description={item.text}
                            badge={item.badge}
                            delay={`${index * 0.5}s`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
