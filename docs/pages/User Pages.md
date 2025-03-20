### 1. Dashboard (Beranda)

**URL:** `/en/dashboard` atau `/id/dashboard`  
**Fitur dan Penjelasan:**

- **Course Catalog Widget:** Menampilkan daftar kursus secara ringkas, dengan opsi filter berdasarkan kategori, tingkat kesulitan, dan rating. Pengguna dapat beralih antara tampilan grid dan list serta melihat preview kursus secara cepat.
- **Enrolled Courses Overview:** Menunjukkan kursus yang sedang diikuti, dilengkapi dengan indikator progress, tombol untuk melanjutkan kursus, dan pengingat untuk kuis atau assessment berikutnya.
- **Personalized Recommendations:** Menyediakan saran kursus yang dihasilkan AI berdasarkan preferensi dan riwayat belajar pengguna.
- **Continue Learning:** Memudahkan akses ke kursus yang sedang berlangsung, menampilkan posisi terakhir dan streak harian yang mendorong konsistensi belajar.
- **Notifications Dropdown:** Menyajikan notifikasi terkait update kursus, pengumuman, dan pengingat penting secara ringkas melalui dropdown.

---

### 2. Onboarding

**URL:** `/en/onboarding` atau `/id/onboarding`  
**Fitur dan Penjelasan:**

- **Learning Style Assessment:** Kuisioner interaktif yang membantu mengidentifikasi preferensi gaya belajar (visual, auditori, kinestetik, dsb) melalui contoh konten.
- **Goal Setting Interface:** Antarmuka untuk menetapkan tujuan belajar jangka pendek dan panjang, termasuk pilihan jalur karier dan prioritas skill.
- **Technical Background Questionnaire:** Formulir untuk menilai pengetahuan awal dan pengalaman belajar sebelumnya, serta konsep-konsep yang sudah dikenal.
- **Preference Selection:** Memungkinkan pengguna memilih preferensi konten seperti jenis (video, teks, interaktif), tingkat kesulitan, dan gaya presentasi.
- **Schedule Setting:** Pengaturan waktu belajar harian atau mingguan, preferensi hari, dan frekuensi pengingat.
- **Initial Recommendations:** Menampilkan saran awal kursus dan jalur pembelajaran berdasarkan data yang dikumpulkan selama onboarding.

---

### 3. Course Details (Detail Kursus)

**URL:** `/en/courses/:courseId` atau `/id/courses/:courseId`  
**Fitur dan Penjelasan:**

- **Course Overview:** Menyajikan deskripsi lengkap kursus, learning outcomes, tingkat kesulitan, rating, ulasan, informasi instruktur, dan estimasi waktu penyelesaian.
- **Module Listing:** Menampilkan daftar modul dalam bentuk tab atau list, beserta status progress masing-masing modul.
- **Progress Tracking:** Visualisasi progress berupa progress bar yang menunjukkan tingkat penyelesaian kursus secara keseluruhan.
- **Enrollment Options:** Tombol CTA untuk mendaftar kursus, yang dapat menyertakan opsi cepat untuk mulai belajar.
- **Reviews Section:** Menampilkan ulasan dan rating dari pengguna, dengan opsi filter untuk memudahkan pencarian ulasan relevan.
- **Prerequisites & Related Courses:** Informasi mengenai persyaratan sebelumnya dan kursus yang relevan sebagai pendukung pemahaman lebih lanjut.
- **Course Preview:** Menyediakan trailer video, sample units, atau sumber daya yang dapat diunduh untuk memberikan gambaran awal mengenai kursus.

---

### 4. Learning Module (Modul Pembelajaran)

**URL:** `/en/courses/:courseId/modules/:moduleId` atau `/id/courses/:courseId/modules/:moduleId`  
**Fitur dan Penjelasan:**

- **Module Overview:** Deskripsi modul, learning objectives, estimasi waktu penyelesaian, dan tingkat kesulitan.
- **Unit Listing:** Daftar unit dalam modul yang menampilkan preview singkat dan status penyelesaian masing-masing unit.
- **Personalization Button:** Tombol untuk memicu proses personalisasi konten modul, dilengkapi dengan indikator status (tersedia, sedang berlangsung, selesai).
- **Unit Navigation:** Navigasi antar unit yang intuitif, dengan indikator progress dan opsi untuk melompat ke unit tertentu.
- **Quiz Access:** Tombol atau link untuk mengakses kuis modul, yang memfasilitasi evaluasi pemahaman materi.

