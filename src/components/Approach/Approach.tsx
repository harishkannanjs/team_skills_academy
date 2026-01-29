import React from 'react';
import styles from './Approach.module.css';
import { NewCard } from '../ui/new-card';

const Approach: React.FC = () => {
    const features = [
        {
            icon: "🎯",
            title: "Customized Training",
            text: "We believe in a personalized approach to training. We work closely with our clients to understand their specific needs and develop customized programs that address their unique challenges and goals.",
            badge: "Custom"
        },
        {
            icon: "👨‍🏫",
            title: "Experienced Trainers",
            text: "Our team of trainers is comprised of industry experts and seasoned professionals who have a wealth of knowledge and practical experience. They are passionate about knowledge sharing and dedicated to helping participants achieve their full potential.",
            badge: "Experts"
        },
        {
            icon: "🎓",
            title: "Interactive Learning",
            text: "We employ interactive learning methodologies that promote active participation, engagement, and knowledge retention.",
            badge: "Interactive"
        }
    ];

    return (
        <section className={styles.approach}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Our Approach</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {features.map((feature, index) => (
                        <NewCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.text}
                            badge={feature.badge}
                            delay={`${index * 0.5}s`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Approach;
