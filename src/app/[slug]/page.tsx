import Link from "next/link"

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-widest mb-4">
                {slug.replace(/-/g, " ")}
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl text-center mb-8">
                This is a placeholder page for the "{slug}" section. Content would be dynamically loaded here based on the project or category.
            </p>
            <Link href="/" className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors uppercase text-sm tracking-wide">
                Back to Home
            </Link>
        </div>
    )
}
