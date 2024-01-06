import { DrawerDialog } from "@/components/Dialog";
import DropdownButton from "@/components/DropdownButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Check, Delete, Pencil, Trash2, X } from "lucide-react";
import { useState } from "react";

export default function ModalExport({ open, setOpen }: { open: boolean, setOpen: any }) {
    const [add, setAdd] = useState<boolean>(false);

    return (
        <>
            <DrawerDialog title="Ekspor kontak" desc="Pilih dan ekspor informasi kontak yang Anda butuhkan." open={open} setOpen={setOpen}>
                <Card>
                    <CardContent className="py-4">
                        <div className="grid grid-cols-2 gap-5">
                            <div className="flex flex-col gap-3">
                                <Toggle aria-label="Toggle italic" className="data-[state=on]:bg-primary data-[state=on]:text-white justify-start" variant={'outline'}>
                                    Info Kontak
                                </Toggle>
                                <Separator />
                                <Toggle aria-label="Toggle italic" className="data-[state=on]:bg-primary data-[state=on]:text-white justify-start" variant={'outline'} disabled>
                                    Nama Panggilan
                                </Toggle>
                                <Toggle aria-label="Toggle italic" className="data-[state=on]:bg-primary data-[state=on]:text-white justify-start" variant={'outline'} disabled>
                                    Tipe
                                </Toggle>
                                <Toggle aria-label="Toggle italic" className="data-[state=on]:bg-primary data-[state=on]:text-white justify-start" variant={'outline'}>
                                    Grup
                                </Toggle>
                                <Toggle aria-label="Toggle italic" className="data-[state=on]:bg-primary data-[state=on]:text-white justify-start" variant={'outline'}>
                                    Nama Lengkap
                                </Toggle>
                                <Toggle aria-label="Toggle italic" className="data-[state=on]:bg-primary data-[state=on]:text-white justify-start" variant={'outline'}>
                                    Email
                                </Toggle>
                                <Toggle aria-label="Toggle italic" className="data-[state=on]:bg-primary data-[state=on]:text-white justify-start" variant={'outline'}>
                                    No. Handphone
                                </Toggle>
                                <Toggle aria-label="Toggle italic" className="data-[state=on]:bg-primary data-[state=on]:text-white justify-start" variant={'outline'}>
                                    No. Telepon
                                </Toggle>
                                <Toggle aria-label="Toggle italic" className="data-[state=on]:bg-primary data-[state=on]:text-white justify-start" variant={'outline'}>
                                    Fax
                                </Toggle>
                            </div>
                            <div>
                                <div className="flex flex-col gap-3">
                                    <Toggle aria-label="Toggle italic" className="data-[state=on]:bg-primary data-[state=on]:text-white justify-start" variant={'outline'}>
                                        Info Tambahan
                                    </Toggle>
                                    <Separator />
                                    <Toggle aria-label="Toggle italic" className="data-[state=on]:bg-primary data-[state=on]:text-white justify-start" variant={'outline'}>
                                        Nama Perusahaan
                                    </Toggle>
                                    <Toggle aria-label="Toggle italic" className="data-[state=on]:bg-primary data-[state=on]:text-white justify-start" variant={'outline'}>
                                        NPWP
                                    </Toggle>
                                    <Toggle aria-label="Toggle italic" className="data-[state=on]:bg-primary data-[state=on]:text-white justify-start" variant={'outline'}>
                                        Nomor Identitas
                                    </Toggle>
                                    <Toggle aria-label="Toggle italic" className="data-[state=on]:bg-primary data-[state=on]:text-white justify-start" variant={'outline'}>
                                        Alamat Penagihan
                                    </Toggle>
                                    <Toggle aria-label="Toggle italic" className="data-[state=on]:bg-primary data-[state=on]:text-white justify-start" variant={'outline'}>
                                        Alamat Pengiriman
                                    </Toggle>
                                    <Toggle aria-label="Toggle italic" className="data-[state=on]:bg-primary data-[state=on]:text-white justify-start" variant={'outline'}>
                                        Info Lainnya
                                    </Toggle>
                                    <Toggle aria-label="Toggle italic" className="data-[state=on]:bg-primary data-[state=on]:text-white justify-start" variant={'outline'}>
                                        Informasi Bank
                                    </Toggle>

                                </div>
                            </div>
                        </div>

                    </CardContent>
                </Card>
                <div className="flex flex-col gap-3">
                    <DropdownButton title="Ekspor">
                        <DropdownButton.Link href="#">Format Excel</DropdownButton.Link>
                        <DropdownButton.Link href="#">Format CSV</DropdownButton.Link>
                    </DropdownButton>
                    <Button variant={"outline"} onClick={() => setOpen(false)}>Batal</Button>
                </div>
            </DrawerDialog>
        </>
    )
}