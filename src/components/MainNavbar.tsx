"use client";
import { useState } from "react";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useTheme } from "@/context/ThemeContext";

export default function MainNavbar() {
    const { theme, toggleTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        { name: "WhyTSA", link: "#why-tsa" },
        { name: "Courses", link: "#courses" },
        { name: "Contact", link: "#contact" },
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId.replace("#", ""));
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="relative w-full">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} onItemClick={scrollToSection} />
                    <div className="relative z-[70] flex flex-shrink-0 items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                        >
                            {theme === "light" ? "🌙" : "☀️"}
                        </button>
                        <NavbarButton variant="primary">Apply Now</NavbarButton>
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <div className="flex items-center gap-2">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                            >
                                {theme === "light" ? "🌙" : "☀️"}
                            </button>
                            <MobileNavToggle
                                isOpen={isMobileMenuOpen}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            />
                        </div>
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        {navItems.map((item, idx) => (
                            <button
                                key={`mobile-link-${idx}`}
                                onClick={() => scrollToSection(item.link)}
                                className="relative text-left w-full px-4 py-2 text-neutral-600 dark:text-neutral-300"
                            >
                                <span className="block">{item.name}</span>
                            </button>
                        ))}
                        <div className="flex w-full flex-col gap-4 px-4 pt-4">
                            <NavbarButton
                                variant="primary"
                                className="w-full text-center"
                            >
                                Apply Now
                            </NavbarButton>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
        </div>
    );
}
