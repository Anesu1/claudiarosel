"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const navItems = [
    { name: "News", href: "/news" },
    { name: "About", href: "/about" },
]

const projectsItems = [
    { name: "Humanitarian", href: "/humanitarian" },
    { name: "Field Notes", href: "/field-notes" },
    { name: "Mexican Tales", href: "/mexican-tales" },
    { name: "Electric Avenue", href: "/electric-avenue" },
    { name: "Travel Journal", href: "/journal" },
]

const storiesItems = [
    { name: "The Night She Left", href: "/the-night-she-left" },
]

const socialItems = [
    { name: "X / Twitter", href: "https://x.com" },
    { name: "Instagram", href: "https://instagram.com" },
]

export function Header() {
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        setMenuOpen(false)
    }, [pathname])

    return (
        <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-10 pt-4">
            <div className="mx-auto max-w-6xl">
                <div className="flex items-center justify-between border border-black/10 bg-white/85 px-5 py-4 text-black backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
                    <button
                        type="button"
                        aria-label="Open navigation"
                        aria-expanded={menuOpen}
                        aria-controls="mobile-navigation"
                        className="flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-black/70 hover:text-black"
                        onClick={() => setMenuOpen(true)}
                    >
                        Index
                        <span className="flex flex-col gap-1">
                            <span className="w-5 h-0.5 bg-black" />
                            <span className="w-5 h-0.5 bg-black" />
                        </span>
                    </button>

                    <Link href="/" className="text-[12px] uppercase tracking-[0.7em] font-semibold">
                        Claudia Rosel
                    </Link>

                    <div className="hidden md:flex items-center gap-6 text-[10px] uppercase tracking-[0.3em] text-black/60">
                        <span>Mexico City / Madrid</span>
                        <span>Photojournalism + Film</span>
                    </div>
                </div>
            </div>

            {menuOpen && (
                <div className="fixed inset-0 z-50 bg-white text-black">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.08),_transparent_60%)]" />
                    <div className="relative h-full px-6 pt-8 pb-12 flex flex-col md:px-12">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="text-[12px] uppercase tracking-[0.7em] font-semibold">
                                Claudia Rosel
                            </Link>
                            <button
                                type="button"
                                aria-label="Close navigation"
                                className="text-[11px] uppercase tracking-[0.3em] text-black/60 hover:text-black"
                                onClick={() => setMenuOpen(false)}
                            >
                                Close
                            </button>
                        </div>

                        <nav id="mobile-navigation" className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
                            <div className="space-y-6">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "text-2xl uppercase tracking-[0.35em] transition-colors hover:text-black/60",
                                            pathname === item.href ? "text-black" : "text-black/60"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="space-y-10">
                                <details className="group">
                                    <summary className="cursor-pointer list-none text-xs uppercase tracking-[0.4em] text-black/40 group-open:text-black">
                                        Projects
                                    </summary>
                                    <div className="mt-4 grid gap-3 text-sm uppercase tracking-[0.35em] text-black/60">
                                        {projectsItems.map((item) => (
                                            <Link key={item.href} href={item.href} className="hover:text-black">
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </details>
                                <details className="group">
                                    <summary className="cursor-pointer list-none text-xs uppercase tracking-[0.4em] text-black/40 group-open:text-black">
                                        Stories
                                    </summary>
                                    <div className="mt-4 grid gap-3 text-sm uppercase tracking-[0.35em] text-black/60">
                                        {storiesItems.map((item) => (
                                            <Link key={item.href} href={item.href} className="hover:text-black">
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </details>
                            </div>
                        </nav>

                        <div className="mt-auto grid gap-4 text-[11px] uppercase tracking-[0.3em] text-black/60">
                            <div className="text-black/40">Connect</div>
                            {socialItems.map((item) => (
                                <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="hover:text-black">
                                    {item.name}
                                </a>
                            ))}
                            <a className="hover:text-black" href="mailto:claudiaroselphoto@gmail.com">
                                claudiaroselphoto [at] gmail dot com
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
