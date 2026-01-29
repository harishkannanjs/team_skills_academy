import React from 'react';
import { cn } from "@/lib/utils";

interface NewCardProps {
    icon: string | React.ReactNode;
    title: string;
    description: string;
    badge?: string;
    footer?: React.ReactNode;
    className?: string;
    delay?: string;
}

export const NewCard: React.FC<NewCardProps> = ({
    icon,
    title,
    description,
    badge,
    footer,
    className,
    delay
}) => {
    return (
        <div
            className={cn("relative overflow-hidden rounded-2xl flex flex-col group transition-all duration-300 hover:scale-[1.02] animate-float", className)}
            style={{ animationDelay: delay }}
        >
            {/* Card Border with Gradient Effect */}
            <div className="absolute inset-0 p-[2px] rounded-2xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 group-hover:from-indigo-500/30 group-hover:via-purple-500/30 group-hover:to-pink-500/30 -z-10" />

            {/* Main Card Background - More transparent with stronger blur */}
            <div className="flex flex-col h-full rounded-[14px] bg-[#0d1224]/40 backdrop-blur-2xl border border-white/5 group-hover:border-white/10 transition-colors">
                <div className="p-6 flex flex-col h-full">
                    {/* Visual Icon Container */}
                    <div className="mb-6 flex justify-center relative">
                        <div className="w-full h-40 rounded-xl bg-[#1b233d] border border-white/5 inner-glow overflow-hidden relative flex items-center justify-center">
                            {/* Animated grid background */}
                            <div className="absolute inset-0 opacity-10">
                                <div
                                    className="w-full h-full animate-pulse"
                                    style={{
                                        backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)',
                                        backgroundSize: '15px 15px'
                                    }}
                                />
                            </div>

                            {/* Floating Icon */}
                            <div className="relative z-10 text-6xl transform group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                                {icon}
                            </div>

                            {/* Subtle radial glow */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    </div>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

                    <div className="flex flex-col flex-1">
                        {badge && (
                            <span className="inline-block self-start px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full text-[10px] font-medium mb-3 border border-indigo-500/20 uppercase tracking-wider">
                                {badge}
                            </span>
                        )}

                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                            {title}
                        </h3>

                        <p className="text-white/60 leading-relaxed text-sm mb-6 flex-1">
                            {description}
                        </p>

                        {footer && (
                            <div className="mt-auto">
                                <div className="w-full h-px bg-white/5 mb-4" />
                                {footer}
                            </div>
                        )}

                        {!footer && (
                            <div className="flex justify-between items-center mt-auto">
                                <div className="h-2 w-12 rounded-full bg-indigo-500/30 group-hover:w-20 transition-all duration-500" />
                                <span className="text-white/30 text-[10px] uppercase tracking-widest group-hover:text-indigo-400/50 transition-colors">TEAM SKILLS</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
