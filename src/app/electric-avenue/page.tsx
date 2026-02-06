import { ProjectGallery } from "@/components/layout/project-gallery"

export default function ElectricAvenuePage() {
    const images = [
        { src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop", alt: "Electric 1" },
        { src: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=1000&auto=format&fit=crop", alt: "Electric 2" },
        { src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1000&auto=format&fit=crop", alt: "Electric 3" },
    ]

    return (
        <ProjectGallery
            title="Electric Avenue"
            description="Urban rhythms and neon nights."
            images={images}
        />
    )
}
