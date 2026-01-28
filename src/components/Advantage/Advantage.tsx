import React from 'react';
import styles from './Advantage.module.css';

const Advantage: React.FC = () => {
    return (
        <section className={styles.advantage}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>TSA Advantage</h2>

                <div className={styles.advantages}>
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>🏆</div>
                        <h3 className={styles.cardTitle}>Seasoned Professionals</h3>
                        <p className={styles.cardText}>
                            Our team brings a wealth of real-world experience to the table, ensuring the training
                            programs are practical, relevant, and address the current challenges faced by industries.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>🚀</div>
                        <h3 className={styles.cardTitle}>Fresh Perspective</h3>
                        <p className={styles.cardText}>
                            As an Experienced Team, we are nimble and adaptable. We can quickly respond to emerging
                            trends and develop cutting-edge training programs to keep your workforce future-proof.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>🎯</div>
                        <h3 className={styles.cardTitle}>Personalized Approach</h3>
                        <p className={styles.cardText}>
                            We prioritize a personalized approach, working closely with each client to understand
                            their specific needs and develop customized programs for optimal impact.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantage;
