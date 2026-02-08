import Link from "next/link"

export default function NewsPage() {
    const newsItems = [
        {
            title: "Mexico Protests",
            slug: "mexico-protests",
            description: "Photo coverage of demonstrations and civic response.",
        },
        {
            title: "Mexico Catrina Festival",
            slug: "mexico-catrina-festival",
            description: "Festival portraits and public celebrations of Día de Muertos.",
        },
    ]

    return (
        <div className="container mx-auto px-4 md:px-8 py-24 md:py-32 max-w-4xl space-y-12">
            <div className="text-center space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-widest">News</h1>
                <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                    Published photojournalism assignments, with work appearing in outlets including the Associated Press,
                    The Washington Post, The Guardian, El País, Le Monde, the Pulitzer Centre, UN News, and PBS NewsHour.
                </p>
            </div>

            <div className="space-y-8">
                {newsItems.map((item) => (
                    <Link
                        key={item.slug}
                        href={`/news/${item.slug}`}
                        className="block border-b border-gray-100 dark:border-gray-800 pb-6 hover:opacity-70 transition-opacity"
                    >
                        <h3 className="text-xl md:text-2xl font-serif">{item.title}</h3>
                        <p className="text-sm text-gray-500 mt-2 uppercase tracking-wider">{item.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}
