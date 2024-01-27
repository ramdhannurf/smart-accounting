import { DataTable } from "@/app/dashboard/cash/data/data-table";
import InnerContent from "@/components/InnerContent";
import Title from "@/components/Title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { columns_perusahaan } from "./column";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const analytics: Array<{ title: string, count: number, total: string, color: string }> = [
    {
        title: "Total Perusahaan",
        count: 0,
        total: "200",
        color: "#c7e6c7"
    },
    {
        title: "Active Perusahaan",
        count: 0,
        total: "150",
        color: "#cef1fd"
    },
    {
        title: "Inactive Perusahaan",
        count: 0,
        total: "100",
        color: "#f8c9c4"
    }
]

export default function CompanyPage() {
    return (
        <>
            <InnerContent>
                <Title title="Daftar Perusahaan" subtitle=""></Title>
                <div className="flex flex-col gap-5">
                    <div className="grid grid-cols-3 gap-5">
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
                                <CardTitle>List Perusahaan</CardTitle>
                                <Link href={"/sa-admin/dashboard/company/add"}>
                                    <Button>Tambah Perusahaan Baru</Button>
                                </Link>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <DataTable columns={columns_perusahaan} data={[]} search_data="nama_perusahaan" search_placeholder="Cari nama perusahaan..." />
                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
        </>
    )
}