export type SubFeatureRole = {
    name: string,
    read: {checked: boolean, show: boolean},
    create: {checked: boolean, show: boolean},
    update: {checked: boolean, show: boolean},
    delete: {checked: boolean, show: boolean},
}

export type FeatureRole = {
    fitur: string,
    subfitur: Array<SubFeatureRole>
}

export const data_dummy_role: Array<FeatureRole> = [
    {
        fitur: "Kas & Bank",
        subfitur: [
            {
                name: "Transfer Uang",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Terima Uang",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Kirim Uang",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            }
        ]
    },
    {
        fitur: "Biaya",
        subfitur: [
            {
                name: "Biaya",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Biaya Tagihan",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
        ]
    },
    {
        fitur: "Produk",
        subfitur: [
            {
                name: "Penyesuian Stok",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Konversi Produk",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Transfer Gudang",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            }
        ]
    },
    {
        fitur: "Pembelian",
        subfitur: [
            {
                name: "Penawaran Pembelian",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Pesanan Pembelian",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Pengiriman Pembelian",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Penagihan Pembelian",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Retur Pembelian",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Permintaan Pembelian",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Pembelian Faktur Pembelian",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            }
        ]
    },
    {
        fitur: "Laporan Sekilas Binis",
        subfitur: [
            {
                name: "Laba Rugi",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Jurnal",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Buku Besar",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Arus Kas",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Pajak",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
        ]
    },
    {
        fitur: "Laporan Penjualan",
        subfitur: [
            {
                name: "Daftar Penjualan",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Penjualan Per Pelanggan",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Piutang Pelanggan",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Usia Piutang",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Pengiriman Penjualan",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Penjualan per Produk",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Penyelesaian Pesanan Penjualan",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Profitablitas Produk",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Daftar Faktur Performa",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Daftar Tukar",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
        ]
    },
    {
        fitur: "Laporan Pembelian",
        subfitur: [
            {
                name: "Daftar Pembelian",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Pembelian Per Supplier",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Piutang Supplier",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Usia Piutang",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Pengiriman Pembelian",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Pembelian per Produk",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Penyelesaian Pesanan Pembelian",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Profitablitas Produk",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Daftar Faktur Performa",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Daftar Tukar",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
        ]
    },
    {
        fitur: "Laporan Produk",
        subfitur: [
            {
                name: "Ringkasan Perediaan Barang",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Kuantitas Stok Gudang",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Nilai Persediaan Barang",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Nilai Stok Gudang",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Detail Persediaan Barang",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Pergerakan Barang Gudang",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            }
        ]
    },
    {
        fitur: "Laporan Bank",
        subfitur: [
            {
                name: "Ringkasan Rekonsilasi Bank",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Mutasi Rekening Koran",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
        ]
    },
    {
        fitur: "Laporan Pajak",
        subfitur: [
            {
                name: "Pajak Pemotongan",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Pajak Penjualan",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
        ]
    },
    {
        fitur: "Penjualan",
        subfitur: [
            {
                name: "Penawaran Penjualan",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Pesanan Penjualan",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Pengiriman Penjualan",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Penagihan Penjualan",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Retur Penjualan",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
            {
                name: "Pembiayaan Faktur Penjualan",
                read: { checked: true, show: true },
                create: { checked: true, show: true },
                update: { checked: true, show: true },
                delete: { checked: true, show: true },
            },
        ]
    },
]


export const data_role = [
    {
        nama_peran: "Pegawai Laporan",
        deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum magnam molestiae sunt iste nihil excepturi error quas at porro reprehenderit, dolorem, laborum, explicabo minus alias asperiores blanditiis. Quaerat, totam natus!"
    },
    {
        nama_peran: "Pegawai Magang",
        deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum magnam molestiae sunt iste nihil excepturi error quas at porro reprehenderit, dolorem, laborum, explicabo minus alias asperiores blanditiis. Quaerat, totam natus!"
    }
]