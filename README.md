# Raqina Ice (raqinaice_project2)

Website satu halaman untuk **Raqina Ice**, penjual ice cream di Jl. Lembah Sari
RT 004 RW 009 No 12, DKI Jakarta. Buka setiap hari 16:15 sampai 20:30.

Project ini dibangun ulang dari referensi `raqinaice.md` (animasi, tipografi, navbar).
Situs `raqinaice.vercel.app` hanya dipakai sebagai referensi produk dan foto, bukan
patokan desain.

## Menjalankan

```bash
npm install
npm run dev     # http://localhost:5183
npm run build   # typecheck + build produksi
npm run preview
```

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS (token warna dan font di `tailwind.config.js`)
- framer-motion untuk animasi
- lucide-react untuk ikon
- Struktur komponen ala shadcn (`components.json`, `src/components/ui`, `src/lib/utils.ts`)

## Struktur

```
public/images/                    foto produk dan galeri
src/
  components/
    Navbar, Hero, Ticker, MenuSection, Flavors, About,
    Gallery, Steps, LocationSection, FinalCta, Footer
    ui/expand-map.tsx             peta 3D yang bisa diperluas
    ui/rotating-flavor-slider.tsx slider rasa scroll-driven (ring berputar)
    ui/marquee.tsx, ui/section.tsx
  data/site.ts                    menu, rasa, galeri, langkah pesan, kontak
  index.css                       token, grain, utility
```

## Konten

- Nomor WhatsApp utama: 6281294825767 (Fiqa), dengan pesan pembuka yang sudah terisi.
  Nomor Rafa belum ditambahkan karena angkanya belum ada.
- Alamat: Jl. Lembah Sari RT 004 RW 009 No 12, DKI Jakarta, depan Warung Cindy.
- Jam buka: 16:15 sampai 20:30.
- Harga: Rp2.000 (porsi mini) sampai Rp12.000 (paket hemat 2 porsi).
- Foto: diambil dari situs Raqina sebelumnya, disimpan lokal di `public/images` supaya
  tidak bergantung jaringan.

## Kalau mau mengganti

1. **Foto produk**: ganti file di `public/images` dengan nama yang sama, atau ubah path di
   `src/data/site.ts` dan `src/components/Hero.tsx`.
2. **Harga atau menu**: `menuGroups` dan `flavors` di `src/data/site.ts`.
3. **Alamat, jam, WhatsApp**: objek `contact` di `src/data/site.ts`.
4. **Peta**: `LocationMap` adalah peta ilustrasi. Tombol Google Maps memakai
   `contact.maps`, ganti dengan link lokasi resmi kalau sudah ada pin tepat.

## Catatan animasi

- Hero: reveal per baris dan parallax halus mengikuti kursor.
- Ticker dan galeri: marquee tanpa jeda.
- Rasa: satu stage sticky, gulir menggeser foto dan penanda pada ring. Foto produk
  dipotong bulat dengan `object-cover` supaya selalu pas.
- Lokasi: kartu peta miring 3D dengan latar biru es, klik untuk memperluas.
- Kalau pengunjung masuk dengan `prefers-reduced-motion` aktif, halaman memuat ulang
  sekali lalu animasi tetap dijalankan. Ini disengaja: `MotionConfig` memakai
  `reducedMotion="never"` dan tidak ada lagi blok CSS yang mematikan animasi.
