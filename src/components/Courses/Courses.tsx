import React from 'react';
import styles from './Courses.module.css';

const Courses: React.FC = () => {
    const technicalCourses = [
        "Basic Skill Training Programme for Freshers",
        "Refresher Training Programme for Experienced",
        "Programming & Operation of CNC Turning Centres",
        "Programming & Operation of CNC Machining Centre (VMC)",
        "Training Programme on Industrial Automation",
        "Training Programme on Pneumatics",
        "Training Programme on Hydraulics",
        "Training Programme on Electro Pneumatics & Hydraulics",
        "PLC Programming and Industrial Applications",
        "Basic Metrology and Applications in Industries",
        "Advanced Metrology and its Applications",
        "Mechatronics – Fundamentals and Core Concepts",
        "Programmable Logic Controller (PLC) – A Key Technology for Industrial Automation",
        "VFD and its Industry Applications",
        "Servo Technology for Industrial Motion Control",
        "Application of Robots in Manufacturing Automation",
        "Best Practices for Manufacturing Cost Reduction",
        "Operational Excellence through QCD improvement",
        "Process Capability – The Quality Route to Sustained Growth in Manufacturing (Cp, Cpk)",
        "8D Problem Solving Methodology",
        "Statistical Process Control (SPC) & Measurement System Analysis (MSA)",
        "Advanced Product Quality Planning (APQP) & Production Part Approval Process (PPAP)",
        "How to reduce Cost of Poor Quality (COPQ)",
        "Design of Experiments (DOE) for Problem Solving",
        "Building Lean Culture Through Value Stream Mapping (VSM)",
        "Core Tools of Quality (APQP, FMEA, MSA, SPC, PPAP)",
        "Geometric Dimensioning & Tolerancing (GD&T)",
        "Optimization through TPS and Lean Management",
        "Manufacturing Excellence and Best Practices",
        "Lean Management",
        "Six Sigma",
        "Jigs and Fixtures – Practical Applications",
        "Quick Changeover Techniques (SMED)",
        "Surface Finish – Measurement and Improvement",
        "Lean Management / Cycle Time Reduction",
        "POKA YOKE & 5S Housekeeping",
        "Productivity Improvement through OEE",
        "Breakdown Analysis",
        "MTTR-MTBF / CBM",
        "Reliability Centered Maintenance (RCM)",
        "Productivity Improvement through Kanban / JIT"
    ];

    const softSkillsCourses = [
        "Ownership, Accountability, Responsibility",
        "Time and Stress Management",
        "Motivation Skills & Personality",
        "Customer Centricity",
        "Developing Interpersonal Skills",
        "Emotional Intelligence",
        "Team Work Skills"
    ];

    return (
        <section id="courses" className={styles.courses}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Our Courses</h2>

                <div className={styles.courseCategories}>
                    {/* Technical Skills */}
                    <div className={styles.category}>
                        <h3 className={styles.categoryTitle}>
                            <span className={styles.categoryIcon}>💻</span>
                            Technical Skill Training Programmes
                        </h3>
                        <div className={styles.courseList}>
                            {technicalCourses.map((course, index) => (
                                <div key={index} className={styles.courseItem}>
                                    <span className={styles.bullet}>▸</span>
                                    <span className={styles.courseName}>{course}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Soft Skills */}
                    <div className={styles.category}>
                        <h3 className={styles.categoryTitle}>
                            <span className={styles.categoryIcon}>🤝</span>
                            Soft Skills Training Programmes
                        </h3>
                        <div className={styles.courseList}>
                            {softSkillsCourses.map((course, index) => (
                                <div key={index} className={styles.courseItem}>
                                    <span className={styles.bullet}>▸</span>
                                    <span className={styles.courseName}>{course}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Courses;
