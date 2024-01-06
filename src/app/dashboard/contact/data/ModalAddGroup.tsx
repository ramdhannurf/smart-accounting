import { DrawerDialog } from "@/components/Dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, Delete, Pencil, Trash2, X } from "lucide-react";
import { useState } from "react";

export default function ModalAddGroup({ open, setOpen }: { open: boolean, setOpen: any }) {
    const [add, setAdd] = useState<boolean>(false);

    return (
        <>
            <DrawerDialog title="Pengaturan grup kontak" desc="lorem ipsum dollar amet." open={open} setOpen={setOpen} max_width="700px">
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                        <div className="">
                            <Input placeholder="Cari grup..." />
                        </div>
                        <div className="self-center">
                            <Button size={"sm"} onClick={() => setAdd(true)}>Buat Grup</Button>
                        </div>
                    </div>
                    {
                        add === true && <div>
                            <Card>
                                <CardContent className="py-3 px-3">
                                    <div className="flex justify-between gap-3">
                                        <div className="flex-1">
                                            <Input placeholder="Masukan judul grup..." />
                                        </div>
                                        <div className="flex gap-3 self-center">
                                            <Button size={"sm"} onClick={() => setAdd(false)}><Check size={16} /></Button>
                                            <Button variant={"outline"} size={"sm"} onClick={() => setAdd(false)}><X size={16} /></Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    }
                    <div>
                        <Table>
                            <TableHeader className="bg-primary">
                                <TableRow>
                                    <TableHead className="text-white">Nama Grup</TableHead>
                                    <TableHead className="text-white">Jumlah Kontak</TableHead>
                                    <TableHead className="text-white"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <div className="flex gap-3">
                                            <div>
                                                <span>Group 1</span>
                                            </div>
                                            <div className="self-center">
                                                <Pencil size={16} className="text-muted-foreground cursor-pointer" />
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>3</TableCell>
                                    <TableCell>
                                        <Trash2 size={18} className="text-muted-foreground cursor-pointer" />
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>

                    <div className="flex justify-end">
                        <div>
                            <Button variant={"outline"} onClick={() => setOpen(false)}>Selesai</Button>
                        </div>
                    </div>
                </div>
            </DrawerDialog>
        </>
    )
}