export default function NewsPage() {
    const newsItems = [
        {
            year: "2025",
            title: "REVIVAL DOCFest premier",
            location: "NYC",
            link: "https://www.cjsdoc.com/revival"
        },
        {
            year: "2025",
            title: "Pulitzer Centre Crisis Reporting Grant",
            location: "Columbia University",
            link: "https://journalism.columbia.edu/news/2025-pulitzer-center-fellows"
        },
        {
            year: "2025",
            title: "Overseas Press Club Foundation Scholar Fellow",
            location: "",
            link: "https://www.overseaspressclubfoundation.org/2025-opcf-winners"
        },
        {
            year: "2024",
            title: "La Caixa Post-Graduate Fellow",
            location: "",
            link: "https://becarios.fundacionlacaixa.org/en/claudia-barrios-rosel-B006038"
        }
    ]

    return (
        <div className="container mx-auto px-4 md:px-8 py-24 md:py-32 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-widest mb-16 text-center">News</h1>

            <div className="space-y-12">
                {newsItems.map((item, idx) => (
                    <div key={idx} className="group border-b border-gray-100 dark:border-gray-800 pb-8 hover:opacity-70 transition-opacity">
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                            <div className="flex flex-col md:flex-row md:items-baseline md:gap-8">
                                <span className="text-sm font-mono text-gray-400 w-16">{item.year}</span>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-serif">{item.title}</h3>
                                    {item.location && <p className="text-sm text-gray-500 mt-2 uppercase tracking-wider">{item.location}</p>}
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
