import InnerContent from "@/components/InnerContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeftCircle, Warehouse } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DataTable } from "../../cash/data/data-table";
import { columns_transaksi_produk } from "../../product/detail/columns";
import { data_product } from "../../product/data/dummy";
import { colums_barang } from "../../product/data/colums_barang";

export default function WarehouseDetail() {
    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Card className="mb-5">
                        <CardContent className="py-3">
                            <div className="flex justify-between">
                                <div className="flex gap-4 self-center">
                                    <div className="self-center">
                                        <Link href={"/dashboard/product"}>
                                            <ArrowLeftCircle className="text-muted-foreground" />
                                        </Link>
                                    </div>
                                    <div className="self-center">
                                        <p className="text-sm text-muted-foreground">Gudang</p>
                                        <h1 className="font-semibold text-2xl">Detail Gudang</h1>
                                    </div>
                                </div>
                                <div className="flex gap-3 self-center">
                                    <Button>Ubah</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <div className="flex gap-3">
                                <Warehouse className="text-primary" size={20} />
                                <p className="self-center font-semibold">Informasi Gudang</p>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-10">
                                <div className="flex gap-10">
                                    <div className="flex flex-col gap-3">
                                        <p className="text-sm text-muted-foreground">Nama gudang</p>
                                        <p className="text-sm text-muted-foreground">Kode gudang</p>
                                        <p className="text-sm text-muted-foreground">Alamat</p>
                                        <p className="text-sm text-muted-foreground">Keterangan</p>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <p className="text-sm font-medium">Glosir Bandung</p>
                                        <p className="text-sm font-medium">#09908</p>
                                        <p className="text-sm font-medium">Jl. Bandung 204</p>
                                        <p className="text-sm font-medium">-</p>
                                    </div>
                                </div>

                                <div>
                                    <Card className="shadow-none">
                                        <CardContent className="p-6">
                                            <Tabs defaultValue="list_produk">
                                                <TabsList>
                                                    <TabsTrigger value="list_produk">List Produk</TabsTrigger>
                                                    <TabsTrigger value="list_transaksi">List Transaksi</TabsTrigger>
                                                </TabsList>
                                                <TabsContent value="list_produk">
                                                    <DataTable data={data_product} columns={colums_barang} search_data="nama_produk" search_placeholder="Cari produk..." />
                                                </TabsContent>
                                                <TabsContent value="list_transaksi">
                                                    <DataTable columns={columns_transaksi_produk} data={[
                                                        {
                                                            tanggal: "09/01/2024",
                                                            tipe: "Permintaan Pembelian #10001",
                                                            qty: "1 Pcs"
                                                        }
                                                    ]} search_data="tipe" search_placeholder="Cari tipe..." />
                                                </TabsContent>
                                            </Tabs>

                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
        </>
    )
}