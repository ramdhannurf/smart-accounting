import { DataTable } from "@/app/dashboard/cash/data/data-table";
import InnerContent from "@/components/InnerContent";
import Title from "@/components/Title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { columns_users } from "./column";

const analytics: Array<{ title: string, count: number, total: string, color: string }> = [
    {
        title: "Total Users",
        count: 0,
        total: "200",
        color: "#c7e6c7"
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

export default function UsersPage() {
    return (
        <>
            <InnerContent>
                <Title title="Daftar Users" subtitle=""></Title>
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
                                <CardTitle>List Users</CardTitle>
                                <Link href={"/sa-admin/dashboard/users/add"}>
                                    <Button>Tambah User Baru</Button>
                                </Link>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <DataTable columns={columns_users} data={[]} search_data="nama_user" search_placeholder="Cari nama user..." />
                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
        </>
    )
}