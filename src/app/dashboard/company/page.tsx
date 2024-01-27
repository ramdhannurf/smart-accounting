"use client"
import InnerContent from "@/components/InnerContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { DataTable } from "../cash/data/data-table";
import { columns_company } from "./data/columns";

import { useEffect, useState } from "react";
import NewPerusahaan from "@/components/NewPerusahaan";
import { RowSelectionState } from "@tanstack/react-table";


export default function CompanyPage() {
    const [open, setOpen] = useState<boolean>(false);
    const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

    useEffect(() => {
        console.log(rowSelection);
    }, [rowSelection]);

    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Card className="mb-5">
                        <CardContent className="py-3">
                            <div className="flex justify-between">
                                <div>
                                    <h1 className="font-semibold text-2xl">List Perusahaan</h1>
                                </div>
                                <div className="flex gap-3 self-center">
                                    <Link href={"/dashboard/settings/profile"}>
                                        <Button variant={"outline"}>Profil Akun</Button>
                                    </Link>
                                    <Button onClick={() => setOpen(true)}>Daftar Perusahaan Baru</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>List Perusahaan</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <small className="text-muted-foreground">Maksimal untuk Pin Perusahaan adalah 3 Pin.</small>
                            <DataTable columns={columns_company} setRowSelection={setRowSelection} rowSelection={rowSelection} data={[{
                                nama_perusahaan: "Acme Inc",
                                role: "Owner",
                                created_at: "01-01-2024",
                                aksi: "",
                                pin: true
                            },
                            {
                                nama_perusahaan: "Monsters Inc",
                                role: "Owner",
                                created_at: "02-01-2024",
                                aksi: "",
                                pin: false
                            },
                            {
                                nama_perusahaan: "Monsters Inc",
                                role: "Owner",
                                created_at: "02-01-2024",
                                aksi: "",
                                pin: false
                            },
                            {
                                nama_perusahaan: "Monsters Inc",
                                role: "Owner",
                                created_at: "02-01-2024",
                                aksi: "",
                                pin: false
                            }]} search_data="nama_perusahaan" search_placeholder="Cari nama perusahaan..." />
                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
            <NewPerusahaan open={open} setOpen={setOpen} />
        </>
    )
}