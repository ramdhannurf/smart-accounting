"use client"
import { Button } from "@/components/ui/button";
import { DataTable } from "../../cash/data/data-table";
import { columns_authorization } from "./data/columns-authorization";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { columns_custom_role } from "../../owner/user/data/column";
import { data_role } from "../../owner/user/modal/data";
import { useState } from "react";
import SheetCustomRole from "../../owner/user/modal/SheetCustomRole";

export default function AuthorizationForm() {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            <Tabs defaultValue="new_user">
                <TabsList>
                    <TabsTrigger value="new_user">User Baru</TabsTrigger>
                    <TabsTrigger value="custom_authorization">Custom Hak Akses</TabsTrigger>
                </TabsList>
                <TabsContent value="new_user">
                    <div className="flex flex-col gap-5 p-1">
                        <div className="flex justify-end">
                            <Link href={"/dashboard/owner/user"}>
                                <Button>Tambah user baru</Button>
                            </Link>
                        </div>
                        <div className="overflow-y-auto">
                            <DataTable data={[]} columns={columns_authorization} search_data="nama_user" search_placeholder="Cari nama user..." />
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="custom_authorization">
                    <div className="flex flex-col gap-5 p-1">
                        <div className="flex justify-end">
                            <Button onClick={() => setOpen(true)}>Tambah peran custom</Button>
                        </div>
                        <div className="overflow-y-auto">
                            <DataTable columns={columns_custom_role} data={data_role} />
                        </div>
                    </div>

                </TabsContent>
            </Tabs>
            <SheetCustomRole open={open} setOpen={setOpen} />
        </>
    )
}