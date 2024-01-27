"use client"

import { ComboBox } from "@/components/ComboBox"
import { DrawerDialog } from "@/components/Dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `Produk ${a.length - i}`
)

export default function AddProductModal({ open, setOpen }: { open: boolean, setOpen: any }) {
    return (
        <>
            <DrawerDialog title="Pilih Produk/Jasa" desc="lorem ipsum follar amets." open={open} setOpen={setOpen} max_width="700px">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <Input placeholder="Cari produk..." />
                            </div>
                            <div className="">
                                <Button>Cari</Button>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="flex flex-col gap-2">
                            <Label>Hasil Pencarian</Label>
                            <ScrollArea className="h-72 w-48 rounded-md border">
                                <div className="p-2">
                                    {tags.map((tag) => (
                                        <>
                                            <div className="flex px-3 py-2 gap-3 hover:bg-secondary rounded-lg cursor-pointer">
                                                <div>
                                                    <Checkbox id={`contact-${tag}`} />
                                                </div>
                                                <div key={tag} className="text-sm self-center">
                                                    <label htmlFor={`contact-${tag}`}>{tag}</label>
                                                </div>
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </ScrollArea>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <Label>Produk dipilih</Label>
                            <ScrollArea className="h-72 w-full rounded-md border">
                                <div className="p-2">
                                    {tags.map((tag) => (
                                        <>
                                            <div key={tag} className="text-sm px-3 py-3 hover:bg-secondary rounded-lg cursor-pointer">
                                                {tag}
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </ScrollArea>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center space-x-2 self-center">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Pilih semua kontak
                            </label>
                        </div>
                        <div className="flex gap-2">
                            <Button variant={"outline"} onClick={() => setOpen(false)}>Batal</Button>
                            <Button>Simpan</Button>
                        </div>
                    </div>
                </div>
            </DrawerDialog>
        </>
    )
}