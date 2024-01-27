import { SetStateAction } from "jotai";
import { Dispatch } from "react";
import { ComboBox } from "@/components/ComboBox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { DrawerDialog } from "@/components/Dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

export default function NewPerusahaan({ open, setOpen }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) {
    return <DrawerDialog title="Daftar Perusahaan Baru" desc="Lengkapi data berikut untuk mulai pakai Smart Accounting." open={open} setOpen={setOpen}>
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <Label htmlFor="">Nama perusahaan</Label>
                <Input />
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="">Industri</Label>
                <ComboBox select={[]} placeholder="Pilih industri" name="industri" search="Cari industri..." />
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="">Bahasa untuk Daftar Akun</Label>
                <ComboBox select={[]} placeholder="Pilih industri" name="industri" search="Cari industri..." />
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="">Paket Fitur</Label>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Pilih paket" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="free">
                            <span className="font-medium">Free</span> -{" "}
                            <span className="text-muted-foreground">
                                Trial for two weeks
                            </span>
                        </SelectItem>
                        <SelectItem value="pro">
                            <span className="font-medium">Pro</span> -{" "}
                            <span className="text-muted-foreground">
                                $9/month per user
                            </span>
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="">Keamanan PIN (Optional)</Label>
                <Input type="number" />
            </div>
            <div className="flex flex-col gap-2 mt-2">
                <Button>Daftar perusahaan</Button>
                <Button variant={"outline"} onClick={() => setOpen(false)}>Batal</Button>
            </div>
        </div>
    </DrawerDialog>
}