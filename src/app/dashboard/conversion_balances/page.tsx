"use client"
import InnerContent from "@/components/InnerContent";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { dummy_account } from "../list_account/data/dummy";
import { Info, Plus } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import DropdownButton from "@/components/DropdownButton";
import { Separator } from "@/components/ui/separator";
import InputChange from "@/components/InputChange";


export default function ConversionBalancePage() {
    return (
        <>
            <InnerContent>
                <Title title="Saldo Awal" subtitle="Akun">
                    <h1 className="text-3xl font-bold text-yellow-500">Draf</h1>
                </Title>
                <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 grid-cols-1 gap-4">
                    <Card className="col-span-2">
                        <CardContent className="py-5">
                            <div className="flex flex-col gap-5">
                                <div className="flex justify-between">
                                    <div className="text-center w-full">
                                        <p className="text-sm">Silahkan masukkan saldo awal per tanggal <Link href={"#"} className="text-primary hover:underline">31/12/2023</Link></p>
                                    </div>
                                    <div>
                                        <Button>Pengaturan Akun</Button>
                                        {/* <p className="text-xs">* Klik pada angka untuk mengubah</p> */}
                                    </div>
                                </div>
                                <TooltipProvider>
                                    <div>
                                        <div className="h-[500px] overflow-y-auto">
                                            <Table>
                                                <TableHeader>
                                                    <TableRow className="sticky top-0">
                                                        <TableHead className="text-white bg-primary">Akun</TableHead>
                                                        <TableHead className="text-white bg-primary">
                                                            <div className="flex gap-2">
                                                                <span>Debit</span>
                                                                <Tooltip>
                                                                    <TooltipTrigger><Info size={14} className="self-center" /></TooltipTrigger>
                                                                    <TooltipContent>
                                                                        <p>Jumlah yang buram menandakan saldo negatif</p>
                                                                    </TooltipContent>
                                                                </Tooltip>
                                                            </div>
                                                        </TableHead>
                                                        <TableHead className="text-white bg-primary">
                                                            <div className="flex gap-2">
                                                                <span>Kredit</span>
                                                                <Tooltip>
                                                                    <TooltipTrigger><Info size={14} className="self-center" /></TooltipTrigger>
                                                                    <TooltipContent>
                                                                        <p>Jumlah yang buram menandakan saldo negatif</p>
                                                                    </TooltipContent>
                                                                </Tooltip>
                                                            </div>
                                                        </TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {
                                                        dummy_account.map((el, i: number) => {
                                                            return <TableRow key={i}>
                                                                <TableCell className="w-[500px]">
                                                                    <span className="text-primary cursor-pointer">{el.number} {el.name}</span>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <InputChange>0,00</InputChange>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <InputChange>0,00</InputChange>
                                                                </TableCell>
                                                            </TableRow>
                                                        })
                                                    }
                                                </TableBody>
                                            </Table>
                                        </div>
                                        <Table>
                                            <TableFooter>
                                                <TableRow >
                                                    <TableCell className="w-[500px]">Total</TableCell>
                                                    <TableCell>0,00</TableCell>
                                                    <TableCell className="text-end">0,00</TableCell>
                                                </TableRow>
                                            </TableFooter>
                                        </Table>
                                    </div>
                                </TooltipProvider>
                            </div>
                            <div className="flex justify-between mt-5">
                                <Button variant={"destructive"}>Reset</Button>
                                <div className="flex gap-3">
                                    <Link href={"/dashboard/list_account/add"}>
                                        <Button variant={"outline"}>Kembali</Button>
                                    </Link>
                                    <DropdownButton title="Simpan sebagai draf">
                                        <DropdownButton.Link href="#">Simpan sebagai draf</DropdownButton.Link>
                                        <DropdownButton.Link href="#">Terapkan</DropdownButton.Link>
                                    </DropdownButton>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="h-fit">
                        <CardContent className="p-0">
                            <TooltipProvider>
                                <div className="p-3">
                                    <div className="flex justify-between">
                                        <p className="font-semibold">Saldo Awal</p>
                                        <Tooltip>
                                            <TooltipTrigger><Info size={16} className="self-center" /></TooltipTrigger>
                                            <TooltipContent>
                                                <p>Saldo awal pada tanggal migrasi atau awal pembukuan.</p>
                                            </TooltipContent>
                                        </Tooltip>

                                    </div>
                                </div>
                                <Separator />
                                <div className="flex flex-col">
                                    <div className="px-4 border-b py-2 bg-[#FB749C]/[.30]">
                                        <p>01/01/2023 - 31/12/2023</p>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <div className="flex justify-between">
                                        <p className="font-semibold">Saldo Pembanding</p>
                                        <Tooltip>
                                            <TooltipTrigger><Info size={16} className="self-center" /></TooltipTrigger>
                                            <TooltipContent>
                                                <p>Saldo sebelum tanggal migrasi sebagai pembanding.</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </div>
                                </div>
                                <Separator />
                                <div className="flex flex-col">
                                    <div className="px-4 border-b py-2 bg-[#FB749C]/[.30]">
                                        <p>01/01/2023 - 31/12/2023</p>
                                    </div>
                                </div>
                                <Separator />
                                <div className="p-3">
                                    <div className="flex justify-center">
                                        <Plus size={16} className="self-center gap-2" />
                                        <p className="hover:underline cursor-pointer">Tambah Saldo Pembanding</p>
                                    </div>
                                </div>
                            </TooltipProvider>
                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
        </>
    )
}