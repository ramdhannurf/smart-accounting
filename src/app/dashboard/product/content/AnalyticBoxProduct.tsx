import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { analytics_barang } from "./BarangJasa"

export default function AnalyticBoxProduct() {
    return (
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
            {
                analytics_barang.map((el, i: number) => {
                    return <Card key={i} className="shadow-none">
                        <CardHeader style={{ backgroundColor: el.color }} className="rounded-t-lg flex justify-between !flex-row">
                            <div className="self-center">
                                <CardTitle className="text-sm text-black">{el.title}</CardTitle>
                            </div>
                            {/* <div>
                                        <Badge className="bg-white text-black">{el.count}</Badge>
                                    </div> */}
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-between">
                                <div className="mt-2">
                                    <small>Total Produk</small>
                                    <h3 className="text-lg font-bold">{el.total}</h3>
                                </div>

                            </div>
                        </CardContent>
                    </Card>
                })
            }
        </div>
    )
}