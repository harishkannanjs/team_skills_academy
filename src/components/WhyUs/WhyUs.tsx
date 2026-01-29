import React from 'react';
import styles from './WhyUs.module.css';
import { NewCard } from '../ui/new-card';

const WhyUs: React.FC = () => {
    const reasons = [
        {
            icon: "🎓",
            title: "Experienced Instructors",
            text: "Gain valuable insights from our team of seasoned professionals who have walked the walk and can effectively guide your workforce.",
            badge: "Expertise"
        },
        {
            icon: "📚",
            title: "Cutting-Edge Curriculum",
            text: "Our constantly evolving curriculum ensures you have access to the latest industry knowledge and best practices.",
            badge: "Curriculum"
        },
        {
            icon: "⚙️",
            title: "Customized Training",
            text: "We tailor programs to address your specific needs, maximizing the impact on your company's performance.",
            badge: "Custom"
        }
    ];

    return (
        <section id="why-tsa" className={styles.whyUs}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Why us?</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {reasons.map((reason, index) => (
                        <NewCard
                            key={index}
                            icon={reason.icon}
                            title={reason.title}
                            description={reason.text}
                            badge={reason.badge}
                            delay={`${index * 0.5}s`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
