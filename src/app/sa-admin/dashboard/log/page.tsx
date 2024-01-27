import { DataTable } from "@/app/dashboard/cash/data/data-table";
import InnerContent from "@/components/InnerContent";
import Title from "@/components/Title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { columns_log } from "./column";

export default function LogPage() {
    return (
        <>
            <InnerContent>
                <Title title="Daftar Log Aktivitas" subtitle=""></Title>
                <div className="flex flex-col gap-5">
                    <Card>
                        <CardHeader>
                            <div className="flex justify-between">
                                <CardTitle>List Log</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <DataTable columns={columns_log} data={[]} search_data="action" search_placeholder="Cari action..." />
                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
        </>
    )
}