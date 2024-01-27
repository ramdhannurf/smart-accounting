import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";

export default function ExistingRole() {
    return (
        <>
            <div className="flex flex-col gap-5 2xl:w-3/5 xl:w-3/5 w-full">
                <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                        <p className="font-bold">Ultimate</p>
                        <ul className="text-sm list-disc ml-5 pt-3 text-muted-foreground">
                            <li>Mengundang pengguna baru.</li>
                            <li>Melihat dan menambah semua data transaksi.</li>
                            <li>Melihat semua halaman di Jurnal, kecuali halaman tagihan.</li>
                            <li>Mengubah dan menghapus data jika mencentang List Manager.</li>
                        </ul>
                    </div>
                    <div>
                        <Switch />
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                        <p className="font-bold">Administrator</p>
                        <ul className="text-sm list-disc ml-5 pt-3 text-muted-foreground">
                            <li>Melihat halaman pengaturan, kecuali halaman tagihan.</li>
                        </ul>
                    </div>
                    <div>
                        <Switch />
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                        <p className="font-bold">Akuntan</p>
                        <ul className="text-sm list-disc ml-5 pt-3 text-muted-foreground">
                            <li>Melihat semua laporan.</li>
                            <li>Membuat akun baru dan jurnal umum melalui halaman daftar akun.</li>
                            <li>Melihat semua data penjualan, pembelian, biaya, dan penyesuaian stok.</li>
                            <li>Melihat halaman kas & bank, kontak pelanggan dan supplier, produk, daftar akun, dan daftar lainnya.</li>
                            <li>Mengubah dan menghapus data di halaman daftar akun dan daftar lainnya jika mencentang List Manager.</li>
                        </ul>
                    </div>
                    <div>
                        <Switch />
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                        <p className="font-bold">Pembaca Laporan</p>
                        <ul className="text-sm list-disc ml-5 pt-3 text-muted-foreground">
                            <li>Melihat semua laporan.</li>

                        </ul>
                    </div>
                    <div>
                        <Switch />
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                        <p className="font-bold">Bankir</p>
                        <ul className="text-sm list-disc ml-5 pt-3 text-muted-foreground">
                            <li>Melakukan rekonsiliasi bank dan melihat laporannya.</li>
                            <li>Melihat dan menambah akun serta transaksi di halaman kas & bank.</li>
                            <li>Mengubah dan menghapus data di halaman kas & bank jika mencentang List Manager.</li>
                        </ul>
                        <div className="pt-3">
                            <p className="text-muted-foreground text-sm">Limitasi akses</p>
                            <div className="flex items-center space-x-2 pt-3">
                                <Checkbox id="limit_kasbank" />
                                <label
                                    htmlFor="limit_kasbank"
                                    className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Batasi pengguna ini untuk melihat transaksi kas & bank yang dibuat pengguna lain
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Switch />
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                        <p className="font-bold">Penjualan</p>
                        <ul className="text-sm list-disc ml-5 pt-3 text-muted-foreground">
                            <li>Melihat dan membuat semua fungsi penjualan.</li>
                            <li>Melihat semua laporan penjualan.</li>
                            <li>Menambah produk baru.</li>
                            <li>Melihat harga jual produk dan daftar produk.</li>
                            <li>Melihat halaman kontak pelanggan, produk, daftar lainnya, dan pengaturan penjualan.</li>
                            <li>Mengubah dan menghapus data transaksi penjualan, produk, dan pelanggan jika mencentang List Manager.</li>
                        </ul>
                        <div className="py-3">
                            <p className="text-muted-foreground text-sm">Wewenang bawaan penjualan</p>
                            <div className="flex 2xl:flex-nowrap xl:flex-nowrap flex-wrap gap-3">
                                <div className="flex items-center space-x-2 pt-3">
                                    <Checkbox id="faktur_return" />
                                    <label
                                        htmlFor="faktur_return"
                                        className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Faktur & retur
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2 pt-3">
                                    <Checkbox id="pesanan_penawaran" />
                                    <label
                                        htmlFor="pesanan_penawaran"
                                        className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Pesanan & penawaran
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2 pt-3">
                                    <Checkbox id="pembayaran" />
                                    <label
                                        htmlFor="pembayaran"
                                        className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Pembayaran
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="pt-3">
                            <p className="text-muted-foreground text-sm">Limitasi akses</p>
                            <div className="flex items-center space-x-2 pt-3">
                                <Checkbox id="limit_kasbank" />
                                <label
                                    htmlFor="limit_kasbank"
                                    className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Batasi pengguna ini untuk melihat transaksi transaksi penjualan yang dibuat pengguna lain
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Switch />
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                        <p className="font-bold">Pembelian</p>
                        <ul className="text-sm list-disc ml-5 pt-3 text-muted-foreground">
                            <li>Melihat dan membuat semua fungsi pembelian.</li>
                            <li>Melihat semua laporan pembelian.</li>
                            <li>Menambah produk baru.</li>
                            <li>Melihat harga jual produk dan daftar produk.</li>
                            <li>Melihat halaman kontak supplier, produk, daftar lainnya, dan pengaturan pembelian.</li>
                            <li>Mengubah dan menghapus data transaksi pembelian, produk, dan supplier jika mencentang List Manager.</li>
                        </ul>
                        <div className="py-3">
                            <p className="text-muted-foreground text-sm">Wewenang bawaan pembelian</p>
                            <div className="flex 2xl:flex-nowrap xl:flex-nowrap flex-wrap gap-3">
                                <div className="flex items-center space-x-2 pt-3">
                                    <Checkbox id="faktur_return" />
                                    <label
                                        htmlFor="faktur_return"
                                        className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Faktur & retur
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2 pt-3">
                                    <Checkbox id="pesanan_penawaran" />
                                    <label
                                        htmlFor="pesanan_penawaran"
                                        className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Pesanan & penawaran
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2 pt-3">
                                    <Checkbox id="pembayaran" />
                                    <label
                                        htmlFor="pembayaran"
                                        className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Pembayaran
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2 pt-3">
                                    <Checkbox id="pembayaran" />
                                    <label
                                        htmlFor="pembayaran"
                                        className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Pembayaran
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="pt-3">
                            <p className="text-muted-foreground text-sm">Limitasi akses</p>
                            <div className="flex items-center space-x-2 pt-3">
                                <Checkbox id="limit_kasbank" />
                                <label
                                    htmlFor="limit_kasbank"
                                    className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Batasi pengguna ini untuk melihat transaksi transaksi penjualan yang dibuat pengguna lain
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Switch />
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                        <p className="font-bold">Pengeluaran</p>
                        <ul className="text-sm list-disc ml-5 pt-3 text-muted-foreground">
                            <li>Melihat dan membuat semua fungsi biaya.</li>
                            <li>Melihat semua laporan biaya.</li>
                            <li>Melihat halaman kontak supplier dan daftar lainnya.</li>
                            <li>Mengubah dan menghapus data biaya dan supplier jika mencentang List Manager.</li>
                        </ul>
                        <div className="pt-3">
                            <p className="text-muted-foreground text-sm">Limitasi akses</p>
                            <div className="flex items-center space-x-2 pt-3">
                                <Checkbox id="limit_kasbank" />
                                <label
                                    htmlFor="limit_kasbank"
                                    className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Batasi pengguna ini untuk melihat transaksi transaksi pengeluaran yang dibuat pengguna lain
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Switch />
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                        <p className="font-bold">Pergudangan</p>
                        <ul className="text-sm list-disc ml-5 pt-3 text-muted-foreground">
                            <li>Menambah produk baru.</li>
                            <li>Melihat daftar dan kuantitas produk.</li>
                            <li>Melihat dan menyesuaikan stok produk (stock opname).</li>
                            <li>Melihat semua laporan produk.</li>
                            <li>Melihat halaman daftar lainnya dan pengaturan.</li>
                            <li>Mengubah dan menghapus data produk jika mencentang List Manager.</li>
                        </ul>
                    </div>
                    <div>
                        <Switch />
                    </div>
                </div>
            </div>
        </>
    )
}