"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { data_dummy_role } from "./data"
import { useState } from "react"
import { number } from "zod"
import { Button } from "@/components/ui/button"


export default function SheetCustomRole({ open, setOpen }: { open: boolean, setOpen: any }) {
    const [selected_feature, setSelectedFeature] = useState<number>(0);

    const [filteredData, setFilteredData] = useState(data_dummy_role);

    const handleFilter = (filterTerm: number) => {
        const filteredItems = data_dummy_role.filter((item, index) => index === filterTerm);
        setFilteredData(filteredItems);
    };

    return (
        <>

            <Sheet open={open} onOpenChange={setOpen}>
                <SheetContent className="sm:max-w-[1000px] overflow-y-auto">
                    <SheetHeader>
                        <SheetTitle>Tambah Peran Custom</SheetTitle>
                        <SheetDescription>
                            {/* This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers. */}
                        </SheetDescription>


                    </SheetHeader>
                    <div className="flex flex-col gap-5 2xl:w-1/2 xl:w-1/2 w-full">
                        <div className="flex flex-col gap-2">
                            <Label>Nama peran <small className="text-destructive">*</small></Label>
                            <Input type="text" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Keterangan</Label>
                            <Textarea />
                            <small>Maksimum 400 karakter</small>
                        </div>
                    </div>
                    <div className="pt-5">
                        <Separator />
                    </div>
                    <div className="py-5">
                        <h1 className="text-2xl font-bold">Wewenang <span className="text-destructive">*</span></h1>
                    </div>

                    <div className="w-full overflow-y-auto mb-5">
                        <div className="flex">
                            <div className="border-r w-[200px]">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[200px]">Fitur (0)</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {
                                            data_dummy_role.map((el, i: number) => {
                                                return <TableRow key={i} className="cursor-pointer" onClick={() => {
                                                    handleFilter(i);
                                                    setSelectedFeature(i)
                                                }}>
                                                    <TableCell className={`py-3 ${selected_feature === i ? "bg-rose-400 bg-opacity-30" : ""}`}>
                                                        <div className="flex gap-3">
                                                            <div className="self-center">
                                                                <Checkbox id="terms" />
                                                            </div>
                                                            <div className="self-center">
                                                                {el.fitur}
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </div>
                            <div className="flex-1 w-full">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[300px]">Subfitur</TableHead>
                                            <TableHead>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="terms" />
                                                    <label
                                                        htmlFor="terms"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        Lihat
                                                    </label>
                                                </div>
                                            </TableHead>
                                            <TableHead>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="terms" />
                                                    <label
                                                        htmlFor="terms"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        Buat/Tambah
                                                    </label>
                                                </div>
                                            </TableHead>
                                            <TableHead>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="terms" />
                                                    <label
                                                        htmlFor="terms"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        Ubah
                                                    </label>
                                                </div>
                                            </TableHead>
                                            <TableHead>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="terms" />
                                                    <label
                                                        htmlFor="terms"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        Hapus
                                                    </label>
                                                </div>
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {
                                            filteredData[0].subfitur.map((el, i: number) => {
                                                return <TableRow key={i}>
                                                    <TableCell className={`py-3`}>
                                                        {el.name}
                                                    </TableCell>
                                                    <TableCell className={`py-3`}><Checkbox id={`read-${i}`} /></TableCell>
                                                    <TableCell className={`py-3`}><Checkbox id={`create-${i}`} /></TableCell>
                                                    <TableCell className={`py-3`}><Checkbox id={`update-${i}`} /></TableCell>
                                                    <TableCell className={`py-3`}><Checkbox id={`delete-${i}`} /></TableCell>
                                                </TableRow>
                                            })
                                        }

                                    </TableBody>
                                </Table>
                            </div>

                        </div>
                    </div>

                    <SheetFooter>
                        <Button variant={"outline"} onClick={() => setOpen(false)}>Batalkan</Button>
                        <Button>Simpan</Button>
                    </SheetFooter>
                </SheetContent>
            </Sheet>

        </>
    )
}