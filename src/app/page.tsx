import { MasonryGrid } from "@/components/ui/masonry-grid"
import Image from "next/image"
import Link from "next/link"

const projects = [
  { id: 1, title: "News", src: "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1200&auto=format&fit=crop", href: "/news" },
  { id: 2, title: "Humanitarian", src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop", href: "/humanitarian" },
  { id: 3, title: "Field Notes", src: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1200&auto=format&fit=crop", href: "/field-notes" },
  { id: 4, title: "The Night She Left", src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop", href: "/the-night-she-left" },
  { id: 5, title: "Mexican Tales", src: "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?q=80&w=1200&auto=format&fit=crop", href: "/mexican-tales" },
  { id: 6, title: "Electric Avenue", src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop", href: "/electric-avenue" },
  { id: 7, title: "Travel Journal", src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop", href: "/journal" },
  { id: 8, title: "About", src: "https://images.unsplash.com/photo-1554048612-387768052bf7?q=80&w=1200&auto=format&fit=crop", href: "/about" },
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
      <div className="max-w-3xl mx-auto text-center py-10 md:py-16 space-y-4">
        <p className="uppercase tracking-[0.3em] text-xs text-gray-500">Photojournalism + Film</p>
        <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-widest">Claudia Rosel</h1>
        <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
          Portfolio and field journal spanning humanitarian reporting, cultural stories, and personal essays
          from Mexico, Spain, and beyond.
        </p>
      </div>
      <MasonryGrid items={items} />
    </div>
  )
}
