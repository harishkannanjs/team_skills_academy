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
                <div className="flex flex-col items-center justify-center scale-150 transform transition-transform duration-500">
                    <TextRevealCard
                        text="You see the skill gap"
                        revealText="We design training that closes it"
                        className="text-center"
                    >
                        <TextRevealCardTitle className="text-center text-2xl">
                            Training built for real-world performance.
                        </TextRevealCardTitle>

                        <TextRevealCardDescription className="text-center text-lg">
                            Designed by industry experts. Customized for measurable impact.
                        </TextRevealCardDescription>
                    </TextRevealCard>
                </div>
            </div>
        </section>
    );
};

export default Hero;
