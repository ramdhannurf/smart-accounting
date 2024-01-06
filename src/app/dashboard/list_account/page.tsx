import InnerContent from "@/components/InnerContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DataTable } from "../cash/data/data-table";
import { columns_account } from "./data/colums";
import { dummy_account } from "./data/dummy";
import Link from "next/link";

export default function ListAccount() {
    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Card className="mb-5">
                        <CardContent className="py-3">
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-sm text-muted-foreground">Akun</p>
                                    <h1 className="font-semibold text-2xl">List Akun</h1>
                                </div>
                                <div className="flex gap-3 self-center">
                                    <Link href={"/dashboard/journal_entries"}>
                                        <Button>Buat Jurnal Umum</Button>
                                    </Link>
                                    <Link href={"/dashboard/list_account/add"}>
                                        <Button>Buat Akun Baru</Button>
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>List Akun</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue="semua" className="w-full">
                                <TabsList>
                                    <TabsTrigger value="semua">Semua</TabsTrigger>
                                    <TabsTrigger value="arsip">Arsip</TabsTrigger>
                                </TabsList>
                                <TabsContent value="semua">
                                    <DataTable columns={columns_account} data={dummy_account} search_data="name" search_placeholder="Cari nama akun..." />
                                </TabsContent>
                                <TabsContent value="arsip">
                                    <DataTable columns={columns_account} data={[]} search_data="name" search_placeholder="Cari nama akun..." />
                                </TabsContent>
                            </Tabs>

                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
        </>
    )
}