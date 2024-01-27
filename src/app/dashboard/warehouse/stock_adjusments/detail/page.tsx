import InnerContent from "@/components/InnerContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

export default function StockAdjustmentsDetail() {
    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Card className="mb-5">
                        <CardContent className="py-3">
                            <div className="flex justify-between">
                                <div className="flex gap-4 self-center">
                                    <div className="self-center">
                                        <Link href={"/dashboard/product"}>
                                            <ArrowLeftCircle className="text-muted-foreground" />
                                        </Link>
                                    </div>
                                    <div className="self-center">
                                        <p className="text-sm text-muted-foreground">Penyesuaian Stok</p>
                                        <h1 className="font-semibold text-2xl">Detail Penyesuaian Stok #10001</h1>
                                    </div>
                                </div>
                                <div className="flex gap-3 self-center">
                                    <Button>Ubah</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Informasi Penyesuaian Stok</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-10">
                                <div className="flex gap-10">
                                    <div className="flex flex-col gap-3">
                                        <p className="text-sm text-muted-foreground">Tipe penyesuaian</p>
                                        <p className="text-sm text-muted-foreground">Akun</p>
                                        <p className="text-sm text-muted-foreground">Tanggal</p>
                                        <p className="text-sm text-muted-foreground">Gudang</p>
                                        <p className="text-sm text-muted-foreground">Tag</p>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <p className="text-sm font-medium">Umum</p>
                                        <p className="text-sm font-medium">Inventory</p>
                                        <p className="text-sm font-medium">29/12/2023</p>
                                        <p className="text-sm font-medium">-</p>
                                        <p className="text-sm font-medium">-</p>

                                    </div>
                                </div>
                                <div>
                                    <Table>
                                        <TableHeader className="bg-primary">
                                            <TableRow>
                                                <TableHead className="text-white">Nama Produk</TableHead>
                                                <TableHead className="text-white">Kode Produk</TableHead>
                                                <TableHead className="text-white">Jumlah Tercatat</TableHead>
                                                <TableHead className="text-white">Jumlah Sebenarnya</TableHead>
                                                <TableHead className="text-white">Perbedaan</TableHead>
                                                <TableHead className="text-white">Harga Rata-Rata</TableHead>
                                                <TableHead className="text-white"></TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>
                                                    <Link href={"/dashboard/product/detail"} className="text-primary hover:underline">
                                                        Telur
                                                    </Link>
                                                </TableCell>
                                                <TableCell>00123</TableCell>
                                                <TableCell>0 Pcs</TableCell>
                                                <TableCell>10 Pcs</TableCell>
                                                <TableCell>10 Pcs</TableCell>
                                                <TableCell>Rp. 0</TableCell>
                                                <TableCell>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                                <span className="sr-only">Open menu</span>
                                                                <DotsHorizontalIcon className="h-4 w-4" />
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent>
                                                            <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                                                            <DropdownMenuSeparator />
                                                            <DropdownMenuItem>Edit</DropdownMenuItem>
                                                            <DropdownMenuItem>Hapus</DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>
                                <div className="flex justify-between">
                                    <Button variant={"destructive"}>Hapus</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
        </>
    )
}