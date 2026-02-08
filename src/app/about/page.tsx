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
                        <span>claudiaroselphoto [at] gmail dot com</span>
                    </div>
                </div>

                {/* Text Column */}
                <div className="space-y-8 text-sm md:text-base leading-relaxed text-gray-800 dark:text-gray-200">
                    <div className="space-y-6">
                        <p>
                            Claudia Rosel is a visual storyteller focused on displacement and environmental issues. Her photography has been published by the Associated Press, The Washington Post, The Guardian, El País, Le Monde, the Pulitzer Centre, UN News, and PBS NewsHour.
                        </p>
                        <p>
                            She previously worked full time in the humanitarian sector, covering crises such as droughts, human trafficking, and natural-resource conflicts in East Africa.
                        </p>
                        <p>
                            Her work spans documentary and fiction film. Her short documentary <strong>REVIVAL</strong> is slated to premiere at U.S. festivals.
                        </p>
                        <p>
                            Claudia brings a global lens to her work, rooted in deep respect for local cultures. She is a certified PADI Advanced/Rescue Diver and has completed SSAFE training.
                        </p>
                    </div>

                    <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-black dark:text-white">Fellowships & Grants</h3>
                        <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                            <li className="grid grid-cols-[40px_1fr] gap-4">
                                <span>
                                    <strong className="text-gray-900 dark:text-gray-200">Pulitzer Centre Crisis Reporting Grants</strong> (two awards)
                                </span>
                            </li>
                            <li className="grid grid-cols-[40px_1fr] gap-4">
                                <span>
                                    <strong className="text-gray-900 dark:text-gray-200">Overseas Press Club Scholar Fellowship</strong>
                                </span>
                            </li>
                            <li className="grid grid-cols-[40px_1fr] gap-4">
                                <span>
                                    <strong className="text-gray-900 dark:text-gray-200">REVIVAL</strong> — short documentary, U.S. festival premiere forthcoming
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


