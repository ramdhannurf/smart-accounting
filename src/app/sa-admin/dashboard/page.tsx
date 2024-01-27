"use client"
import LineBarComposed from "@/app/dashboard/overview/chart/LIneBarComposed";
import LineBarChart from "@/app/dashboard/overview/chart/LineBarChart";
import CardAnalytics from "@/components/CardAnalytics";
import InnerContent from "@/components/InnerContent";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { data_bestselling, data_orders, data_visitor } from "./data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const analytics_penjualan: Array<{ title: string, count: number, total: string, color: string }> = [
    {
        title: "Total Pendapatan",
        count: 0,
        total: "Rp. 200.000.000",
        color: "#c7e6c7"
    },
    {
        title: "Total Users",
        count: 0,
        total: "250",
        color: "#cef1fd"
    },
    {
        title: "Active Users",
        count: 0,
        total: "150",
        color: "#cef1fd"
    },
    {
        title: "Inactive Users",
        count: 0,
        total: "100",
        color: "#f8c9c4"
    }
]

export default function DashboardAdminPage() {
    return (
        <>
            <InnerContent>
                <div className="flex flex-col gap-5">
                    <div className="grid grid-cols-4 gap-5">
                        {
                            analytics_penjualan.map((el, i: number) => {
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
                    <div className="grid grid-cols-4 gap-5">
                        <CardAnalytics title="Pendapatan" className="col-span-2">
                            <LineBarComposed />
                        </CardAnalytics>
                        <CardAnalytics title="Users" className="col-span-2">
                            <LineBarChart />
                        </CardAnalytics>
                        <CardAnalytics title="Orders" className="col-span-1 max-h-[300px] overflow-y-auto">
                            <div className="flex flex-col">
                                {
                                    data_orders.map((el, i: number) => {
                                        return <div className="flex gap-4 border-b py-3" key={i}>
                                            <div className="self-center">
                                                <Avatar>
                                                    <AvatarImage src={el.src} alt="@shadcn" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <div className="self-center">
                                                <p className="font-semibold text-md leading-4">{el.name}</p>
                                                <small className="text-muted-foreground">{el.company}</small>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </CardAnalytics>
                        <CardAnalytics title="Last Orders" className="col-span-1 max-h-[300px] overflow-y-auto">
                            <div className="flex flex-col">
                                {
                                    data_orders.map((el, i: number) => {
                                        return <div className="flex gap-4 border-b py-3" key={i}>
                                            <div className="self-center">
                                                <Avatar>
                                                    <AvatarImage src={el.src} alt="@shadcn" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <div className="self-center">
                                                <p className="font-semibold text-md leading-4">{el.name}</p>
                                                <small className="text-muted-foreground">{el.company}</small>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </CardAnalytics>
                        <CardAnalytics title="Best Services" className="col-span-1 max-h-[300px] overflow-y-auto">
                            <div className="flex flex-col">
                                {
                                    data_bestselling.map((el, i: number) => {
                                        return <div className="flex gap-4 border-b py-3 justify-between" key={i}>
                                            <div className="self-center">
                                                <p className="font-semibold text-md leading-4">{el.service}</p>
                                            </div>
                                            <div className="self-center">
                                                <Badge>{el.count}</Badge>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </CardAnalytics>
                        <CardAnalytics title="Visitor" className="col-span-1 max-h-[300px] overflow-y-auto">
                            {
                                data_visitor.map((el, i: number) => {
                                    return <div className="flex gap-4 border-b py-3" key={i}>
                                        <div className="self-center">
                                            <div className="p-1 bg-[#ededed] rounded-md">
                                                <img src={`https://flagsapi.com/${el.code.toUpperCase()}/flat/64.png`} alt="@shadcn" width={40} />
                                            </div>
                                        </div>
                                        <div className="self-center flex justify-between w-full">
                                            <p className="font-semibold text-md leading-4">{el.country}</p>
                                            <Badge>{el.count}</Badge>
                                        </div>
                                    </div>
                                })
                            }
                        </CardAnalytics>
                    </div>
                </div>
            </InnerContent>
        </>
    )
}