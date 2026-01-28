import React from 'react';
import styles from './WhyUs.module.css';

const WhyUs: React.FC = () => {
    return (
        <section id="why-tsa" className={styles.whyUs}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Why us?</h2>

                <div className={styles.reasons}>
                    <div className={styles.reason}>
                        <div className={styles.reasonIcon}>🎓</div>
                        <h3 className={styles.reasonTitle}>Experienced Instructors</h3>
                        <p className={styles.reasonText}>
                            Gain valuable insights from our team of seasoned professionals who have walked the walk
                            and can effectively guide your workforce.
                        </p>
                    </div>

                    <div className={styles.reason}>
                        <div className={styles.reasonIcon}>📚</div>
                        <h3 className={styles.reasonTitle}>Cutting-Edge Curriculum</h3>
                        <p className={styles.reasonText}>
                            Our constantly evolving curriculum ensures you have access to the latest industry knowledge
                            and best practices.
                        </p>
                    </div>

                    <div className={styles.reason}>
                        <div className={styles.reasonIcon}>⚙️</div>
                        <h3 className={styles.reasonTitle}>Customized Training</h3>
                        <p className={styles.reasonText}>
                            We tailor programs to address your specific needs, maximizing the impact on your company's
                            performance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
