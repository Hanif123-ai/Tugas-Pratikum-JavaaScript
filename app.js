/**
 * ============================================================
 * TUGAS MANDIRI — PEMROGRAMAN INTERNET (JAVASCRIPT DASAR)
 * Program Studi : Pendidikan Sistem dan Teknologi Informasi
 * Universitas   : Universitas Pendidikan Indonesia
 * Study Case    : Sistem Poin & Keanggotaan Member Kedai Kopi
 * Berkas        : app.js
 * ============================================================
 */


// ============================================================
// AKTIVITAS 1: Setup Berkas & Integrasi JavaScript Eksternal
// ============================================================

console.log("=== SISTEM POIN MEMBER KEDAI KOPI ===");

// TODO 1
console.log("Skrip app.js berhasil terhubung!");



// ============================================================
// AKTIVITAS 2: Variabel & Dialog Interaktif
// ============================================================

// ---- BAGIAN 2A: VARIABEL IDENTITAS KEDAI KOPI ----

// TODO 2A

const NAMA_KEDAI = "Kopi PSTI Kampus";

let namaKasir = "Kak Eko";
let shiftKerja = "Pagi";

console.log("Nama Kedai : " + NAMA_KEDAI);
console.log("Nama Kasir : " + namaKasir);
console.log("Shift Kerja : " + shiftKerja);


// ---- DEMO PERBEDAAN LET vs CONST ----

// TODO 2B

namaKasir = "Hanif";

console.log("Nama Kasir Setelah Diubah : " + namaKasir);


// ---- BAGIAN 2B: INPUT INTERAKTIF & PENGANDAIAN DASAR ----

// TODO 2C

alert("Selamat datang di " + NAMA_KEDAI + "!");

let namaPelanggan = prompt(
    "Halo! Masukkan nama kamu untuk memulai:"
);


if (namaPelanggan) {

    alert(
        "Halo, " + namaPelanggan +
        "! Selamat datang di " + NAMA_KEDAI
    );

    console.log(
        "Pelanggan yang aktif : " + namaPelanggan
    );

} else {

    namaPelanggan = "Pelanggan Setia";

    alert(
        "Nama tidak diisi. Kamu akan dipanggil Pelanggan Setia."
    );

    console.log(
        "Pelanggan yang aktif : " + namaPelanggan
    );
}



// ============================================================
// AKTIVITAS 3: Operasi Aritmatika — Akumulasi Poin Transaksi
// ============================================================

// TODO 3

let poinKopi = 45;
let poinMakanan = 35;
let poinMerchandise = 20;


// Menghitung total poin
let totalPoin =
    poinKopi +
    poinMakanan +
    poinMerchandise;


console.log("");
console.log("=== RINCIAN POIN TRANSAKSI ===");

console.log("Poin Kopi : " + poinKopi);
console.log("Poin Makanan : " + poinMakanan);
console.log("Poin Merchandise : " + poinMerchandise);

console.log("Total Poin : " + totalPoin);



// ============================================================
// AKTIVITAS 4: Percabangan if-else — Penentuan Tier Membership
// ============================================================

// TODO 4

let tierMember = "";
let benefit = "";


if (totalPoin >= 100) {

    tierMember = "Platinum";

    benefit =
        "Diskon 20% + Gratis 1 Minuman Signature";

} else if (totalPoin >= 70) {

    tierMember = "Gold";

    benefit =
        "Diskon 10% di setiap transaksi";

} else if (totalPoin >= 40) {

    tierMember = "Silver";

    benefit =
        "Diskon 5% untuk menu minuman";

} else {

    tierMember = "Bronze";

    benefit =
        "Member Reguler (kumpulkan poin untuk naik tier)";
}


// Menampilkan hasil ke Console

console.log("");
console.log("=== STATUS MEMBERSHIP ===");

console.log("Nama : " + namaPelanggan);
console.log("Total Poin : " + totalPoin);
console.log("Tier : " + tierMember);
console.log("Benefit : " + benefit);


// Menampilkan hasil menggunakan alert

alert(
    "HASIL MEMBERSHIP\n\n" +
    "Nama : " + namaPelanggan + "\n" +
    "Total Poin : " + totalPoin + "\n" +
    "Tier : " + tierMember + "\n" +
    "Benefit : " + benefit
);



// ============================================================
// AKTIVITAS 5: Function — Membuat Fungsi yang Bisa Dipakai Ulang
// ============================================================


// TODO 5A

function hitungTotalPoin(p1, p2, p3) {

    let total = p1 + p2 + p3;

    return total;
}


// TODO 5B

function tentukanTierMember(poin) {

    if (poin >= 100) {

        return "Platinum - Sangat Aktif";

    } else if (poin >= 70) {

        return "Gold - Aktif";

    } else if (poin >= 40) {

        return "Silver - Cukup Aktif";

    } else {

        return "Bronze - Member Reguler";
    }
}


// TODO 5C
// Simulasi Pelanggan B

let totalPelangganB =
    hitungTotalPoin(35, 25, 20);

let tierPelangganB =
    tentukanTierMember(totalPelangganB);


// Simulasi Pelanggan C

let totalPelangganC =
    hitungTotalPoin(15, 10, 5);

let tierPelangganC =
    tentukanTierMember(totalPelangganC);


// Menampilkan hasil Pelanggan B

console.log("");
console.log("=== SIMULASI PELANGGAN B ===");

console.log(
    "Total Poin Pelanggan B : " +
    totalPelangganB
);

console.log(
    "Tier Pelanggan B : " +
    tierPelangganB
);


// Menampilkan hasil Pelanggan C

console.log("");
console.log("=== SIMULASI PELANGGAN C ===");

console.log(
    "Total Poin Pelanggan C : " +
    totalPelangganC
);

console.log(
    "Tier Pelanggan C : " +
    tierPelangganC
);



// ============================================================
// AKTIVITAS 6: Array & For Loop — Daftar Menu Rekomendasi
// ============================================================


// TODO 6A

let menuRekomendasi = [
    "Kopi Susu Gula Aren",
    "Americano",
    "Cappuccino",
    "Matcha Latte",
    "Roti Bakar Cokelat"
];


console.log("");
console.log("=== MENU REKOMENDASI ===");


// TODO 6B

for (let i = 0; i < menuRekomendasi.length; i++) {

    console.log(
        (i + 1) + ". " + menuRekomendasi[i]
    );
}


// TODO 6C

console.log(
    "Total Menu : " +
    menuRekomendasi.length
);


console.log(
    "=== TUGAS MANDIRI SELESAI DENGAN SUKSES! ==="
);