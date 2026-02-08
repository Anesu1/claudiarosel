import { ProjectGallery } from "@/components/layout/project-gallery"

export default function JournalPage() {
    const images = [
        { src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop", alt: "Journal 1" },
        { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop", alt: "Journal 2" },
        { src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop", alt: "Journal 3" },
        { src: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1000&auto=format&fit=crop", alt: "Journal 4" },
    ]

    return (
        <ProjectGallery
            title="Travel Journal"
            description="An extensive grid of travel photographs. Click into each image to linger."
            images={images}
        />
    )
}
