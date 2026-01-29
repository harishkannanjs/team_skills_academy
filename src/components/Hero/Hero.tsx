"use client";

import React from "react";
import styles from "./Hero.module.css";
import {
    TextRevealCard,
    TextRevealCardTitle,
    TextRevealCardDescription,
} from "@/components/ui/text-reveal-card";
import { Text_03 } from "@/components/ui/wave-text";

const Hero: React.FC = () => {
    return (
        <section id="home" className={styles.hero}>
            <div className={styles.container}>
                <div className="flex flex-col items-center justify-center scale-100 md:scale-150 transform transition-transform duration-500">
                    <TextRevealCard
                        text="You see the skill gap"
                        revealText="We design training that closes it"
                        className="text-center w-full md:w-auto"
                    >
                        <TextRevealCardTitle className="text-center text-2xl overflow-visible py-2">
                            <Text_03
                                text="Training built for real-world performance."
                                className="text-2xl font-bold text-white block"
                            />
                        </TextRevealCardTitle>

                        <TextRevealCardDescription className="text-center text-lg overflow-visible py-2">
                            <Text_03
                                text="Designed by industry experts. Customized for measurable impact."
                                className="text-lg text-[#a9a9a9] block"
                            />
                        </TextRevealCardDescription>
                    </TextRevealCard>
                </div>
            </div>
        </section>
    );
};

export default Hero;
