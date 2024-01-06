"use client"
import InnerContent from "@/components/InnerContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { DataTable } from "./data/data-table";
import { columns } from "./data/columns";
import Link from "next/link";
import { useRouter } from "next/navigation";

const analytics_cash: Array<{ title: string, count: number, total: string, color: string }> = [
    {
        title: "Pemasukan 30-Hari Mendatang (dalam IDR)",
        count: 0,
        total: "Rp. 0,00",
        color: "#c7e6c7"
    },
    {
        title: "Pengeluaran 30-Hari Mendatang (dalam IDR)",
        count: 0,
        total: "Rp. 0,00",
        color: "#f8c9c4"
    },
    {
        title: "Saldo Kas (dalam IDR)",
        count: 0,
        total: "Rp. 0,00",
        color: "#cef1fd"
    },
    {
        title: "Saldo Kartu Kredit (dalam IDR)",
        count: 0,
        total: "Rp. 0,00",
        color: "#cef1fd"
    },
]

export default function CashPage() {
    const router = useRouter();

    const go_to = (url: string) => {
        router.push(url);
    }

    return (
        <>
            <InnerContent>
                <div>
                    <Card className="mb-5">
                        <CardContent className="py-3">
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-sm text-muted-foreground">Kas & Bank</p>
                                    <h1 className="font-semibold text-2xl">Akun Kas</h1>
                                </div>
                                <div className="self-center">
                                    <Link href={'/dashboard/cash/add_account'}><Button>Buat Akun Baru</Button></Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <div className="mb-5 grid grid-cols-4 gap-5">
                        {
                            analytics_cash.map((el, i: number) => {
                                return <Card>
                                    <CardHeader style={{ backgroundColor: el.color }} className="rounded-t-lg">
                                        <CardTitle className="text-sm">{el.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="mt-2">
                                            <small>Total</small>
                                            <h3 className="text-lg font-bold">{el.total}</h3>
                                        </div>
                                    </CardContent>
                                </Card>
                            })
                        }
                    </div>
                    <Card>
                        <CardHeader>
                            <div className="flex justify-between">
                                <CardTitle>List Akun Kas</CardTitle>
                                <div className="flex gap-3">
                                    <Select onValueChange={go_to}>
                                        <SelectTrigger className="w-[180px] bg-primary text-white">
                                            <SelectValue placeholder="Buat Transaksi" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="/dashboard/cash/transfer_cash">Transfer Uang</SelectItem>
                                            <SelectItem value="/dashboard/cash/accept_cash">Terima Uang</SelectItem>
                                            <SelectItem value="/dashboard/cash/send_cash">Kirim Uang</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Link href={"/dashboard/rekonsilasi"}>
                                        <Button>Pengaturan Rekonsilasi</Button>
                                    </Link>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <DataTable columns={columns} data={[]} />
                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
        </>
    )
}