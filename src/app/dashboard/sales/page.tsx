"use client"
import DropdownButton from "@/components/DropdownButton";
import InnerContent from "@/components/InnerContent";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
                    <Card className="mb-5">
                        <CardContent className="py-3">
                            <div className="flex justify-between">
                                <div className="self-center">
                                    <h1 className="font-semibold text-2xl">Penjualan</h1>
                                </div>
                                <div className="flex gap-3">
                                    <Button variant={"outline"}>Import</Button>
                                    <DropdownButton title="Buat penjualan baru" variant={"default"}>
                                        <DropdownButton.Link href="/dashboard/sales/add/sales_billing">Penagihan Penjualan</DropdownButton.Link>
                                        <DropdownButton.Link href="/dashboard/merged_invoices">Tukar Faktur</DropdownButton.Link>
                                        <DropdownButton.Link href="/dashboard/sales/add/sales_orders">Pemesanan Penjualan</DropdownButton.Link>
                                        <DropdownButton.Link href="/dashboard/sales/add/sales_offer">Penawaran Penjualan</DropdownButton.Link>
                                    </DropdownButton>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <div className="mb-5 grid grid-cols-3 gap-5">
                        {
                            analytics_penjualan.map((el, i: number) => {
                                return <Card>
                                    <CardHeader style={{ backgroundColor: el.color }} className="rounded-t-lg flex justify-between !flex-row">
                                        <div className="self-center">
                                            <CardTitle className="text-sm">{el.title}</CardTitle>
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
                    <Tabs defaultValue="pembelian" className="w-full">
                        <TabsList>
                            <TabsTrigger value="pembelian">Faktur pembelian</TabsTrigger>
                            <TabsTrigger value="faktur">Tukar faktur pembelian</TabsTrigger>
                            <TabsTrigger value="pengiriman">Pengiriman</TabsTrigger>
                            <TabsTrigger value="pemesanan">Pemesanan pembelian</TabsTrigger>
                            <TabsTrigger value="penawaran">Penawaran pembelian</TabsTrigger>
                            <TabsTrigger value="permintaan">Permintaan pembelian</TabsTrigger>
                            <TabsTrigger value="persetujuan">Membutuhkan persetujuan</TabsTrigger>
                        </TabsList>
                        <TabsContent value="pembelian">
                            <Card>
                                <CardContent>

                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="faktur">
                            <Card>
                                <CardContent>

                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </InnerContent>
        </>
    )
}