import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Get in Touch</h2>

                <p className={styles.introText}>
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.
                </p>

                <div className={styles.contactWrapper}>
                    {/* Contact Information */}
                    <div className={styles.contactInfo}>
                        <div className={styles.infoCard}>
                            <h3 className={styles.infoTitle}>📍 Address</h3>
                            <p className={styles.infoText}>
                                TEAM SKILLS ACADEMY<br />
                                MC Tech Buildings, Kottur,<br />
                                Malaiyandipattanam,<br />
                                Pollachi – 642007, Tamil Nadu
                            </p>
                        </div>

                        <div className={styles.infoCard}>
                            <h3 className={styles.infoTitle}>📞 Contact Details</h3>
                            <p className={styles.infoText}>
                                <strong>Mobile:</strong> 81484 99898 & 90429 20155<br />
                                <strong>Email:</strong> info@teamskillsacademy.co.in
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={styles.formWrapper}>
                        <form onSubmit={handleSubmit} className={styles.contactForm}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.label}>Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={styles.input}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.label}>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={styles.input}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.label}>Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={styles.textarea}
                                    rows={5}
                                    required
                                />
                            </div>

                            <button type="submit" className={styles.submitBtn}>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
