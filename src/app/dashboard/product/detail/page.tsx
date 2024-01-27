"use client"
import InnerContent from "@/components/InnerContent";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Archive, ArrowLeft, ArrowLeftCircle, BadgePercent, Box, Package, Pencil, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DataTable } from "../../cash/data/data-table";
import { columns_info_gudang, columns_transaksi_produk, columns_unit } from "./columns";
import { useState } from "react";
import { DrawerDialog } from "@/components/Dialog";
import { ComboBox } from "@/components/ComboBox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Title from "@/components/Title";

export default function DetailProduct() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Title title="Detail produk" subtitle="Produk" href="/dashboard/product"></Title>
                    <Card className="mb-5">
                        <CardContent className="p-6">
                            <div className="flex flex-col gap-6">
                                <div className="flex 2xl:flex-nowrap xl:flex-nowrap flex-wrap gap-5">
                                    <div className="w-[400px] border rounded-xl relative">
                                        <img src="/assets/img/egg.jpg" className="rounded-xl" alt="" />
                                        <div className="absolute bottom-3 right-3">
                                            <div className="flex">
                                                <Button><Pencil size={16} className="mr-2" /> Edit</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <Card className="flex-1 shadow-none">
                                        <CardHeader>
                                            <CardTitle>
                                                <div className="flex gap-3">
                                                    <Package className="text-primary" size={20} />
                                                    <p className="self-center">Info Produk</p>
                                                </div>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex gap-10">
                                                <div className="flex flex-col gap-3">
                                                    <p className="text-sm text-muted-foreground">Nama produk</p>
                                                    <p className="text-sm text-muted-foreground">Kode produk</p>
                                                    <p className="text-sm text-muted-foreground">Barcode</p>
                                                    <p className="text-sm text-muted-foreground">Harga rata-rata</p>
                                                    <p className="text-sm text-muted-foreground">Stok di gudang</p>
                                                    <p className="text-sm text-muted-foreground">Batas stok minimum</p>
                                                    <p className="text-sm text-muted-foreground">Kategori produk</p>
                                                    <p className="text-sm text-muted-foreground">Deskripsi</p>
                                                    <p className="text-sm text-muted-foreground">Tipe produk</p>
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <p className="text-sm font-medium">Telur</p>
                                                    <p className="text-sm font-medium">#09908</p>
                                                    <p className="text-sm font-medium">1234567890</p>
                                                    <p className="text-sm font-medium">Rp 153,846154</p>
                                                    <p className="text-sm font-medium">13 Pcs</p>
                                                    <p className="text-sm font-medium">10 Pcs</p>
                                                    <p className="text-sm font-medium">Peternakan</p>
                                                    <p className="text-sm font-medium">-</p>
                                                    <p className="text-sm font-medium">
                                                        <Badge>Single</Badge>
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-5">
                                    <Card className="shadow-none">
                                        <CardHeader>
                                            <CardTitle>
                                                <div className="flex gap-3">
                                                    <ShoppingBag className="text-primary" size={20} />
                                                    <p className="self-center">Info Pembelian</p>
                                                </div>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex gap-10">
                                                <div className="flex flex-col gap-3">
                                                    <p className="text-sm text-muted-foreground">Harga beli satuan</p>
                                                    <p className="text-sm text-muted-foreground">Akun Pembelian</p>
                                                    <p className="text-sm text-muted-foreground">Pajak beli</p>
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <p className="text-sm font-medium">Rp 2.000</p>
                                                    <p className="text-sm font-medium">
                                                        <Link href={"#"} className="text-primary hover:underline">
                                                            (5-50000) Cost of Sales
                                                        </Link>
                                                    </p>
                                                    <p className="text-sm font-medium">PPN</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card className="shadow-none">
                                        <CardHeader>
                                            <CardTitle>
                                                <div className="flex gap-3">
                                                    <BadgePercent className="text-primary" size={20} />
                                                    <p className="self-center">Info Penjualan</p>
                                                </div>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex gap-10">
                                                <div className="flex flex-col gap-3">
                                                    <p className="text-sm text-muted-foreground">Harga jual satuan</p>
                                                    <p className="text-sm text-muted-foreground">Akun Penjualan</p>
                                                    <p className="text-sm text-muted-foreground">Pajak jual</p>
                                                    <p className="text-sm text-muted-foreground">Akun diskon</p>
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <p className="text-sm font-medium">Rp 5.000</p>
                                                    <p className="text-sm font-medium">
                                                        <Link href={"#"} className="text-primary hover:underline">
                                                            (4-40000) Service Revenue
                                                        </Link>
                                                    </p>
                                                    <p className="text-sm font-medium">PPN</p>
                                                    <p className="text-sm font-medium">
                                                        <Link href={"#"} className="text-primary hover:underline">
                                                            (4-40100) Sales Discount
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Informasi Transaksi</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue="transaksi_produk">
                                <TabsList>
                                    <TabsTrigger value="transaksi_produk">Transaksi Produk</TabsTrigger>
                                    <TabsTrigger value="pengaturan_unit">Pengaturan Unit</TabsTrigger>
                                    <TabsTrigger value="info_gudang">Info Gudang</TabsTrigger>
                                </TabsList>
                                <TabsContent value="transaksi_produk">
                                    <DataTable columns={columns_transaksi_produk} data={[
                                        {
                                            tanggal: "09/01/2024",
                                            tipe: "Permintaan Pembelian #10001",
                                            qty: "1 Pcs"
                                        }
                                    ]} search_data="tipe" search_placeholder="Cari tipe..." />
                                </TabsContent>
                                <TabsContent value="pengaturan_unit">
                                    <div className="flex flex-col gap-3">
                                        <div className="flex justify-end">
                                            <Button onClick={() => setOpen(true)}>Tambah unit baru</Button>
                                        </div>
                                        <DataTable columns={columns_unit} data={[
                                            {
                                                unit_dasar: "Kg",
                                                qty: "12",
                                                harga_beli: "Rp 13.000",
                                                harga_jual: "Rp 15.000",
                                            }
                                        ]} search_data="unit_dasar" search_placeholder="Cari unit..." />
                                    </div>
                                </TabsContent>
                                <TabsContent value="info_gudang">
                                    <DataTable columns={columns_info_gudang} data={[
                                        {
                                            nama_gudang: "Glosir Bandung",
                                            stok_gudang: "15 Pcs"
                                        }
                                    ]} search_data="nama_gudang" search_placeholder="Cari gudang..." />
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
            <DrawerDialog title="Tambah Unit" desc="lorem ipsum follar amets." open={open} setOpen={setOpen}>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="">Unit Dasar</Label>
                        <ComboBox select={[]} placeholder="Pilih unit" name="unit" search="Cari unit..." />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="">Qty</Label>
                        <Input placeholder="" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="">Harga Beli</Label>
                        <Input placeholder="Rp. 00,0" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="">Harga Jual</Label>
                        <Input placeholder="Rp. 00,0" />
                    </div>
                    <div className="flex flex-col gap-2 mt-2">
                        <Button>Simpan</Button>
                        <Button variant={"outline"} onClick={() => setOpen(false)}>Batal</Button>
                    </div>
                </div>
            </DrawerDialog>
        </>
    )
}