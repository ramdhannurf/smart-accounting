"use client"
import InnerContent from "@/components/InnerContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DataTable } from "../cash/data/data-table";
import { columns_account } from "./data/colums";
import { dummy_account } from "./data/dummy";
import Link from "next/link";
import Title from "@/components/Title";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import DropdownButton from "@/components/DropdownButton";
import { Separator } from "@/components/ui/separator";
import { Book, Cog, FileDown, FileText, Wallet } from "lucide-react";


export default function ListAccount() {
    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Title title="List Akun" subtitle="Akun">
                        <Link href={"/dashboard/journal_entries"}>
                            <Button>Buat Jurnal Umum</Button>
                        </Link>
                        <Link href={"/dashboard/list_account/add"}>
                            <Button>Buat Akun Baru</Button>
                        </Link>
                    </Title>
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
                                    <div className="flex justify-end">
                                        <DropdownButton title="Tindakan">
                                            <DropdownButton.Link href="#">
                                                <div className="flex gap-2">
                                                    <Cog size={16} className="self-center" />
                                                    <span>Pengaturan Akun</span>
                                                </div>
                                            </DropdownButton.Link>
                                            <DropdownButton.Link href="#">
                                                <div className="flex gap-2">
                                                    <Wallet size={16} className="self-center" />
                                                    <span>Atur Saldo Awal</span>
                                                </div>
                                            </DropdownButton.Link>
                                            <DropdownButton.Link href="#">
                                                <div className="flex gap-2">
                                                    <Book size={16} className="self-center" />
                                                    <span>Penutupan Buku</span>
                                                </div>
                                            </DropdownButton.Link>
                                            <Separator />
                                            <DropdownButton.Link href="#">
                                                <div className="flex gap-2">
                                                    <FileDown size={16} className="self-center" />
                                                    <span>Impor Jurnal Umum</span>
                                                </div>
                                            </DropdownButton.Link>
                                            <DropdownButton.Link href="#">
                                                <div className="flex gap-2">
                                                    <FileText size={16} className="self-center" />
                                                    <span>Ekspor Akun</span>
                                                </div>
                                            </DropdownButton.Link>
                                        </DropdownButton>
                                    </div>
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