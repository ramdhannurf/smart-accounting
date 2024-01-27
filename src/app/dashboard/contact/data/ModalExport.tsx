import { DrawerDialog } from "@/components/Dialog";
import DropdownButton from "@/components/DropdownButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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
                            <div className="flex flex-col gap-5">
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="info_kontak" />
                                    <label
                                        htmlFor="info_kontak"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Info Kontak
                                    </label>
                                </div>
                                <Separator />
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="nama_panggilan" disabled />
                                    <label
                                        htmlFor="nama_panggilan"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Nama Panggilan
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="tipe" disabled />
                                    <label
                                        htmlFor="tipe"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Tipe
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="Nama Lengkap" />
                                    <label
                                        htmlFor="Nama Lengkap"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Nama Lengkap
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="email" />
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Email
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="No. Handphone" />
                                    <label
                                        htmlFor="No. Handphone"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        No. Handphone
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="No. Telepon" />
                                    <label
                                        htmlFor="No. Telepon"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        No. Telepon
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="Fax" />
                                    <label
                                        htmlFor="Fax"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Fax
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-5">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="info_tambahan" />
                                        <label
                                            htmlFor="info_tambahan"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Info Tambahan
                                        </label>
                                    </div>
                                    <Separator />
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="nama_perusahaan" />
                                        <label
                                            htmlFor="nama_perusahaan"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Nama Perusahaan
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="npwp" />
                                        <label
                                            htmlFor="npwp"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            NPWP
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="Nomor Identitas" />
                                        <label
                                            htmlFor="Nomor Identitas"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Nomor Identitas
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="Alamat Penagihan" />
                                        <label
                                            htmlFor="Alamat Penagihan"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Alamat Penagihan
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="Alamat Pengiriman" />
                                        <label
                                            htmlFor="Alamat Pengiriman"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Alamat Pengiriman
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="Info Lainnya" />
                                        <label
                                            htmlFor="Info Lainnya"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Info Lainnya
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="Informasi Bank" />
                                        <label
                                            htmlFor="Informasi Bank"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Informasi Bank
                                        </label>
                                    </div>
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