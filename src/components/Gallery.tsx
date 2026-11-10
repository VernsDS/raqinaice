import { galleryPhotos } from "@/data/site"
import { Marquee } from "@/components/ui/marquee"
import { Reveal, SectionHeading } from "@/components/ui/section"

export default function Gallery() {
  return (
    <section id="galeri" className="relative border-y border-ink/10 bg-card/45 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading
            index="04"
            label="Galeri"
            title={
              <>
                Setiap potong, <em className="italic text-mint">sebuah cerita.</em>
              </>
            }
            description="Beberapa sudut dari ice cream yang kami sajikan setiap sore."
          />
        </Reveal>
      </div>

      <div className="mt-12 space-y-4">
        <Marquee duration={44}>
          {galleryPhotos.map((photo) => (
            <figure
              key={`a-${photo.src}`}
              className="group relative mx-2 h-52 w-64 shrink-0 overflow-hidden rounded-[1.75rem] border-4 border-card shadow-soft sm:h-64 sm:w-80"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </figure>
          ))}
        </Marquee>

        <Marquee duration={50} reverse>
          {[...galleryPhotos].reverse().map((photo) => (
            <figure
              key={`b-${photo.src}`}
              className="mx-2 h-36 w-52 shrink-0 overflow-hidden rounded-2xl border-4 border-card shadow-[0_16px_35px_-28px_rgba(43,26,46,0.6)] sm:h-40 sm:w-60"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </figure>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
