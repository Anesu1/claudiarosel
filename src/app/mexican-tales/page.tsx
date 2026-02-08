import { ProjectGallery } from "@/components/layout/project-gallery"

export default function MexicanTalesPage() {
    const images = [
        { src: "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?q=80&w=1200&auto=format&fit=crop", alt: "Mexico 1" },
        { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop", alt: "Mexico 2" },
        { src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop", alt: "Mexico 3" },
        { src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop", alt: "Mexico 4" },
    ]

    return (
        <ProjectGallery
            title="Mexican Tales"
            description="“Dejemos al menos flores. Dejemos al menos cantos.” A gallery dedicated to Mexican traditions."
            images={images}
        />
    )
}
