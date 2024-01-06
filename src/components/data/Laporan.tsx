export type LaporanContentType = {
    title: string,
    desc: string,
    href: string
}

export const laporan_content: Array<LaporanContentType> = [
    {
        title: "Laba Rugi",
        desc: "Menampilkan semua pendapatan yang diperoleh dan biaya yang dikeluarkan dalam periode tertentu. Template laporan versi terkini bisa Anda custom sesuai kebutuhan.",
        href: "#"
    },
    {
        title: "Jurnal",
        desc: "Menampilkan semua journal entry per transaksi dalam periode tertentu. Anda dapat melacak transaksi yang masuk ke masing-masing akun.",
        href: "#"
    },
    {
        title: "Buku besar",
        desc: "Menampilkan semua transaksi berdasarkan akun dalam periode tertentu, termasuk kronologi pergerakan transaksinya selama periode berlangsung.",
        href: "#"
    },
    {
        title: "Arus kas",
        desc: "Menampilkan pergerakan uang masuk dan keluar dari transaksi dalam periode tertentu. Template laporan ini bisa Anda custom sesuai kebutuhan.",
        href: "#"
    },
    {
        title: "Pajak",
        desc: "Menampilkan dasar pengenaan pajak (DPP), tarif pajak, dan jumlah pajak dengan tipe pemotongan yang digunakan di transaksi dalam periode tertentu.",
        href: "#"
    }
]