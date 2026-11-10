import type { FlavorSlide } from "@/components/ui/rotating-flavor-slider"

type MenuItem = {
  name: string
  price: string
  tag?: string
}

type MenuGroup = {
  title: string
  subtitle: string
  items: MenuItem[]
}

export const menuGroups: MenuGroup[] = [
  {
    title: "Varian Rasa",
    subtitle: "Empat rasa yang paling sering dicari.",
    items: [
      { name: "Chocolate", price: "Rp8.000", tag: "Paling dicari" },
      { name: "Strawberry", price: "Rp8.000", tag: "Favorit" },
      { name: "Vanilla", price: "Rp7.000" },
      { name: "Mixed", price: "Rp9.000", tag: "Spesial" },
    ],
  },
  {
    title: "Ukuran & Paket",
    subtitle: "Mau sekali gigit atau puas sampai habis.",
    items: [
      { name: "Porsi Mini", price: "Rp2.000" },
      { name: "Porsi Reguler", price: "Rp7.000" },
      { name: "Porsi Jumbo", price: "Rp10.000" },
      { name: "Paket Hemat 2 porsi", price: "Rp12.000" },
    ],
  },
]

export const flavors: FlavorSlide[] = [
  {
    name: "cokelat",
    title: "Chocolate",
    description:
      "Cokelat pekat dan lembut. Manisnya pas, tidak berlebihan, dan tetap enak sampai suapan terakhir.",
    price: "Rp8.000 per porsi",
    image: "/images/rasa-cokelat.jpg",
    alt: "Ice cream rasa chocolate",
    color: "#F0DDC8",
  },
  {
    name: "stroberi",
    title: "Strawberry",
    description:
      "Stroberi segar yang manis dan sedikit asam, memberi rasa ringan di setiap suapan.",
    price: "Rp8.000 per porsi",
    image: "/images/rasa-stroberi.jpg",
    alt: "Ice cream rasa strawberry",
    color: "#F6D9E2",
  },
  {
    name: "vanila",
    title: "Vanilla",
    description:
      "Vanila klasik dengan aroma menenangkan. Pilihan aman untuk semua umur, dari anak sampai orang tua.",
    price: "Rp7.000 per porsi",
    image: "/images/rasa-vanila.jpg",
    alt: "Ice cream rasa vanilla",
    color: "#F5E8C6",
  },
  {
    name: "mixed",
    title: "Mixed",
    description:
      "Cokelat dan stroberi dalam satu gigitan. Untuk yang tidak bisa memilih satu rasa saja.",
    price: "Rp9.000 per porsi",
    image: "/images/rasa-mixed.jpg",
    alt: "Ice cream rasa mixed",
    color: "#DCEFE6",
  },
]

export const galleryPhotos = [
  { src: "/images/galeri-1.jpg", alt: "Ice cream Raqina di atas papan kayu" },
  { src: "/images/galeri-2.jpg", alt: "Ice cream pink dengan kelopak bunga di atas piring" },
  { src: "/images/galeri-3.jpg", alt: "Aneka ice cream stik cokelat dan vanila di atas marmer" },
  { src: "/images/galeri-4.jpg", alt: "Tangan memegang ice cream cone warna warni" },
  { src: "/images/galeri-5.jpg", alt: "Gelato dengan wafer vanila di latar pink" },
  { src: "/images/galeri-6.jpg", alt: "Ice cream stik cokelat dan vanila" },
]

export const steps = [
  {
    title: "Mampir atau pesan dulu",
    body: "Kami buka setiap hari pukul 16:15 sampai 20:30 di Jl. Lembah Sari RT 004 RW 009 No 12.",
  },
  {
    title: "Pilih rasa dan ukuran",
    body: "Chocolate, Strawberry, Vanilla, atau Mixed. Tersedia porsi mini sampai paket hemat.",
  },
  {
    title: "Bayar dan langsung nikmati",
    body: "Ambil di gerobak depan Warung Cindy. Bisa dibungkus kalau mau dibawa pulang.",
  },
]

export const pillars = [
  {
    title: "Bahan pilihan",
    body: "Cokelat, stroberi, dan vanila dipilih untuk rasa yang konsisten di setiap porsi.",
  },
  {
    title: "Dibuat harian",
    body: "Ice cream disiapkan hari itu juga, jadi teksturnya tetap lembut saat kamu makan.",
  },
  {
    title: "Tekstur lembut",
    body: "Diputar perlahan supaya lembut di mulut dan tidak cepat meleleh di cuaca panas.",
  },
  {
    title: "Harga ramah",
    body: "Mulai Rp2.000. Camilan manis yang bisa dinikmati kapan saja tanpa mikir panjang.",
  },
]

export const contact = {
  brand: "Raqina Ice",
  address: "Jl. Lembah Sari RT 004 RW 009 No 12",
  city: "DKI Jakarta",
  addressNote: "Depan Warung Cindy",
  hours: "16:15 - 20:30",
  orderName: "Fiqa",
  maps: "https://www.google.com/maps/search/?api=1&query=Jl.%20Lembah%20Sari%20RT%20004%20RW%20009%20No%2012%20Jakarta",
  // Nomor utama: Fiqa. Nomor Rafa menyusul.
  whatsapp:
    "https://wa.me/6281294825767?text=Halo%20kak%20Fiqa%2C%20saya%20ingin%20memesan%20ice%20cream%20Raqina.",
}
