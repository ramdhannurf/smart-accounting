export type LaporanContentType = {
    title: string,
    desc: string,
    href: string,
    name: string
}

export const laporan_content: Array<LaporanContentType> = [
    {
        title: "Laba Rugi",
        desc: "Menampilkan semua pendapatan yang diperoleh dan biaya yang dikeluarkan dalam periode tertentu. Template laporan versi terkini bisa Anda custom sesuai kebutuhan.",
        href: "/dashboard/report/profit_loss",
        name: "profit_loss"
    },
    {
        title: "Jurnal",
        desc: "Menampilkan semua journal entry per transaksi dalam periode tertentu. Anda dapat melacak transaksi yang masuk ke masing-masing akun.",
        href: "/dashboard/report/journal",
        name: "journal"
    },
    {
        title: "Buku besar",
        desc: "Menampilkan semua transaksi berdasarkan akun dalam periode tertentu, termasuk kronologi pergerakan transaksinya selama periode berlangsung.",
        href: "/dashboard/report/general_ledger",
        name: "general_ledger"
    },
    {
        title: "Arus kas",
        desc: "Menampilkan pergerakan uang masuk dan keluar dari transaksi dalam periode tertentu. Template laporan ini bisa Anda custom sesuai kebutuhan.",
        href: "/dashboard/report/cash_flow",
        name: "cash_flow"
    },
    {
        title: "Pajak pemotongan",
        desc: "Menampilkan dasar pengenaan pajak (DPP), tarif pajak, dan jumlah pajak dengan tipe pemotongan yang digunakan di transaksi dalam periode tertentu.",
        href: "/dashboard/report/witholding_tax_report",
        name: "witholding_tax_report"
    },
    {
        title: "Pajak penjualan",
        desc: "Menampilkan dasar pengenaan pajak (DPP), tarif pajak, dan jumlah pajak dengan pajak pertambahan nilai (PPN) yang digunakan di transaksi dalam periode tertentu.",
        href: "/dashboard/report/sales_tax_report",
        name: "sales_tax_report"
    }
]