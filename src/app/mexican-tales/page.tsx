import { ProjectGallery } from "@/components/layout/project-gallery"

export default function MexicanTalesPage() {
    const images = [
        { src: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=1000&auto=format&fit=crop", alt: "Mexico 1" },
        { src: "https://images.unsplash.com/photo-1565610034631-077553f1917f?q=80&w=1000&auto=format&fit=crop", alt: "Mexico 2" },
        { src: "https://images.unsplash.com/photo-1585464231875-d9cae9df3d45?q=80&w=1000&auto=format&fit=crop", alt: "Mexico 3" },
        { src: "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?q=80&w=1000&auto=format&fit=crop", alt: "Mexico 4" },
    ]

    return (
        <ProjectGallery
            title="Mexican Tales"
            description="“Dejemos al menos flores. Dejemos al menos cantos.” A gallery dedicated to Mexican traditions."
            images={images}
        />
    )
}
