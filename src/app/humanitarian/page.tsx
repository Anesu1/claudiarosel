import { ProjectGallery } from "@/components/layout/project-gallery"

export default function HumanitarianPage() {
    const images = [
        { src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop", alt: "Humanitarian 1" },
        { src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1000&auto=format&fit=crop", alt: "Humanitarian 2" },
        { src: "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5b43?q=80&w=1000&auto=format&fit=crop", alt: "Humanitarian 3" },
        { src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1000&auto=format&fit=crop", alt: "Humanitarian 4" },
        { src: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1000&auto=format&fit=crop", alt: "Humanitarian 5" },
    ]

    return (
        <ProjectGallery
            title="Humanitarian"
            description="Stories from the field, covering crises, resilience, and the human spirit across the globe."
            images={images}
        />
    )
}
