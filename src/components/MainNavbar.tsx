import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';

function Navbar() {
    const [open, setOpen] = React.useState(false);
    const scrolled = useScroll(10);

    const links = [
        { label: 'About', href: '#about' },
        { label: 'Why TSA', href: '#why-tsa' },
        { label: 'Skills', href: '#skills' },
        { label: 'Courses', href: '#courses' },
        { label: 'Contact', href: '#contact' },
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId.replace("#", ""));
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setOpen(false);
    };

    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <header
            className={cn(
                'fixed top-0 inset-x-0 z-100 mx-auto w-full max-w-[1440px] transition-all duration-300 ease-out bg-transparent',
                {
                    'bg-[#0d1224]/30 border-[#25213b] backdrop-blur-md md:top-4 md:max-w-6xl md:rounded-full md:border md:shadow-lg':
                        scrolled && !open,
                    'bg-[#0d1224]/90': open,
                },
            )}
        >
            <nav
                className={cn(
                    'flex h-16 w-full items-center justify-between px-6 transition-all duration-300 ease-out md:h-14',
                    {
                        'md:px-8': scrolled,
                    },
                )}
            >
                <button
                    onClick={() => scrollToSection("#home")}
                    className="text-[#8e50ff] text-2xl font-bold transition-all hover:scale-105 cursor-pointer"
                >
                    Harish Kannan J S
                </button>

                <div className="hidden items-center gap-1 md:flex">
                    {links.map((link, i) => (
                        <button
                            key={i}
                            onClick={() => scrollToSection(link.href)}
                            className={cn(
                                buttonVariants({ variant: 'ghost' }),
                                "text-sm text-white hover:text-purple-600 transition-colors cursor-pointer"
                            )}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white hover:bg-white/10"
                >
                    <MenuToggleIcon open={open} className="size-6" duration={300} />
                </Button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={cn(
                    'fixed top-16 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden bg-[#0d1224] transition-all duration-300 md:hidden',
                    open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0',
                )}
            >
                <div className="flex h-full flex-col p-6 gap-4">
                    {links.map((link) => (
                        <button
                            key={link.label}
                            onClick={() => scrollToSection(link.href)}
                            className={cn(
                                buttonVariants({
                                    variant: 'ghost',
                                    className: 'justify-start text-lg text-white hover:text-pink-600 w-full',
                                })
                            )}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
}

export default Navbar;