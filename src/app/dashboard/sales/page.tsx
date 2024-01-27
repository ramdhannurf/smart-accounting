"use client"
import DropdownButton from "@/components/DropdownButton";
import InnerContent from "@/components/InnerContent";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DataTable } from "../cash/data/data-table";
import { columns_faktur } from "./data/colums_faktur";
import Title from "@/components/Title";

const analytics_penjualan: Array<{ title: string, count: number, total: string, color: string }> = [
    {
        title: "Penjualan belum dibayar",
        count: 0,
        total: "Rp. 0,00",
        color: "#c7e6c7"
    },
    {
        title: "Penjualan jatuh tempo",
        count: 0,
        total: "Rp. 0,00",
        color: "#f8c9c4"
    },
    {
        title: "Pelunasan diterima 30 hari terakhir",
        count: 0,
        total: "Rp. 0,00",
        color: "#cef1fd"
    }
]


export default function SalesPage() {
    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Title title="Penjualan" subtitle="">
                        <Button variant={"outline"}>Import</Button>
                        <DropdownButton title="Buat penjualan baru" variant={"default"}>
                            <DropdownButton.Link href="/dashboard/sales/add/sales_billing">Penagihan Penjualan</DropdownButton.Link>
                            <DropdownButton.Link href="/dashboard/merged_invoices">Tukar Faktur</DropdownButton.Link>
                            <DropdownButton.Link href="/dashboard/sales/add/sales_orders">Pemesanan Penjualan</DropdownButton.Link>
                            <DropdownButton.Link href="/dashboard/sales/add/sales_offer">Penawaran Penjualan</DropdownButton.Link>
                        </DropdownButton>
                    </Title>
                    <div className="mb-5 grid 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                        {
                            analytics_penjualan.map((el, i: number) => {
                                return <Card key={i}>
                                    <CardHeader style={{ backgroundColor: el.color }} className="rounded-t-lg flex justify-between !flex-row">
                                        <div className="self-center">
                                            <CardTitle className="text-sm text-black">{el.title}</CardTitle>
                                        </div>
                                        <div>
                                            <Badge className="bg-white text-black">{el.count}</Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex justify-between">
                                            <div className="mt-2">
                                                <small>Total</small>
                                                <h3 className="text-lg font-bold">{el.total}</h3>
                                            </div>

                                        </div>
                                    </CardContent>
                                </Card>
                            })
                        }
                    </div>
                    <div className="overflow-y-auto">
                        <Tabs defaultValue="penjualan" className="w-full">
                            <TabsList>
                                <TabsTrigger value="penjualan">Faktur penjualan</TabsTrigger>
                                <TabsTrigger value="pengiriman">Pengiriman</TabsTrigger>
                                <TabsTrigger value="pemesanan">Pesanan penjualan</TabsTrigger>
                                <TabsTrigger value="penawaran">Penawaran</TabsTrigger>
                                <TabsTrigger value="persetujuan">Membutuhkan persetujuan</TabsTrigger>
                            </TabsList>
                            <TabsContent value="penjualan">
                                <Card>
                                    <CardContent>
                                        <DataTable columns={columns_faktur} data={[]} search_data="no" search_placeholder="Cari nomor transaksi..." />
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="pengiriman">
                                <Card>
                                    <CardContent>

                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </InnerContent>
        </>
    )
}