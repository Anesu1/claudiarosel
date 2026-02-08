import Image from "next/image"

export default function HumanitarianPage() {
    const projects = [
        {
            title: "Drought in Somalia",
            description: "Documenting the impact of prolonged drought and the relief efforts that follow.",
            image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
        },
        {
            title: "Migration to Yemen",
            description: "A look at migration routes and the communities that receive new arrivals.",
            image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1200&auto=format&fit=crop",
        },
        {
            title: "Afghan Resettlement, Qatar",
            description: "Temporary lives built in transit, waiting for the next place to call home.",
            image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop",
        },
        {
            title: "Shelter Solutions",
            description: "Architectures of care and the people rebuilding after displacement.",
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5b43?q=80&w=1200&auto=format&fit=crop",
        },
    ]

    return (
        <div className="min-h-screen pt-12 pb-24 px-4 md:px-10">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-widest">Humanitarian</h1>
                <p className="text-lg text-gray-500 font-serif italic">
                    Documentary projects centered on humanitarian crises, resilience, and care.
                </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((project) => (
                    <div key={project.title} className="space-y-4">
                        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-xl uppercase tracking-widest font-semibold">{project.title}</h2>
                            <p className="text-sm text-gray-600">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
