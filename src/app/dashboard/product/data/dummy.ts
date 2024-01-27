export const data_product = [
    {
        nama_product: "Telur",
        kode_product: "#123456",
        kategori_product: "Peternakan",
        total_stock: 10,
        batas_minimum: 3,
        unit: "Buah",
        harga_rata: "Rp. 153,85",
        harga_beli_terakhir: "Rp. 2.000",
        harga_beli: "Rp. 1.500",
        harga_jual: "Rp. 5.000",
    },
    {
        nama_product: "Minyak Gorang",
        kode_product: "#6653",
        kategori_product: "Kebutuhan Dapur",
        total_stock: 50,
        batas_minimum: 10,
        unit: "Pcs",
        harga_rata: "Rp. 5.000",
        harga_beli_terakhir: "Rp. 30.000",
        harga_beli: "Rp. 20.500",
        harga_jual: "Rp. 60.000",
    }
]

export const data_adjusments = [
    {
        tanggal: "01/08/2024",
        no_transaksi: "Stock In/Out #00134",
        kategori: "Umum",
        akun: "Inventory",
        gudang: "Glosir Bandung",
        tag: "-"
    },
    {
        tanggal: "01/08/2024",
        no_transaksi: "Stock Adjusment #2231",
        kategori: "Umum",
        akun: "Inventory Adjusments",
        gudang: "Tidak ditentukan",
        tag: "-"
    }
]

export const data_gudang = [
    {
        kode_gudang: "#BDG-01",
        nama_gudang: "Glosir Bandung",
        alamat: "Jl. Soekarno Hatta No.34",
        keterangan: "-"
    }
]

export const data_price_rules = [
    {
        nama_aturan: "Customer Rumah Makan",
        jenis_aturan: "Diskon 10%",
        tanggal_mulai: "08/01/2024",
        tanggal_berakhir: "04/03/2024",
        produk_kontak: "Telur",
        status: "Aktif"
    }
]