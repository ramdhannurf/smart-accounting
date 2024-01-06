import InnerContent from "@/components/InnerContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTableRekonsilasi } from "./data/data-table";
import { columns_rekonsilasi } from "./data/columns";
import Link from "next/link";

export default function RekonsilasiPage() {
    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Card className="mb-5">
                        <CardContent className="py-3">
                            <div className="flex justify-between">
                                <div className="self-center">
                                    <p className="text-sm text-muted-foreground">Account - Cash & Bank</p>
                                    <h1 className="font-semibold text-2xl">Aturan Pencocokan</h1>
                                </div>
                                <div className="self-center">
                                    <Link href={"/dashboard/rekonsilasi/add"}>
                                        <Button>Buat Aturan Baru</Button>
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>List Aturan</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <DataTableRekonsilasi columns={columns_rekonsilasi} data={[]} />
                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
        </>
    )
}