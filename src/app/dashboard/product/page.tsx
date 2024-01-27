"use client"
import DropdownButton from "@/components/DropdownButton";
import InnerContent from "@/components/InnerContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BarangJasa from "./content/BarangJasa";
import Gudang from "./content/Gudang";
import AturanHarga from "./content/AturanHarga";
import Title from "@/components/Title";

export default function ProductPage() {
    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Title title="Produk" subtitle="">
                        <DropdownButton title="Tindakan" variant={"default"}>
                            <DropdownButton.Label>Produk</DropdownButton.Label>
                            <DropdownButton.Link href="/dashboard/product/add">Tambah Produk baru</DropdownButton.Link>
                            <DropdownButton.Label>Gudang</DropdownButton.Label>
                            <DropdownButton.Link href="/dashboard/warehouse/add">Tambah Gudang baru</DropdownButton.Link>
                            <DropdownButton.Link href="/dashboard/warehouse/stock_adjusments">Sesuaikan stok (Stok opname)</DropdownButton.Link>
                            {/* <DropdownButton.Link href="/dashboard/sales/add/sales_offer">Trans</DropdownButton.Link> */}
                            <DropdownButton.Label>Aturan harga</DropdownButton.Label>
                            <DropdownButton.Link href="/dashboard/product/price_rules">Buat aturan harga baru</DropdownButton.Link>
                        </DropdownButton>
                    </Title>
                    <Tabs defaultValue="barang_jasa" className="w-full">
                        <TabsList>
                            <TabsTrigger value="barang_jasa">Barang & Jasa</TabsTrigger>
                            <TabsTrigger value="gudang">Gudang</TabsTrigger>
                            <TabsTrigger value="aturan_harga">Aturan Harga</TabsTrigger>
                        </TabsList>
                        <TabsContent value="barang_jasa">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Barang & Jasa</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <BarangJasa />
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="gudang">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Gudang</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Gudang />
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="aturan_harga">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Aturan Harga</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <AturanHarga />
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </InnerContent>
        </>
    )
}