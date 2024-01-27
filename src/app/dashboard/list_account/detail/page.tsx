import InnerContent from "@/components/InnerContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DatePicker } from "@/components/date-time";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

export default function ListAccountDetailPage() {
    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Card className="mb-5">
                        <CardContent className="py-3">
                            <div className="flex justify-between">
                                <div className="flex gap-4 self-center">
                                    <div className="self-center">
                                        <Link href={"/dashboard/expenses"}>
                                            <ArrowLeftCircle className="text-muted-foreground" />
                                        </Link>
                                    </div>
                                    <div className="self-center">
                                        <p className="text-sm text-muted-foreground">Akun - Harga Pokok Penjualan</p>
                                        <h1 className="font-semibold text-2xl">(5-50000) Cost of Sales</h1>
                                    </div>
                                </div>
                                <div className="flex gap-3 self-center">
                                    <Button>Ubah Akun</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Transaksi Akun</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-5">
                                <div className="flex gap-3 justify-end">
                                    <div className="">
                                        <DatePicker />
                                    </div>
                                </div>
                                <div>
                                    <Table>
                                        <TableHeader className="bg-primary">
                                            <TableRow>
                                                <TableHead className="text-white">Tanggal</TableHead>
                                                <TableHead className="text-white">Nomor</TableHead>
                                                <TableHead className="text-white">Kontak</TableHead>
                                                <TableHead className="text-white">Debit (dalam IDR)</TableHead>
                                                <TableHead className="text-white">Kredit (dalam IDR)</TableHead>
                                                <TableHead className="text-white">Saldo (dalam IDR)</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>04/01/2024</TableCell>
                                                <TableCell>
                                                    <Link className="text-primary hover:underline" href={"/dashboard/expenses/detail"}>
                                                        Expense #10001
                                                    </Link>
                                                </TableCell>
                                                <TableCell>-</TableCell>
                                                <TableCell>900.000,00</TableCell>
                                                <TableCell>0,00</TableCell>
                                                <TableCell>900.000,00</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
        </>
    )
}