import Image from "next/image"

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-24 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Image Column */}
                <div className="md:sticky md:top-32 space-y-4">
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                        <Image
                            src="https://images.unsplash.com/photo-1554048612-387768052bf7?q=80&w=1000&auto=format&fit=crop" // Placeholder for portrait
                            alt="Claudia Rosel"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest flex justify-between">
                        <span>Mexico City / Madrid</span>
                        <span>claudiaroselphoto [at] gmail (dot) com</span>
                    </div>
                </div>

                {/* Text Column */}
                <div className="space-y-8 text-sm md:text-base leading-relaxed text-gray-800 dark:text-gray-200">
                    <div className="space-y-6">
                        <p>
                            Claudia Rosel is a visual storyteller whose work focuses on displacement and environmental issues. Her photography has been published by the Associated Press, The Guardian, The Washington Post, and El País, among others. She is a recipient of two Pulitzer Center Crisis Reporting Grants and the Overseas Press Club Scholar Fellowship, and holds an MS Documentary from Columbia Journalism School.
                        </p>
                        <p>
                            She previously worked full time in the humanitarian sector, spending five years based between Kenya and Somalia covering major crises across the region, including droughts, human trafficking and natural-resource conflicts.
                        </p>
                        <p>
                            Her work also spans documentary and fiction film, where she has directed, produced, and edited independent projects. Her short documentary <strong>REVIVAL (2026)</strong> is set to premiere at U.S. festivals this year.
                        </p>
                        <p>
                            Claudia brings a global lens to her work, rooted in a deep respect for local cultures. She is a certified PADI Advanced/Rescue Diver and has received SSAFE training.
                        </p>
                    </div>

                    <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-black dark:text-white">Fellowships, Grants & Exhibitions</h3>
                        <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                            <li className="grid grid-cols-[40px_1fr] gap-4">
                                <span className="text-gray-400 font-mono text-xs pt-1">2025</span>
                                <span>
                                    <strong className="text-gray-900 dark:text-gray-200">REVIVAL DOCFest premier</strong> NYC
                                </span>
                            </li>
                            <li className="grid grid-cols-[40px_1fr] gap-4">
                                <span className="text-gray-400 font-mono text-xs pt-1">2025</span>
                                <span>
                                    <strong className="text-gray-900 dark:text-gray-200">Pulitzer Centre Crisis Reporting Grant</strong> (Columbia University)
                                </span>
                            </li>
                            <li className="grid grid-cols-[40px_1fr] gap-4">
                                <span className="text-gray-400 font-mono text-xs pt-1">2025</span>
                                <span>
                                    <strong className="text-gray-900 dark:text-gray-200">Pulitzer Centre Crisis Reporting Fellow</strong> (Campus Consortium)
                                </span>
                            </li>
                            <li className="grid grid-cols-[40px_1fr] gap-4">
                                <span className="text-gray-400 font-mono text-xs pt-1">2025</span>
                                <span>
                                    <strong className="text-gray-900 dark:text-gray-200">Overseas Press Club Foundation Scholar Fellow</strong>
                                </span>
                            </li>
                            <li className="grid grid-cols-[40px_1fr] gap-4">
                                <span className="text-gray-400 font-mono text-xs pt-1">2025</span>
                                <span>
                                    Exhibition <strong className="text-gray-900 dark:text-gray-200">Invisible Walls</strong>, Pulitzer Hall, Columbia University
                                </span>
                            </li>
                            <li className="grid grid-cols-[40px_1fr] gap-4">
                                <span className="text-gray-400 font-mono text-xs pt-1">2025</span>
                                <span>
                                    <strong className="text-gray-900 dark:text-gray-200">Flow Trip Photo Contest</strong> - Honorable Mention
                                </span>
                            </li>
                            <li className="grid grid-cols-[40px_1fr] gap-4">
                                <span className="text-gray-400 font-mono text-xs pt-1">2024</span>
                                <span>
                                    <strong className="text-gray-900 dark:text-gray-200">La Caixa Post-Graduate Fellow</strong>
                                </span>
                            </li>
                            <li className="grid grid-cols-[40px_1fr] gap-4">
                                <span className="text-gray-400 font-mono text-xs pt-1">2023</span>
                                <span>
                                    <strong className="text-gray-900 dark:text-gray-200">Eddie Adams Workshop</strong> - Tie Dye
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
