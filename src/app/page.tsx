import { MasonryGrid } from "@/components/ui/masonry-grid"
import Image from "next/image"
import Link from "next/link"

// Placeholder data - ideally this would come from a CMS
const projects = [
  { id: 1, title: "The night she left", src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop", href: "/the-night-she-left" },
  { id: 2, title: "Mexican Tales", src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop", href: "/mexican-tales" },
  { id: 3, title: "Electric Avenue", src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop", href: "/electric-avenue" },
  { id: 4, title: "Humanitarian", src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop", href: "/humanitarian" },
  { id: 5, title: "Field Notes", src: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1000&auto=format&fit=crop", href: "/field-notes" },
  { id: 6, title: "Portraiture", src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop", href: "/portraiture" },
  { id: 7, title: "Travel Journal", src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop", href: "/journal" },
  { id: 8, title: "Editorial", src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop", href: "/editorial" },
  { id: 9, title: "Street", src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1000&auto=format&fit=crop", href: "/street" },
]

export default function Home() {
  const items = projects.map((project) => (
    <Link href={project.href} key={project.id} className="block group relative overflow-hidden cursor-pointer">
      <div className="relative aspect-video w-full"> {/* Adjust aspect ratio as needed or let it be natural */}
        <Image
          src={project.src}
          alt={project.title}
          width={800}
          height={1000}
          className="object-cover w-full h-auto transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
        <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
          <h2 className="text-white text-lg font-bold uppercase tracking-widest">{project.title}</h2>
        </div>
      </div>
    </Link>
  ))

  return (
    <div className="min-h-screen p-2 md:p-8">
      <MasonryGrid items={items} />
    </div>
  )
}
