"use client"

import { cn } from "@/lib/utils"
// import Image from "next/image" // We might want to use standard img for better lenis compat or standard Next Image with careful sizing
import { motion } from "framer-motion"

interface MasonryGridProps {
    items: React.ReactNode[]
    className?: string
}

export function MasonryGrid({ items, className }: MasonryGridProps) {
    return (
        <div className={cn("columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 p-4", className)}>
            {items.map((item, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.05 }}
                    className="break-inside-avoid mb-4 "
                >
                    {item}
                </motion.div>
            ))}
        </div>
    )
}
