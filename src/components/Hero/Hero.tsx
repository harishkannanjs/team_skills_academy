"use client";

import React from "react";
import styles from "./Hero.module.css";
import {
    TextRevealCard,
    TextRevealCardTitle,
    TextRevealCardDescription,
} from "@/components/ui/text-reveal-card";

const Hero: React.FC = () => {
    return (
        <section id="home" className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.revealCardWrapper}>
                        <div className={styles.cardScale}>
                            <TextRevealCard
                                text="You see the skill gap"
                                revealText="We design training that closes it"
                            >
                                <TextRevealCardTitle>
                                    Training built for real-world performance.
                                </TextRevealCardTitle>

                                <TextRevealCardDescription>
                                    Designed by industry experts. Customized for measurable impact.
                                </TextRevealCardDescription>
                            </TextRevealCard>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
