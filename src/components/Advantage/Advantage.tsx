import React from 'react';
import styles from './Advantage.module.css';
import { NewCard } from '../ui/new-card';

const Advantage: React.FC = () => {
    const advantages = [
        {
            icon: "🏆",
            title: "Seasoned Professionals",
            text: "Our team brings a wealth of real-world experience to the table, ensuring the training programs are practical, relevant, and address the current challenges faced by industries.",
            badge: "Expertise"
        },
        {
            icon: "🚀",
            title: "Fresh Perspective",
            text: "As an Experienced Team, we are nimble and adaptable. We can quickly respond to emerging trends and develop cutting-edge training programs to keep your workforce future-proof.",
            badge: "Innovation"
        },
        {
            icon: "🎯",
            title: "Personalized Approach",
            text: "We prioritize a personalized approach, working closely with each client to understand their specific needs and develop customized programs for optimal impact.",
            badge: "Customized"
        }
    ];

    return (
        <section className={styles.advantage}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>TSA Advantage</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {advantages.map((adv, index) => (
                        <NewCard
                            key={index}
                            icon={adv.icon}
                            title={adv.title}
                            description={adv.text}
                            badge={adv.badge}
                            delay={`${index * 0.5}s`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Advantage;
