import { flavors } from "@/data/site"
import RotatingFlavorSlider from "@/components/ui/rotating-flavor-slider"

export default function Flavors() {
  return (
    <section id="rasa" aria-label="Pilihan rasa Raqina Ice">
      <RotatingFlavorSlider slides={flavors} />
    </section>
  )
}
