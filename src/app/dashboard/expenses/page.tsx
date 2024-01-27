import InnerContent from "@/components/InnerContent";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { DataTable } from "../cash/data/data-table";
import { columns_expenses } from "./data/columns";
import Title from "@/components/Title";


const analytics_expenses: Array<{ title: string, count: number, total: string, color: string }> = [
    {
        title: "Total Biaya Bulan Ini (dalam IDR)",
        count: 0,
        total: "Rp. 900.000,00",
        color: "#c7e6c7"
    },
    {
        title: "Biaya 30 Hari Terakhir (dalam IDR)",
        count: 0,
        total: "Rp. 900.000,00",
        color: "#f8c9c4"
    },
    {
        title: "Biaya Belum Dibayar (dalam IDR)",
        count: 0,
        total: "Rp. 0,00",
        color: "#cef1fd"
    }
]


export default function ExpensesPage() {
    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Title title="Pengeluaran" subtitle="Biaya">
                        <Link href={"/dashboard/expenses/add"}>
                            <Button>Buat Biaya Baru</Button>
                        </Link>
                    </Title>
                    <div className="mb-5 grid 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5">
                        {
                            analytics_expenses.map((el, i: number) => {
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
                    <Tabs defaultValue="biaya" className="w-full">
                        <TabsList>
                            <TabsTrigger value="biaya">Biaya</TabsTrigger>
                            <TabsTrigger value="persetujuan">
                                <div className="flex gap-2">
                                    <p>Membutuhkan Persetujuan</p>
                                    <Badge>2</Badge>
                                </div>
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="biaya">
                            <Card>
                                <CardContent>
                                    <DataTable data={[{
                                        tanggal: "10/01/2024",
                                        nomor: "Expense #10001",
                                        kategori: "Cost Of Sales",
                                        penerima: "",
                                        status: "Paid",
                                        sisa_tagihan: "Rp. 0,00",
                                        total: "Rp. 900.000,00",
                                        tags: "-"
                                    },
                                    {
                                        tanggal: "11/01/2024",
                                        nomor: "Expense #10002",
                                        kategori: "Cost Of Sales",
                                        penerima: "",
                                        status: "Draf",
                                        sisa_tagihan: "Rp. 0,00",
                                        total: "Rp. 900.000,00",
                                        tags: "-"
                                    }]} columns={columns_expenses} />
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="persetujuan">
                            <Card>
                                <CardContent>
                                    <DataTable data={[{
                                        tanggal: "10/01/2024",
                                        nomor: "Expense #10005",
                                        kategori: "Cost Of Sales",
                                        penerima: "",
                                        status: "Pending",
                                        sisa_tagihan: "Rp. 0,00",
                                        total: "Rp. 900.000,00",
                                        tags: "-"
                                    },
                                    {
                                        tanggal: "11/01/2024",
                                        nomor: "Expense #10006",
                                        kategori: "Cost Of Sales",
                                        penerima: "",
                                        status: "Revisi",
                                        sisa_tagihan: "Rp. 0,00",
                                        total: "Rp. 900.000,00",
                                        tags: "-"
                                    }]} columns={columns_expenses} />
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </InnerContent>
        </>
    )
}