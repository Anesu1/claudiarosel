"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
    { name: "News", href: "/news" },
    { name: "Humanitarian", href: "/humanitarian" },
    { name: "The night she left", href: "/the-night-she-left" },
    { name: "Mexican Tales", href: "/mexican-tales" },
    { name: "Electric Avenue", href: "/electric-avenue" },
    { name: "Travel Journal", href: "/journal" },
    { name: "About", href: "/about" },
]

export function Header() {
    const pathname = usePathname()

    return (
        <header className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <Link href="/" className="text-xl font-bold uppercase tracking-widest mb-4 md:mb-0">
                    Claudia Rosel
                </Link>

                <nav className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm uppercase tracking-wide">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "hover:opacity-70 transition-opacity",
                                pathname === item.href && "underline underline-offset-4"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}
