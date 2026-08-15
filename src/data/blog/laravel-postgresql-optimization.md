---
title: "Optimasi Query Database PostgreSQL & Laravel Batching"
excerpt: "Teknik optimasi pencarian data pegawai skala besar, pembagian query terdistribusi, dan pencegahan memory leak saat ekspor data."
pubDate: 2026-06-28
readTime: "6 min baca"
category: "Backend"
author: "Rafli Hamdani"
---

Proses rekapitulasi data skala besar sering lambat bukan karena satu masalah besar, tetapi karena beberapa keputusan kecil yang menumpuk: query terlalu luas, data dimuat sekaligus, dan proses ekspor tidak dibatasi.

Laravel menyediakan beberapa strategi untuk menjaga konsumsi memori tetap stabil saat memproses banyak baris.

## Gunakan batching

Untuk pekerjaan ekspor atau rekapitulasi, gunakan pendekatan batching seperti `chunk()` atau cursor ketika cocok. Tujuannya adalah menghindari pemuatan seluruh dataset ke memori dalam satu waktu.

Selain itu, batasi kolom yang dipilih. Query yang hanya membutuhkan lima kolom tidak perlu mengambil seluruh struktur model.

## Validasi query utama

Pastikan filter seperti `whereNotNull`, range tanggal, dan index database sudah sesuai dengan pola akses data. Optimasi terbaik biasanya dimulai dari query yang benar-benar dijalankan paling sering.

Pendekatan ini membuat proses lebih stabil, terutama untuk sistem administratif atau enterprise yang memproses banyak data historis.
