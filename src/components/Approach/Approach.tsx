import React from 'react';
import styles from './Approach.module.css';

const Approach: React.FC = () => {
    return (
        <section className={styles.approach}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Our Approach</h2>

                <div className={styles.features}>
                    <div className={styles.feature}>
                        <div className={styles.featureIcon}>🎯</div>
                        <h3 className={styles.featureTitle}>Customized Training</h3>
                        <p className={styles.featureText}>
                            We believe in a personalized approach to training. We work closely with our clients to
                            understand their specific needs and develop customized programs that address their unique
                            challenges and goals.
                        </p>
                    </div>

                    <div className={styles.feature}>
                        <div className={styles.featureIcon}>👨‍🏫</div>
                        <h3 className={styles.featureTitle}>Experienced Trainers</h3>
                        <p className={styles.featureText}>
                            Our team of trainers is comprised of industry experts and seasoned professionals who have
                            a wealth of knowledge and practical experience. They are passionate about knowledge sharing
                            and dedicated to helping participants achieve their full potential.
                        </p>
                    </div>

                    <div className={styles.feature}>
                        <div className={styles.featureIcon}>🎓</div>
                        <h3 className={styles.featureTitle}>Interactive Learning</h3>
                        <p className={styles.featureText}>
                            We employ interactive learning methodologies that promote active participation, engagement,
                            and knowledge retention.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Approach;