---

### 5. Unit Content (Konten Unit)

**URL:** `/en/courses/:courseId/modules/:moduleId/units/:unitId` atau `/id/courses/:courseId/modules/:moduleId/units/:unitId`  
**Fitur dan Penjelasan:**

- **Content Display:** Area utama untuk menyajikan konten pembelajaran (teks, video, elemen interaktif) dengan dukungan opsi dark/light mode dan penyesuaian ukuran font.
- **Content Version Indicator:** Label yang menunjukkan versi konten, dengan tooltip penjelasan mengenai basis personalisasi yang diterapkan.
- **Unit Navigation:** Fitur navigasi untuk berpindah antar unit dengan tombol next/previous serta indikator progress.
- **Feedback Mechanism:** Opsi untuk memberikan rating dan feedback langsung mengenai konten, serta laporan masalah.
- **Related Resources:** Tautan ke sumber daya pendukung atau materi tambahan, yang dapat ditampilkan dalam modal atau halaman terpisah.

---

### 6. Quiz

**URL:** `/en/courses/:courseId/modules/:moduleId/quiz` atau `/id/courses/:courseId/modules/:moduleId/quiz`  
**Fitur dan Penjelasan:**

- **Question Display:** Menyajikan soal dengan dukungan rich media (gambar, kode, dsb.) untuk berbagai tipe pertanyaan.
- **Timer & Progress Indicator:** Menampilkan waktu yang tersisa dan progress kuis secara real-time.
- **Immediate Feedback:** Memberikan umpan balik langsung setelah setiap pertanyaan, dengan penjelasan yang mendalam untuk setiap jawaban.
- **Results Summary:** Ringkasan hasil kuis, termasuk skor, waktu yang dihabiskan, dan analisis performa.
- **Performance Analysis:** Rincian analisis performa berdasarkan topik atau konsep, membantu mengidentifikasi area yang perlu perbaikan.
- **Personalization Trigger:** Opsi untuk memicu personalisasi lebih lanjut berdasarkan hasil kuis.

---

### 7. Learning Profile (Profil Pembelajaran)

**URL:** `/en/profile` atau `/id/profile`  
**Fitur dan Penjelasan:**

- **Profile Overview:** Menampilkan informasi pribadi dan preferensi belajar pengguna.
- **Performance Analytics:** Grafik dan data mengenai progress keseluruhan, tren waktu belajar, dan tingkat penyelesaian kursus.
- **Achievements & Certificates:** Ringkasan pencapaian dan badge yang telah diperoleh (terintegrasi dalam halaman profil).
- **Learning Schedule:** Kalender dan pengingat aktivitas belajar yang membantu pengguna mengatur jadwal belajar mereka.
- **Bookmarks & Notes (Sidebar Global):** Akses cepat ke catatan dan penanda yang dibuat oleh pengguna di seluruh platform.

---

### 8. Certificate Gallery

**URL:** `/en/certificates` atau `/id/certificates`  
**Fitur dan Penjelasan:**

- **Earned Certificates Display:** Galeri sertifikat yang telah diperoleh, dengan detail tanggal, kursus, dan informasi terkait.
- **Sharing Options:** Opsi untuk membagikan sertifikat melalui media sosial atau mengunduhnya sebagai PDF.
- **Verification Information:** Informasi verifikasi sertifikat, misalnya melalui QR code atau kode unik.

---

### Global Sidebar Menu (Tersedia di Semua Halaman)

- **Dashboard:** `/en/dashboard` atau `/id/dashboard`
- **Course Catalog:** `/en/courses` atau `/id/courses`
- **My Courses:** `/en/my-courses` atau `/id/my-courses`
- **Profile:** `/en/profile` atau `/id/profile`
- **Bookmarks & Notes:** `/en/bookmarks` atau `/id/bookmarks`
- **Settings:** `/en/settings` atau `/id/settings`
- **Notifications:** `/en/notifications` atau `/id/notifications`
- **Help/Support:** `/en/help` atau `/id/help`