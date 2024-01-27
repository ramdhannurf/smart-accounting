import InnerContent from "@/components/InnerContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTableRekonsilasi } from "./data/data-table";
import { columns_rekonsilasi } from "./data/columns";
import Link from "next/link";
import { DataTable } from "../cash/data/data-table";
import Title from "@/components/Title";

export default function RekonsilasiPage() {
    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Title title="Aturan Pencocokan" subtitle="Account - Cash & Bank">
                        <Link href={"/dashboard/rekonsilasi/add"}>
                            <Button>Buat Aturan Baru</Button>
                        </Link>
                    </Title>
                    <Card>
                        <CardHeader>
                            <CardTitle>List Aturan</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <DataTable columns={columns_rekonsilasi} data={[]} />
                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
        </>
    )
}