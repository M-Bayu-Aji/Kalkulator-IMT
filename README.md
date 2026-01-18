# 🏋️‍♂️ Kalkulator IMT - Aplikasi Kesehatan

![IMT Calculator](https://img.shields.io/badge/Health-App-blue?style=for-the-badge&logo=heart&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## 🌟 Tentang Proyek

Selamat datang di **Kalkulator IMT**! 🎉 Ini adalah aplikasi web kesehatan yang elegan dan user-friendly untuk menghitung Indeks Massa Tubuh (IMT) Anda. Dengan desain modern menggunakan glassmorphism dan animasi yang halus, aplikasi ini tidak hanya fungsional tetapi juga menyenangkan untuk digunakan.

### ✨ Fitur Utama

- 🎨 **Desain Modern**: Interface dengan efek glassmorphism dan gradient yang menawan
- 🖼️ **Visual Menarik**: Gambar kesehatan berkualitas tinggi dengan efek floating dan animasi
- 📱 **Responsive**: Kompatibel dengan semua perangkat (desktop, tablet, mobile)
- ⚡ **Real-time Validation**: Validasi input otomatis untuk memastikan data akurat
- 🎯 **Hasil Instan**: Hitung IMT dengan cepat dan dapatkan kategori kesehatan Anda
- 🌈 **Animasi Halus**: Transisi dan animasi yang membuat pengalaman lebih menarik
- 🔒 **Input Aman**: Hanya menerima input numerik dengan validasi canggih
- 💫 **Elemen Dekoratif**: Ikon floating yang memberikan nuansa dinamis
- 🎭 **Split Layout**: Kombinasi kalkulator dan gambar inspiratif dalam satu tampilan

## 🚀 Teknologi yang Digunakan

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: CSS3 dengan efek glassmorphism
- **Fonts**: Google Fonts (Poppins)
- **Icons**: Font Awesome 6.5.1
- **Runtime**: Node.js

## 🎨 Preview & Fitur Visual

### Desktop View
Tampilan desktop dengan layout split: kalkulator di kiri, gambar inspiratif di kanan

### Mobile View  
Layout responsif yang menyesuaikan menjadi satu kolom dengan gambar di atas

### ✨ Fitur Visual Terbaru
- **Split Layout Design**: Kalkulator di sebelah kiri, gambar inspiratif di sebelah kanan
- **Floating Animations**: Gambar dengan efek mengambang 3D yang halus
- **Decorative Icons**: Ikon kesehatan yang beranimasi di background (💓 🏋️ 🍎 🏃)
- **Health-themed Images**: Gambar berkualitas tinggi dari Unsplash dengan overlay teks
- **Glass Effect**: Background blur dan transparansi untuk kesan modern
- **Responsive Layout**: Otomatis menyesuaikan dari grid 2 kolom ke 1 kolom di mobile

## 📋 Persyaratan Sistem

- Node.js 18.17 atau lebih baru
- npm atau yarn atau pnpm
- Browser modern (Chrome, Firefox, Safari, Edge)
- Koneksi internet untuk load fonts dan icons eksternal

## 🛠️ Instalasi dan Setup

### Langkah 1: Clone Repository
```bash
git clone https://github.com/M-Bayu-Aji/kalkulator-imt.git
cd kalkulator-imt
```

### Langkah 2: Install Dependencies
```bash
npm install
# atau
yarn install
# atau
pnpm install
```

### Langkah 3: Jalankan Development Server
```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

### Langkah 4: Buka Aplikasi
Buka browser dan akses [http://localhost:3000](http://localhost:3000)

### Build untuk Production
```bash
npm run build
npm start
```

## 📖 Cara Penggunaan

1. **Masukkan Berat Badan**: Ketik berat badan Anda dalam kilogram (kg)
2. **Masukkan Tinggi Badan**: Ketik tinggi badan Anda dalam centimeter (cm)
3. **Klik Hitung**: Tekan tombol "Hitung IMT" untuk mendapatkan hasil
4. **Lihat Hasil**: Aplikasi akan menampilkan IMT Anda dan kategori kesehatan

### 📊 Kategori IMT

| Kategori | Rentang IMT | Status |
|----------|-------------|--------|
| Kurus | < 18.5 | ⚠️ Perlu perhatian |
| Normal | 18.5 - 24.9 | ✅ Ideal |
| Kelebihan Berat | 25 - 29.9 | ⚠️ Perlu kontrol |
| Obesitas | ≥ 30 | 🚨 Perlu konsultasi dokter |

## 🔧 Struktur Proyek

```
kalkulator-imt/
├── app/
│   ├── page.tsx           # Halaman utama
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── Calculator.tsx     # Komponen kalkulator
│   └── ...
├── public/
│   └── images/            # Gambar dan assets
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── next.config.js         # Next.js config
└── README.md              # Dokumentasi proyek
```

## 🤝 Kontribusi

Kami sangat menghargai kontribusi Anda! 🚀

1. Fork repository ini
2. Buat branch fitur baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

### 📝 Panduan Kontribusi

- Ikuti standar coding yang konsisten
- Tambahkan komentar pada kode yang kompleks
- Test perubahan di berbagai browser
- Update dokumentasi jika diperlukan

## 📄 Lisensi

Proyek ini menggunakan lisensi MIT. Lihat file `LICENSE` untuk detail lebih lanjut.

## 👨‍💻 Pengembang

Dibuat dengan ❤️ oleh [Muhammad Bayu Aji]

### 📞 Kontak

- **Email**: baa7uaajii@gmail.com
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/baayuaajii)
- **GitHub**: [Your GitHub](https://github.com/M-Bayu-Aji)

## 🙏 Acknowledgments

- **Next.js** untuk framework React yang powerful
- **TypeScript** untuk type safety yang lebih baik
- **Google Fonts** untuk font Poppins yang elegan
- **Font Awesome** untuk ikon yang indah
- **CSS Tricks** untuk inspirasi glassmorphism effect
- Komunitas developer untuk dukungan dan inspirasi

---

⭐ **Jika Anda menyukai proyek ini, jangan lupa untuk memberikan star!**

![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)
