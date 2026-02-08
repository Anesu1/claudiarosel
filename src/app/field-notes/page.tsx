import Image from "next/image"

export default function FieldNotesPage() {
    const notes = [
        {
            title: "Oaxacan Craftsmanship",
            description: "Hands, materials, and workshops where tradition is kept alive.",
            image: "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?q=80&w=1200&auto=format&fit=crop",
        },
        {
            title: "Queens Street Vendors",
            description: "Portraits of small businesses and the streets that sustain them.",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
        },
        {
            title: "ICE on Campus",
            description: "A visual report on student response and community organizing.",
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop",
        },
        {
            title: "Home After Libya",
            description: "Returns, repairs, and the memory of conflict inside domestic space.",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
        },
        {
            title: "Video",
            description: "Short film excerpts and behind-the-scenes field recordings.",
            image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop",
        },
    ]

    return (
        <div className="min-h-screen pt-12 pb-24 px-4 md:px-10">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-widest">Field Notes</h1>
                <p className="text-lg text-gray-500 font-serif italic">
                    A collection of topical galleries, short films, and ongoing observations.
                </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                {notes.map((note) => (
                    <div key={note.title} className="space-y-4">
                        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                            <Image
                                src={note.image}
                                alt={note.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-xl uppercase tracking-widest font-semibold">{note.title}</h2>
                            <p className="text-sm text-gray-600">{note.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
