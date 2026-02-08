import { ProjectGallery } from "@/components/layout/project-gallery"

export default function MexicoCatrinaFestivalPage() {
    const images = [
        { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop", alt: "Catrina festival 1" },
        { src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop", alt: "Catrina festival 2" },
        { src: "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?q=80&w=1200&auto=format&fit=crop", alt: "Catrina festival 3" },
    ]

    return (
        <div className="pb-24">
            <ProjectGallery
                title="Mexico Catrina Festival"
                description="Festival portraits and public celebrations of Día de Muertos."
                images={images}
            />
            <div className="text-center text-xs uppercase tracking-widest text-gray-500 -mt-8">
                <a className="hover:text-gray-800 transition-colors" href="https://apnews.com" target="_blank" rel="noreferrer">
                    Associated Press text story
                </a>
            </div>
        </div>
    )
}
