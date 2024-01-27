"use client"
import { ComboBox } from "@/components/ComboBox";
import FileUpload from "@/components/FileUpload";
import InnerContent from "@/components/InnerContent";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, MoveRight, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { TagsInput } from "react-tag-input-component";

export default function TransferCash() {
    const [selected, setSelected] = useState<Array<string>>([]);
    const [files, setFiles] = useState<Array<File>>([]);

    return (
        <>
            <InnerContent>
                <div>
                    <Title title="Transfer Uang" subtitle="Transaksi"></Title>
                    <Card>
                        <CardContent className="py-6">
                            <div className="">
                                <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                                    <div className="flex gap-5">
                                        <Card className="w-full">
                                            <CardContent className="py-5">
                                                <div className="flex flex-col gap-2">
                                                    <Label htmlFor="">Transfer Dari</Label>
                                                    <ComboBox select={[]} placeholder="Pilih akun pembayaran" name="akun pembayaran" search="Cari akun pembayaran..." />
                                                </div>
                                            </CardContent>
                                        </Card>
                                        <div className="self-center hidden 2xl:block xl:block">
                                            <MoveRight />
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <Card className="w-full">
                                            <CardContent className="py-5">
                                                <div className="flex flex-col gap-2">
                                                    <Label htmlFor="">Setor Ke</Label>
                                                    <ComboBox select={[]} placeholder="Pilih akun pembayaran" name="akun pembayaran" search="Cari akun pembayaran..." />
                                                </div>
                                            </CardContent>
                                        </Card>

                                    </div>
                                    <div className="flex gap-5">
                                        <Card className="w-full">
                                            <CardContent className="py-5">
                                                <div className="flex flex-col gap-2">
                                                    <Label htmlFor="">Jumlah</Label>
                                                    <div className="relative">
                                                        <Input placeholder="0,00" className="pl-14" />
                                                        <div className="absolute top-0 bg-[#1257b6] text-white rounded-l-md p-[0.50rem] px-3 text-sm">
                                                            <span>Rp.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                                <div className="pt-8 pb-5">
                                    <CardTitle className="pb-3">Informasi Tambahan</CardTitle>
                                    <Separator />
                                </div>
                                <div className="flex flex-col gap-5 2xl:w-1/2 xl:w-1/2 w-full">
                                    <div className="flex flex-col gap-2">
                                        <Label>No. Transaksi</Label>
                                        <Input />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label>Tanggal Transaksi</Label>
                                        <Input />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label>Memo</Label>
                                        <Textarea />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label>Attachment</Label>
                                        <FileUpload files={files} setFiles={setFiles} multiple={true} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label>Tag</Label>
                                        <TagsInput
                                            value={selected}
                                            onChange={setSelected}
                                            placeHolder="enter tag"
                                            classNames={{
                                                input: "!text-sm focus:outline-primary",
                                                tag: "!text-sm"
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-3 justify-end mt-5">
                                    <Link href={"/dashboard/cash"}>
                                        <Button variant={"outline"}>Batal</Button>
                                    </Link>
                                    <Button>Buat Transferan</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
        </>
    )
}