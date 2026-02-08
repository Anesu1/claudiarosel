"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"

const navItems = [
    { name: "News", href: "/news" },
    { name: "Humanitarian", href: "/humanitarian" },
    { name: "Field Notes", href: "/field-notes" },
    { name: "The Night She Left", href: "/the-night-she-left" },
    { name: "Mexican Tales", href: "/mexican-tales" },
    { name: "Electric Avenue", href: "/electric-avenue" },
    { name: "Travel Journal", href: "/journal" },
    { name: "About", href: "/about" },
]

export function Header() {
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference text-white">
            <div className="flex items-center justify-between">
                <Link href="/" className="text-xl font-bold uppercase tracking-widest">
                    Claudia Rosel
                </Link>

                <button
                    type="button"
                    aria-label="Toggle navigation"
                    className="md:hidden flex flex-col gap-1.5"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <span className="w-6 h-0.5 bg-white" />
                    <span className="w-6 h-0.5 bg-white" />
                    <span className="w-6 h-0.5 bg-white" />
                </button>

                <nav className="hidden md:flex gap-6 text-sm uppercase tracking-wide">
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

            {menuOpen && (
                <nav className="mt-6 flex flex-col gap-3 text-sm uppercase tracking-wide md:hidden">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "hover:opacity-70 transition-opacity",
                                pathname === item.href && "underline underline-offset-4"
                            )}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    )
}
