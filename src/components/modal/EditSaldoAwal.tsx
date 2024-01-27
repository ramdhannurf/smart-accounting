import { Dispatch, SetStateAction } from "react";
import { DrawerDialog } from "../Dialog";
import { Label } from "../ui/label";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { CheckCircle2, HelpCircle } from "lucide-react";
import { DatePicker } from "../date-time";
import { Alert, AlertDescription } from "../ui/alert";
import { Button } from "../ui/button";
import Link from "next/link";

export default function EditSaldoAwal({ open, setOpen }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) {
    return <DrawerDialog open={open} setOpen={setOpen} title="Edit Saldo Awal" desc="Pilih tanggal konversi">
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2 mt-2">
                <div className="flex gap-2">
                    <Label>Tanggal Konversi</Label>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <HelpCircle size={12} />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Tanggal mulai pencatatan di Jurnal</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
                <DatePicker />
            </div>
            <div>
                <Alert>
                    <AlertDescription>
                        <h4 className="font-bold">Perlu diketahui</h4>
                        <div className="flex flex-col gap-3 mt-3">
                            <div className="flex gap-2">
                                <div>
                                    <CheckCircle2 size={16} className="text-primary relative top-1" />
                                </div>
                                <div>
                                    <p className="text-sm">Anda dapat mengubah tanggal konversi selama belum melakukan tutup buku.</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div>
                                    <CheckCircle2 size={16} className="text-primary relative top-1" />
                                </div>
                                <div>
                                    <p className="text-sm">Anda bisa input transaksi sebelum tanggal konversi dengan batasan 300.000 akun transaksi. Transaksi yang diinput tidak akan memengaruhi saldo saat ini.</p>
                                </div>
                            </div>
                        </div>
                    </AlertDescription>
                </Alert>
            </div>
            <div className="flex flex-col gap-3">
                <Link href={"/dashboard/conversion_balances"} className="w-full">
                    <Button className="w-full">Lihat Saldo Konversi</Button>
                </Link>
                <Button variant={"outline"} onClick={() => setOpen(false)}>Batal</Button>
            </div>
        </div>
    </DrawerDialog>
}