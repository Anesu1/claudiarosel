"use client"

import { MasonryGrid } from "@/components/ui/masonry-grid"
import Image from "next/image"

interface ProjectGalleryProps {
    title: string
    description?: string
    images: { src: string, alt: string, aspect?: string }[] // aspect class like 'aspect-[3/4]'
}

export function ProjectGallery({ title, description, images }: ProjectGalleryProps) {
    const items = images.map((img, idx) => (
        <div key={idx} className="relative w-full overflow-hidden bg-gray-100 group">
            {/* Use aspect ratio div if needed, or let standard image height control it. 
           Masonry usually works best with variable heights. 
           We'll use a wrapper with the aspect class if provided, else natural. */}
            <div className={img.aspect || "relative"}>
                <Image
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={1000}
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
        </div>
    ))

    return (
        <div className="min-h-screen pt-12 pb-24 px-2 md:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-widest">{title}</h1>
                {description && <p className="text-lg text-gray-500 font-serif italic max-w-2xl mx-auto">{description}</p>}
            </div>

            <MasonryGrid items={items} />
        </div>
    )
}
