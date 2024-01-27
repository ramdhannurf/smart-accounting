import { ComboBox } from "@/components/ComboBox";
import InnerContent from "@/components/InnerContent";
import Title from "@/components/Title";
import { DatePicker } from "@/components/date-time";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";

export default function StockAdjustments() {
    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Title title="Siapkan penyesuian stok" subtitle="Produk"></Title>
                    <Card>
                        <CardContent className="py-5">
                            <div className="flex flex-col gap-10 w-1/2">
                                <div className="flex flex-col gap-3">
                                    <Label>Tipe penyesuaian</Label>
                                    <RadioGroup defaultValue="perhitungan_stok">
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="perhitungan_stok" id="r1" />
                                            <Label htmlFor="r1">Perhitugan Stok</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="stok_masuk_keluar" id="r2" />
                                            <Label htmlFor="r2">Stok Masuk/Keluar</Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                                <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
                                    <div className="flex flex-col gap-5 w-full">
                                        <div className="flex flex-col gap-2 w-full">
                                            <Label>Kategori penyesuaian</Label>
                                            <ComboBox select={[]} placeholder="Pilih kategori penyesuaian stok" search="Cari kategori penyesuaian stok..." name="kategori penyesuaian stok" />
                                        </div>
                                        <div className="flex flex-col gap-2 w-full">
                                            <Label>Akun</Label>
                                            <ComboBox select={[]} placeholder="Pilih akun" search="Cari akun..." name="akun" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        <div className="flex flex-col gap-2">
                                            <Label>Tanggal</Label>
                                            <DatePicker />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label>Gudang</Label>
                                            <ComboBox select={[]} placeholder="Pilih gudang" search="Cari gudang..." name="gudang" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <div className="flex gap-3">
                                        <Link href={"/dashboard/product"}>
                                            <Button variant={"outline"}>Batal</Button>
                                        </Link>
                                        <Button>Lanjutkan</Button>
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