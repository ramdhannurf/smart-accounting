import InnerContent from "@/components/InnerContent";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";


const analytics_expenses: Array<{ title: string, count: number, total: string, color: string }> = [
    {
        title: "Total Biaya Bulan Ini (dalam IDR)",
        count: 0,
        total: "Rp. 0,00",
        color: "#c7e6c7"
    },
    {
        title: "Biaya 30 Hari Terakhir (dalam IDR)",
        count: 0,
        total: "Rp. 0,00",
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
                    <Card className="mb-5">
                        <CardContent className="py-3">
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-sm text-muted-foreground">Biaya</p>
                                    <h1 className="font-semibold text-2xl">Pengeluaran</h1>
                                </div>
                                <div className="flex gap-3 self-center">
                                    <Link href={"/dashboard/expenses/add"}>
                                        <Button>Buat Biaya Baru</Button>
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <div className="mb-5 grid grid-cols-3 gap-5">
                        {
                            analytics_expenses.map((el, i: number) => {
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
                    <Tabs defaultValue="biaya" className="w-full">
                        <TabsList>
                            <TabsTrigger value="biaya">Biaya</TabsTrigger>
                            <TabsTrigger value="persetujuan">Membutuhkan Persetujuan</TabsTrigger>
                        </TabsList>
                        <TabsContent value="biaya">
                            <Card>
                                <CardContent>

                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="persetujuan">
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