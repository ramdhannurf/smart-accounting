import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const analytics_pelanggan: Array<{ title: string, count: number, total: string, color: string }> = [
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


export default function PelangganTabs() {
    return (
        <>
            <div className="flex flex-col gap-1">
                <div className="mb-5 grid grid-cols-3 gap-5">
                    {
                        analytics_pelanggan.map((el, i: number) => {
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
                <Card>
                    <CardContent>

                    </CardContent>
                </Card>
            </div>
        </>
    )
}