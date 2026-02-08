import { ProjectGallery } from "@/components/layout/project-gallery"

export default function MexicoProtestsPage() {
    const images = [
        { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop", alt: "Mexico protests 1" },
        { src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1200&auto=format&fit=crop", alt: "Mexico protests 2" },
        { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop", alt: "Mexico protests 3" },
    ]

    return (
        <div className="pb-24">
            <ProjectGallery
                title="Mexico Protests"
                description="Gallery of street demonstrations and public response."
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
