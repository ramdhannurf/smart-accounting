import InnerContent from "@/components/InnerContent";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function AddWarehouse() {
    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Title title="Tambah gudang baru" subtitle="Gudang"></Title>
                    <Card>
                        <CardHeader>
                            <CardTitle>Informasi Gudang</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-5 2xl:w-1/2 xl:w-1/2 w-full">
                                <div className="flex flex-col gap-2">
                                    <Label>Nama gudang <small className="text-destructive">*</small></Label>
                                    <Input />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label>Kode gudang</Label>
                                    <Input />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label>Alamat</Label>
                                    <Textarea />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label>Keterangan</Label>
                                    <Textarea />
                                </div>
                                <div className="flex justify-end">
                                    <div className="flex gap-3">
                                        <Link href={"/dashboard/product"}>
                                            <Button variant={"outline"}>Batal</Button>
                                        </Link>
                                        <Button>Simpan</Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
        </>
    )
}