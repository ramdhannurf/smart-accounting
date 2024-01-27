"use client"
import InnerContent from "@/components/InnerContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ExistingRole from "./ExistingRole";
import { useState } from "react";
import SheetCustomRole from "./modal/SheetCustomRole";
import Link from "next/link";
import { DataTable } from "../../cash/data/data-table";
import { columns_custom_role } from "./data/column";
import { data_role } from "./modal/data";
import Title from "@/components/Title";

export default function UserManagementAdd() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Title title="Tambah user baru" subtitle=""></Title>
                    <Card className="mb-5">
                        <CardHeader>
                            <CardTitle>Informasi Pengguna</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-5 2xl:w-1/2 xl:w-1/2 w-full">
                                <div className="flex flex-col gap-2">
                                    <Label>Nama pengguna <small className="text-destructive">*</small></Label>
                                    <Input />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label>Email <small className="text-destructive">*</small></Label>
                                    <Input />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="mb-5">
                        <CardHeader>
                            <CardTitle>Peran</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue="existing" className="">
                                <TabsList>
                                    <TabsTrigger value="existing">Existing</TabsTrigger>
                                    <TabsTrigger value="custom">Custom</TabsTrigger>
                                </TabsList>
                                <TabsContent value="existing">
                                    <ExistingRole />
                                </TabsContent>
                                <TabsContent value="custom">
                                    <div className="flex flex-col gap-3">
                                        <div className="flex justify-end">
                                            <Button onClick={() => setOpen(true)}>Tambah peran custom</Button>
                                        </div>

                                        <div>
                                            <DataTable columns={columns_custom_role} data={data_role} />
                                        </div>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="py-4">
                            <div className="flex gap-3 justify-end">
                                <Link href={"/dashboard/settings/authorization"}>
                                    <Button variant={"outline"}>Kembali</Button>
                                </Link>
                                <Button>Undang</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
            <SheetCustomRole open={open} setOpen={setOpen} />
        </>
    )
}