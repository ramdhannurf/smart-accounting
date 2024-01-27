import { DataTable } from "@/app/dashboard/cash/data/data-table";
import InnerContent from "@/components/InnerContent";
import Title from "@/components/Title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { columns_sales } from "./column";

const analytics: Array<{ title: string, count: number, total: string, color: string }> = [
    {
        title: "Total Pendapatan",
        count: 0,
        total: "200",
        color: "#c7e6c7"
    },
    {
        title: "Pendapatan Terbaru",
        count: 0,
        total: "150",
        color: "#cef1fd"
    }
]

export default function SalesPage() {
    return (
        <>
            <InnerContent>
                <Title title="Daftar Penjualan" subtitle=""></Title>
                <div className="flex flex-col gap-5">
                    <div className="grid grid-cols-2 gap-5">
                        {
                            analytics.map((el, i: number) => {
                                return <Card key={i}>
                                    <CardHeader style={{ backgroundColor: el.color }} className="rounded-t-lg flex justify-between !flex-row">
                                        <div className="self-center">
                                            <CardTitle className="text-sm text-black">{el.title}</CardTitle>
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
                    <Card>
                        <CardHeader>
                            <div className="flex justify-between">
                                <CardTitle>List Penjualan</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <DataTable columns={columns_sales} data={[]} />
                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
        </>
    )
}