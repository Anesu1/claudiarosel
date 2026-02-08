import Image from "next/image"

export default function TheNightSheLeftPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
            {/* Hero / Title */}
            <div className="h-[60vh] flex items-center justify-center">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-widest text-center px-4">
                    The Night<br />She Left
                </h1>
            </div>

            {/* Content Flow */}
            <div className="max-w-4xl mx-auto px-4 md:px-8 pb-32 space-y-24">

                {/* Intro */}
                <div className="text-center max-w-xl mx-auto space-y-8 text-lg md:text-xl font-serif italic leading-relaxed">
                    <p>
                        She was gone on a Friday night, just after the spring solstice. The light was on, I heard the screams. I slept.
                    </p>
                    <p>
                        Life was different after that.
                    </p>
                </div>

                {/* Image 1 - Wide */}
                <div className="relative aspect-[16/9] w-full bg-gray-100">
                    <Image
                        src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=2670&auto=format&fit=crop"
                        alt="Dark moody room"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Text Block 2 */}
                <div className="text-center max-w-xl mx-auto space-y-8 text-lg md:text-xl font-serif italic leading-relaxed">
                    <p>
                        We left the house, my cousins, my friends, and the garden where my grandparents raised four kids, bringing together two cultures across the valley of vino tinto and pintxos, of pollo en adobo and pancit.
                    </p>
                </div>

                {/* Image 2 - Portrait */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative aspect-[3/4] bg-gray-100">
                        <Image
                            src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=1000&auto=format&fit=crop"
                            alt="Shadows"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex items-center justify-center p-8">
                        <p className="font-serif italic text-lg leading-relaxed text-center">
                            We left so we could rebuild whatever life was left after I met death for the first time, when it took my little sister late at night.
                        </p>
                    </div>
                </div>

                {/* Text Block 3 */}
                <div className="text-center max-w-xl mx-auto space-y-8 text-lg md:text-xl font-serif italic leading-relaxed">
                    <p>
                        Things got blurred for a while. We moved to a small apartment, then to a larger one, until we settled on the thirteenth floor, high above the heart of the city, where my abuelo once sold Levi's jeans, and my uncle after him, to this day.
                    </p>
                </div>

                {/* Full Width Parallax-ish Image */}
                <div className="relative aspect-[21/9] w-[100vw] ml-[50%] -translate-x-1/2 bg-gray-900">
                    <Image
                        src="https://images.unsplash.com/photo-1495571674409-58d0cb095b5c?q=80&w=2672&auto=format&fit=crop"
                        alt="City lights at night"
                        fill
                        className="object-cover opacity-80"
                    />
                </div>

                {/* Ending */}
                <div className="text-center max-w-xl mx-auto space-y-8 text-lg md:text-xl font-serif italic leading-relaxed">
                    <p>
                        One night, sleeping pills disappeared from the bedside table. In their place, travel guides, books, and movies filled the shelves.
                    </p>
                    <p>
                        I made new friends, I lost others. Some memories from those years were lost forever, and the more moments we create, the more I try to remember them.
                    </p>
                    <div className="pt-12 text-sm not-italic font-sans uppercase tracking-widest text-gray-500">
                        For Paula
                    </div>
                </div>

            </div>
        </div>
    )
}

